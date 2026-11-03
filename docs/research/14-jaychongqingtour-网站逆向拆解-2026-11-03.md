# Jay Chongqing Tour（jaychongqingtour.com）网站逆向拆解报告

**逆向日期**：2026-11-03
**方法**：被动侦察——sitemap 全量抓取（20 页面）、前端 JS 包（1.16MB）静态分析、公开 API 探测。未触发任何写操作、未绕过任何访问控制（`/api/bookings` 返回 401 即停止）。
**一句话结论**：这不是一个"个人导游主页"，而是一套**已经跑通收款闭环、月成交约 20–30 单、拥有 14 人导游池的正规军微型旅行社**；但其技术栈是 AI 模板建站，且存在一个尚无对手覆盖的产品空位。

---

## 一、技术栈画像

| 层 | 实测证据 | 说明 |
|---|---|---|
| 建站工具 | HTML 中 `fs-unmask-airo-app-builder`、`airo-assets`、`airoShareToken` | **Airo AI 建站工具**生成（模板化站点，非定制开发） |
| 前端 | React SPA + React Router SSR（`window.__staticRouterHydrationData`、`data-rh`）、Radix UI、Tailwind | 服务端渲染 + 客户端水合，SEO 友好 |
| 后端 | `x-powered-by: Express`、自定义头 `ss-product-id: aab-v1` | Node.js Express，可能是 Airo 平台统一后端 |
| 基础设施 | Cloudflare（`cf-ray`、`__cf_bm` cookie） | 免费/付费 CDN 代理 |
| 支付 | 支付宝/微信收款码（页面内嵌 QR）+ PayPal（收 4.5% 手续费转嫁） | 无电商收单，**人到账到的人工核销模式** |
| 分析 | Facebook Pixel（`fbevents.js`）+ 自有 `analytics.js`（Cookie 同意后才加载） | 投 FB/IG 广告，且做了 GDPR/CCPA 合规横幅 |

**含义**：网站本身没有技术护城河——任何人用 AI 建站工具一周能做出一样的。他的护城河在供给（导游团队）和口碑资产（评价库）。

## 二、站点结构与产品线全景

sitemap 共 20 个 URL。首页展示 **约 25 个在售产品**，分六大类：

| 类别 | 产品 | 时长 | 形态 |
|---|---|---|---|
| Chongqing by Car | City Through a Local's Eyes；Historic & Panoramic Night View；Cool Chongqing Escape；8-Hour Layover Tour；Chongqing at Your Own Pace（老人/家庭慢速版） | 8–9h | 包车+导游 |
| Chongqing by Foot | City Highlights & Viral Photo Spots；Hidden Local Neighborhoods；Ultimate Food Experience；3D Vertical City Walk；History Walk | 3–4h | 徒步 |
| Signature Nature | 大足石刻；武隆喀斯特；天眼洞旅拍；武隆+龚滩古镇2日 | 8h–2日 | 包车远途 |
| No Rules After Dark | Cyberpunk City Photo Walk；Motorcycle Night Ride；Hanging Realm Photo；Cyberpunk Photoshoot (Deyi World) | 30min–2.5h | 夜间/旅拍 |
| Curated Access | 1949 Theater；Banquet of Ba Kingdom；Wild Tea Houses；Banquet of Yu State；River Night Cruise | 30min–4h | 代订+体验 |
| Travel Services | **Chongqing Travel Concierge（¥200/次）**；Custom Private Tour（问卷定制） | 全程 | 远程+定制 |

另有支撑页：Reviews（评价库）、Write a Review（UGC 入口）、Our Team（14 导游）、Our License、Fleet（车队，客户端渲染）、Book Tour（下单）、Payment & Refund Policy、/admin/bookings（后台，已鉴权）。

## 三、定价体系（自 JS 包完整还原）

多日套餐分 **Car Tour / Walking Tour 两个版本**，按整组计价（1–4 人），¥100 订金锁单：

| 套餐 | Car Tour（1/2/3/4人） | Walking Tour（1/2/3/4人） |
|---|---|---|
| 2 日（城市+武隆） | ¥1,300 / ¥1,550 / ¥1,800 / ¥2,050 | ¥600 / ¥700 / ¥800 / ¥900 |
| 2 日（历史线） | ¥1,700 / ¥1,950 / ¥2,200 / ¥2,450 | ¥900 起 |
| 3 日（城市+历史） | ¥1,400 / ¥1,800 / … | ¥600–900 档 |
| 3 日（城市+历史+武隆） | ¥1,700 / ¥1,950 / ¥2,200 / ¥2,450 | ¥1,300 / ¥1,500 档 |
| 4 日（+大足） | ¥1,800 / ¥2,200 档 | — |

单日常规产品（首页 by Car 类）约 ¥1,200–1,600/车（9h）；徒步类 ¥600–1,000。**Travel Concierge 统一定价 ¥200/次（≈$28/€24）**，是我们已知的锚点产品，含：行前咨询、App/支付宝/微信开通指导、交通指引、行中 WeChat/WhatsApp 真人应答。明确不含：全天陪游、包车、门票、机酒。

**定价策略读法**：
- 三币种标价（¥/$/€）——锚定欧美客的心理账户；
- 订金模式（¥100）把支付摩擦降到极低，尾款线下支付宝收——**规避了外卡收单的全部合规与通道成本**；
- PayPal 通道开放但把 4.5% 手续费显式转嫁给客户（¥105 总价），引导客户走支付宝。

## 四、交易闭环还原

```
首页/SEO/社媒 → 产品页（含行程明细+价格表）
   → WhatsApp +86 150 8437 9665 / WeChat 咨询
   → /book-tour 选产品填表（国籍/日期/WhatsApp/邮箱）
   → ¥100 订金：扫支付宝/微信码 或 PayPal(+$5)
   → WhatsApp 发截图人工核销 → 24h 内确认
   → 服务交付（导游池派单）
   → /write-review 回收评价（照片可传）
   → 评价审核入库 → /reviews 与首页展示 → 反哺 SEO 与转化
```

取消政策：7 天前全额退订金，7 天内不退；天气原因全退或改期。门票/第三方服务全款预付、按供应商政策退。

## 五、团队与资质

- 持牌导游：**Zhang Jiayuan（Jay），导游证号 IHR6575E**，文旅部备案，英语+普通话（/license 页公示）。
- 导游池 **14 人**：Jay、Tim、Lynne、Eddy、Slash、Randy、Seven、Bangki、Sam、Miki、Sophia、Mandy、Lee + 1。每人有自我介绍视频、风格标签（Warm & Friendly / Patient）、专长图标（美食/城市/历史/户外/摄影/夜生活）、语言旗标。Sam 的标签是"Night time DJ, King of Nightlife"——夜间产品线有专人承接。
- 关键判断：多导游 + 派单制意味着 Jay 已从"个体导游"转型为**微型地接社**，且武隆页面注明"导游在景区门口讲解后客人自行游览"——**对导游工时的榨取很精细**。

## 六、经营实况（公开评价 API 全量分析）

`/api/reviews` 无需鉴权返回全部评价字段（id、星级、导游、评价全文、客户全名、国籍、出游日期）。共抓取 **113 条**：

| 维度 | 数据 | 解读 |
|---|---|---|
| 星级 | **113 条全部 5 星** | 有审核环节（字段 approved=1）——差评被过滤，评价库是精修橱窗，非原始口碑 |
| 出游时间分布 | 2026-04:8｜05:13｜06:11｜07:7｜08:10｜**09:28**｜**10:23**｜11月头:1 | 近两个月爆发式增长；按评价反推月成交约 20–30 单（假设 50–80% 客人留评） |
| 导游接单量 | Jay 68｜Tim 11｜Sam 7｜Randy 5｜Eddy 5｜其余分散 | Jay 本人仍接大头，团队是峰值产能补充 |
| 客源国籍 | Other 53｜美国 17｜澳洲 7｜英国 6｜德国 4｜加拿大 4｜新加坡 3｜法国/意大利各 3 | 与我们调研的"泰马新越"客源结构**不同**——他的盘子里欧美客占比更高，可能是内容/SEO 语种决定的 |
| 评价系统上线 | 首条记录创建于 2026-08-09，但出游日期回溯到 2024-01 | 老店新开：2024 年已开始经营，评价库是近期集中导入+持续新增 |
| 评价文本共性 | 高频词：local spots / knowledge / seamless booking / worth the price | 卖点被客户复述为："本地隐秘点位 + 知识 + 流畅履约" |

## 七、获客与营销机制

- **SEO**：全英文 SSR 页面 + 每产品独立 URL + 结构化数据（JSON-LD：`#tour`、`#organization`、`#website`、`#webpage`）+ sitemap 规范——典型的搜索获客站点。
- **社媒矩阵**：Facebook / Instagram / TikTok 同号 `@jaychongqingtour`；页面埋 FB Pixel 说明在跑付费投放或至少做了再营销准备。
- **UGC 飞轮**：write-review 页支持传 5 张照片 → 审核入首页轮播 → 转化与 SEO 双吃。这是他的核心增长引擎。
- **直连优先**：全站 CTA 全部是 WhatsApp/WeChat 直连二维码，表单只是备份——**人工转化、无自动撮合**。

## 八、安全与隐私发现（顺带的进攻面观察）

1. `/api/reviews` 公开返回客户**全名+国籍+出游日期**（PII 明文）——GDPR 视角下是隐患；也提示其后台鉴权做的很简单。
2. `/admin/bookings` 已鉴权（401），未发现越权。
3. 前端 JS 包中残留 5 个未脱敏手机号（13710726190、14266135292、14292108068、15056689750、+61 498 578 6295 澳洲号）——推测是团队成员/旧号，属于信息 hygiene 问题。
4. 整站无 rate-limiting 迹象（本次全站抓取未触发封禁）。

## 九、对 CQLocalPal 的启示

**他证明了什么**（降低我们的验证风险）：
- 重庆有稳定的英语散客付费盘，且近两个月在放量；
- ¥200 纯远程服务有人买——"首晚现场陪伴"在价格上有上浮空间；
- 订金+二维码收款的人工闭环完全跑得通，前期根本不需要收单通道。

**他的空位（我们的机会）**：
1. **Concierge 只有远程，没有"第一晚到场"**——客户在最容易失败的 24 小时（落地、支付、通信、入住）无人到场，这正是我们方案中的英雄产品位；
2. **评价全 5 星 = 精修橱窗**，我们可以用"未过滤评价 + 服务过程透明"做信任差异；
3. **客源结构错位**：他吃欧美英语客，泰马新越的母语分层服务无人做——两套获客内容几乎不正面碰撞；
4. **网站是模板**，品牌与内容深度有限；但他的产品力不在网站，在导游池——我们不可轻视其供给优势，正面拼"效率与服务标准"时，他的响应速度（24h 确认）是一个可量化的对标值。

**需要进一步验证**（本次未能覆盖）：其实际 FB/IG/TikTok 投放素材与频次、Jay 是否对接 OTA 分销、车队自营还是外包、导游结算模式。建议下一步购买一次 ¥200 Concierge 实测响应质量（成本 ¥200，我们推进表行动 1 已列）。
