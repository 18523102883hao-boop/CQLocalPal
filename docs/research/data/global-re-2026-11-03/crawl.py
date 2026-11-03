#!/usr/bin/env python3
"""CQLocalPal 竞品全量逆向抓取：14 站技术指纹 + 业务数据批量提取"""
import re, json, os, html, concurrent.futures as cf
import urllib.request, urllib.error

BASE = os.path.dirname(os.path.abspath(__file__))
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"

SITES = {
    "toursbylocals":   ["https://www.toursbylocals.com/", "https://www.toursbylocals.com/china"],
    "withlocals":      ["https://www.withlocals.com/", "https://www.withlocals.com/china"],
    "guruwalk":        ["https://www.guruwalk.com/", "https://www.guruwalk.com/s?location=Chongqing"],
    "contexttravel":   ["https://www.contexttravel.com/", "https://www.contexttravel.com/cities/china"],
    "chinahighlights": ["https://www.chinahighlights.com/", "https://www.chinahighlights.com/chongqing/"],
    "lostplate":       ["https://lostplate.com/", "https://lostplate.com/chongqing/"],
    "240hoursinchina": ["https://www.240hoursinchina.com/", "https://www.240hoursinchina.com/chongqing"],
    "viator":          ["https://www.viator.com/", "https://www.viator.com/searchResults/all?text=Chongqing&page=1"],
    "klook":           ["https://www.klook.com/en-US/", "https://www.klook.com/en-US/search/?query=chongqing"],
    "civitatis":       ["https://www.civitatis.com/en/", "https://www.civitatis.com/en/chongqing/"],
    "kkday":           ["https://www.kkday.com/en-us", "https://www.kkday.com/en-us/search?query=chongqing"],
}

TECH_SIGS = [
    ("Next.js", r'__NEXT_DATA__|/_next/'),
    ("Nuxt", r'__NUXT__'),
    ("Gatsby", r'gatsby'),
    ("WordPress", r'wp-content|wp-includes|generator["\'] content=["\']WordPress'),
    ("Shopify", r'cdn\.shopify|Shopify\.theme'),
    ("Wix", r'wix\.com|_wixCssImports'),
    ("Squarespace", r'squarespace'),
    ("Webflow", r'webflow'),
    ("React", r'react(?:\.production)?\.min\.js|data-reactroot|reactRoot'),
    ("Vue", r'vue(?:\.min)?\.js|__VUE__'),
    ("Angular", r'ng-version|angular\.min\.js'),
    ("jQuery", r'jquery[-.]?\d*\.?min\.js'),
    ("Bootstrap", r'bootstrap(?:\.min)?\.css|bootstrap(?:\.bundle)?(\.min)?\.js'),
    ("Tailwind", r'tailwind|tailwindcss'),
    ("Astro", r'/_astro/'),
    ("Hugo/SSG-generator", r'generator["\'] content=["\'](Hugo|Eleventy|Jekyll|Astro)'),
    ("PHP", r'\.php'),
    ("Ruby on Rails", r'csrf-param|rails-ujs'),
    ("Cloudflare", r'cloudflare|cf-ray|__cf'),
]

def fetch(url):
    req = urllib.request.Request(url, headers={
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    })
    try:
        with urllib.request.urlopen(req, timeout=25) as r:
            body = r.read()
            headers = {k.lower(): v for k, v in r.headers.items()}
            return {"ok": True, "status": r.status, "url": r.geturl(),
                    "headers": {k: headers.get(k, "") for k in ("server", "x-powered-by", "cf-ray", "content-type")},
                    "html": body.decode("utf-8", errors="ignore")[:900000]}
    except Exception as e:
        return {"ok": False, "error": str(e)[:300]}

def analyze(url, res):
    if not res["ok"]:
        return {"url": url, "error": res["error"]}
    t = res["html"]
    def grab(pat):
        m = re.search(pat, t, re.S | re.I)
        return html.unescape(m.group(1).strip()) if m else ""
    tech = [name for name, sig in TECH_SIGS if re.search(sig, t)]
    gen = grab(r'<meta name="generator" content="(.*?)"')
    if gen and gen not in tech:
        tech.append("generator:" + gen)
    prices = sorted(set(re.findall(r'(?:US\$|USD\s?\$?|\$|€|£|¥)\s?\d[\d,]{1,8}(?:\.\d{2})?', t)))[:20]
    h1s = [re.sub(r"<[^>]+>", "", h).strip()[:120] for h in re.findall(r"<h1[^>]*>(.*?)</h1>", t, re.S | re.I)][:5]
    langs = sorted(set(re.findall(r'hrefLang=["\']([a-z]{2}(?:-[A-Za-z-]{2,5})?)["\']', t, re.I)))[:20]
    return {"url": url, "final_url": res["url"], "status": res["status"],
            "server_headers": res["headers"], "tech_detected": tech,
            "title": grab(r"<title>(.*?)</title>")[:160],
            "meta_desc": grab(r'<meta name="description" content="(.*?)"')[:220],
            "h1": h1s, "price_tokens": prices, "hreflang_langs": langs,
            "html_size_kb": len(t) // 1024}

def job(name, urls):
    outdir = os.path.join(BASE, name)
    os.makedirs(outdir, exist_ok=True)
    results = []
    for i, u in enumerate(urls):
        res = fetch(u)
        fn = f"page{i}.html"
        if res["ok"]:
            open(os.path.join(outdir, fn), "w", encoding="utf-8").write(res["html"])
        a = analyze(u, res)
        a["raw_file"] = fn if res["ok"] else None
        results.append(a)
    summary = {"site": name, "pages": results}
    with open(os.path.join(outdir, "extract.json"), "w", encoding="utf-8") as f:
        json.dump(summary, f, ensure_ascii=False, indent=1)
    return summary

with cf.ThreadPoolExecutor(max_workers=6) as ex:
    futs = {ex.submit(job, n, u): n for n, u in SITES.items()}
    for fut in cf.as_completed(futs):
        n = futs[fut]
        try:
            s = fut.result()
            st = [p.get("status", "ERR") for p in s["pages"]]
            print(f"[OK] {n}: {st}")
        except Exception as e:
            print(f"[FAIL] {n}: {e}")
print("ALL DONE")
