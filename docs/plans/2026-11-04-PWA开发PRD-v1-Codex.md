# CQLocalPal PWA 开发 PRD v1：随身行前资料包

日期：2026-11-04｜作者：Codex｜受众：负责官网的开发AI、测试者、创始人。

配套：[官网开发PRD](2026-11-04-官网v1开发PRD-远程支持优先-Codex.md)。本文件是同一网站的增量功能合同，**不是独立App需求**。本文只定义方案，没有实际开发或通过离线/真机测试。

## 1. 产品决定与非目标

[判断] v1做四件事：**可选添加主屏、主动保存公共行前资料、真实离线阅读、可理解的更新/删除**。

为旅行前的用户提供一个可随身查阅的公共资料夹。用户在有网时准备，飞机/机场/地铁里断网后仍能看保存好的步骤与中文短语；在有网时回到网站咨询或预订。

不做：原生App、商店上架、用户注册、Web Push、后台定位、离线聊天/付款/提交订单、私人订单自动缓存、离线整张城市地图、AI行程规划、跨设备同步。PWA不改变WhatsApp和支付需要联网的事实，也不改善某个平台在某网络下的可达性。

验收重点是**可用、诚实、安全**，不以用户安装率作为服务转化的替代目标。

## 2. 必须理解的技术事实

- [事实] PWA可作为普通网站使用，也能在支持的平台添加主屏/独立窗口；安装UI因浏览器不同。[MDN安装](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)。
- [事实] 离线依赖事先保存资源，不是有manifest就自动离线；Service Worker安装与用户“添加主屏”是不同事件。[MDN缓存](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching)。
- [事实] iOS不支持网站用`beforeinstallprompt`弹出同Android一样的安装框；需要合适的操作说明。iOS16.4新增主屏Web App推送能力不等于那时才有添加主屏。[MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable) · [WebKit](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)。
- [事实] 浏览器本地数据会受配额/清理/存储压力影响；请求持久存储不等于一定获批。[存储说明](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)。
- [判断] “打开过一次”“装到主屏”都不能直接显示“资料已全部离线可用”。本项目单独校验资料包完整性。

## 3. 用户故事与功能编号

| 编号 | 用户故事 | 结果 |
|---|---|---|
| PWA-01 | 我不想装App，也想看指南/咨询 | 普通网页所有核心服务正常，安装非前置 |
| PWA-02 | 我想在出发前保存资料 | 看见大小/清单，主动下载，成功与部分失败状态明确 |
| PWA-03 | 我落地断网，需要查已保存步骤 | 打开Travel kit，正文/必要图片/中文可复制，显示保存日期 |
| PWA-04 | 我想快速再打开资料 | 支持的平台提供安装；不支持时给正确替代说明 |
| PWA-05 | 我想知道资料是否过时 | 显示核验/保存日期，联网可更新；无网不假称已检查最新 |
| PWA-06 | 我不想再保留本地资料 | 清除本项目离线包和状态，不碰其他应用数据 |
| PWA-07 | 我付款时断网 | 明确不能核实付款，既不假成功也不离线排队重复付款 |
| PWA-08 | 我在填表时网站有新版本 | 提示可稍后更新，不强刷丢失正在填写的信息 |

## 4. 路由与内容来源

```text
/en/travel-kit/                 在线资料包管理；PWA启动页；noindex
/en/travel-kit/first-night-in-chongqing/
/en/travel-kit/payments-and-money/
/en/travel-kit/sim-card-and-internet/
/en/travel-kit/non-spicy-food-in-chongqing/
/en/travel-kit/airport-to-your-hotel/
/en/offline/                    无敏感信息的离线说明；noindex
/manifest.webmanifest
/sw.js                         单一Service Worker，scope=/en/
/offline-pack/en/{version}.json 不可变公开包清单
/offline-pack/en/latest.json    最新包指针，在线更新检查
/_astro/*                      构建生成的精确资产，不通配全量缓存
/media/offline/*                经核验的公共小图/公共集合示意
```

源内容与`/en/guide/{slug}/`来自同一份Content Collections。构建时输出面向SEO的普通攻略页，以及同内容的精简离线阅读页；后者`noindex,follow`且不进sitemap，不生成额外可索引重复文章。

离线版使用独立`TravelKitLayout`：不带动态价格、订单状态、用户姓名、统计脚本、远程字体、地图iframe、视频播放器或声称“客服在线”的状态。按钮只提供已保存指南、清单、复制文本和联网入口。

`start_url=/en/travel-kit/`，manifest `scope=/en/`，`id=/en/travel-kit/`稳定；无订单ID/UTM/登录令牌。浏览器由营销深链访问时仍打开原页面，不强制跳资料包。

## 5. v1公共资料包具体内容

| 内容 | 范围 | 更新责任 |
|---|---|---|
| 五篇首批指南 | 官网PRD定义的五篇，全部经事实/英语校对 | 内容负责人；高变事项每30天复核 |
| 到达前检查表 | 保存酒店中文地址、通信准备、支付备援、资料保存检查 | 运营 |
| 中英常用语卡 | 去某地址/问楼层/不要辣/确认是否含某食材；不把翻译当医疗意见 | 英语顾问＋当地运营 |
| 公共联系卡 | 已批准公开的客服号码/邮箱、08:00–24:00北京时间、备用联系说明 | 运营；号码变化立即发新版本 |
| 公共小图 | 经授权、实地核验且不含客人信息的航站楼/楼层说明图 | 运营；不代表某订单的集合安排 |

v1不让用户把酒店、护照、航班、过敏详情或私人行程写入离线资料包。酒店地址请用户自行保存到自己的设备笔记；本产品可提供“怎么保存”的说明，不自动读取剪贴板。

私人订单确认单通过在线管理页下载到设备文件应用，独立于本PWA缓存。下载时说明：本地副本是当时快照，改期/取消不会自动更新。订单改动以在线管理页/真人确认为准。

## 6. 页面与组件规格

### 6.1 Travel kit首页

顺序：返回官网/品牌→H1 `Your Chongqing travel kit.`→一句话`Save the essentials before your flight. Read them when you’re offline.`→在线/离线提示→资料包卡→五篇目录→公共短语/联系人→添加主屏说明→更新/清除→隐私说明。

资料包卡必须显示：语言English、版本、内容核验日期、下载总大小、5篇清单、保存状态、操作按钮。未保存文案：`Save this kit while you have an internet connection.`。不使用“已安装”表示“已保存”。

手机操作区稳定单列，主按钮高48px；下载进度用文字＋进度条，可读屏；不弹自动播放视频。视图即使缺图/字体仍可读；所有英文/状态文案外置，未来语种按官网门槛解锁。

### 6.2 状态机与文案

| 状态 | 显示/按钮 | 允许的动作 |
|---|---|---|
| `unsupported` | `Offline saving isn’t available in this browser.` | 普通网页与浏览器打印/另存说明；不抛空白页 |
| `not_saved` | `Not saved on this device.` · Save for offline | 有网时保存；离线时解释需先联网 |
| `saving` | `Saving 8 of 12 files…` · Cancel | 更新真实完成数；可取消，不重复启动两个任务 |
| `ready` | `Saved on this device · [date]` · Open saved kit | 完整性检查通过后出现 |
| `partial` | `The kit wasn’t fully saved.` · Retry | 列出未完成项；旧完整版本仍可用 |
| `outdated` | `A newer kit is available.` · Update | 联网确认最新版本后才显示 |
| `review_due` | `This copy was checked on [date]. Some details may have changed.` | 无网也能读；提醒联网核验高变信息 |
| `missing` | `Your saved files are no longer available.` · Save again | 浏览器清理/缺资源时，不相信旧状态标记 |
| `cleared` | `Saved travel-kit files removed from this device.` | 可重新保存；说明主屏图标需用户自行移除 |

没有持久缓存能力时仍可浏览和咨询；离线保存失败不会阻断订金。保存按钮只有在当前至少有一份已批准内容包时可用。

### 6.3 离线阅读页

顶部`Offline copy · Saved [date]`，正文/必要照片/中文短语可复制；底部`Return to saved kit`。在线服务按钮旁写`Internet connection required`。复制失败保留可选中的文字并告知，不能依赖Clipboard API必然可用。

离线时不显示库存/最新价/付款状态。尚未保存的文章，显示说明和已保存目录；不能返回首页内容却保留文章URL，让用户误以为正确内容已加载。

### 6.4 安装引导

- 安装入口放Travel kit或保存完成后，首页不自动弹；拒绝后30天不主动提示，可从菜单再次打开说明。
- Chromium且收到`beforeinstallprompt`：用户点击后才调用原生提示；取消不视为错误，不自动重试。
- iPhone/iPad：显示“在支持的浏览器打开→分享→添加到主屏”的图文说明；具体按钮名由实机版本确认，不伪造系统安装弹框。
- 内置浏览器：若安装不可用，给“在Safari/Chrome打开”说明与复制干净页面链接；不保证能强制外跳。
- 已standalone：隐藏安装营销，仅显示`Opened from your home screen`；不能据此推断离线包在这个存储环境已保存，仍须检查完整性。
- 浏览器标签与主屏模式在部分平台可能有不同存储行为，不能假设两者保存状态共用；首次主屏启动重新检测并提示必要下载。

## 7. 技术选择、边界与目录

[判断] **Astro静态输出＋Workbox构建期`injectManifest`＋Cache Storage＋少量TypeScript。** 用Workbox管理修订资源与更新生命周期，资料包使用显式白名单下载器；不引入React运行时，不混用多个PWA插件，不构建通用离线数据库。

选择理由：官网内容已经静态生成；同源资源可在构建期枚举；只需公共只读包，没必要处理离线订单同步冲突。纯手写SW也能实现，但本版采用成熟缓存工具并用精确白名单控制，减少AI反复发明缓存生命周期。Workbox实际版本按开发当天官方支持与锁文件固定，记录到报告。

[事实] Workbox支持修订资源预缓存、路由白/黑名单、等待版本的显式激活消息；已核对其官方代码/文档。[Workbox](https://developer.chrome.com/docs/workbox/) · [官方实现](https://github.com/GoogleChrome/workbox)。这些能力不是自动正确配置的保证。

```text
web/src/pwa/sw.ts                         唯一SW源
web/src/pwa/register.ts                   注册/更新消息
web/src/pwa/pack-manager.ts               保存/完整性/清理
web/src/pwa/types.ts                      严格类型，不用any
web/src/layouts/TravelKitLayout.astro
web/src/components/{OfflinePack,InstallHelp,OfflineStatus}.astro
web/src/pages/en/travel-kit/[...slug].astro
web/src/pages/en/travel-kit/index.astro
web/src/pages/en/offline.astro
web/scripts/build-offline-pack.mjs        生成版本/URL/hash/大小
web/scripts/check-release.mjs             禁止私有路由混入包
web/public/manifest.webmanifest
web/public/icons/{192,512,maskable-512,apple-180}.png
```

构建顺序：内容schema/审批校验→Astro生成静态页面/哈希资产→生成公共包清单→打包SW并注入最小shell清单→扫描不允许缓存的URL→部署。不要先跑注入再生成HTML，导致清单过期。清单版本用内容摘要/构建ID，不能永远写`v1`。

## 8. 缓存矩阵：开发不得自行扩张

所有策略先排除跨域、非GET、私有路径和未知查询参数，再看精确白名单。网络响应必须200且类型/体积符合清单；不缓存重定向登录页、错误HTML或opaque跨域响应。

| 资源 | 取数/缓存策略 | 断网结果 |
|---|---|---|
| `/en/travel-kit/`、`/en/offline/`及必需本地小资产 | 最小shell预缓存，版本化；资料包入口在线可检查更新 | 显示资料状态/已保存目录，未下载不声称有五篇正文 |
| 5篇`/en/travel-kit/{slug}/`、公开图/字体 | 用户主动下载整包；逐项hash/大小校验；离线读当前完整版本 | 从完整包读取；缺项报missing，不能从任意旧缓存拼凑 |
| 包`latest.json` | NetworkOnly＋`no-store` | 显示上次检查时间，不能宣称“已是最新” |
| 不可变版本清单/包资源 | 仅下载器按明确版本请求；核对sha256/大小 | 可读已完成版本 |
| 营销首页、产品/价格页、普通攻略页 | v1不做整页运行时缓存；正常网络访问 | 统一公共离线提示，引导Travel kit；不冒充实时产品页 |
| `/en/booking/**`、`/en/reviews/write/**`、`/api/**`、`/ops/**` | **NetworkOnly，永不进入Cache Storage/IndexedDB**；服务器私有响应`no-store` | 导航失败只给无个人信息的离线说明；API保持明确失败，不返回假JSON成功 |
| 有token/order/payment等查询参数或认证响应 | NetworkOnly，即使路径类似公共页也拒缓存 | 不能返回缓存的私人内容 |
| 私人PDF/支付页面/第三方二维码动态资源 | 不缓存；用户主动把PDF存设备属于浏览器下载 | 未下载的不能离线访问；已下载文件由用户管理 |
| WhatsApp/地图/统计/视频/外站字体 | 不做代理缓存，不纳入包 | 明确需联网；核心阅读不依赖这些资源 |

[判断] **不能使用“缓存所有GET/导航”的通配规则；不能把失败请求自动缓存；不能把未知页面回退到首页。** 对交易URL，公用离线说明不是该订单的缓存替身，不包含订单号/金额/支付按钮；不能修改订单状态。

Service Worker的作用域与manifest作用域分开配置；本版均围绕`/en/`。未来其他语种启用时按独立已审批资料包扩展，不预下载四语正文。

## 9. 保存、完整性和存储合同

### 9.1 包清单字段

`packId,locale,version,publishedAt,reviewedAt,totalBytes,entries[],minShellVersion`。

每个entry：`url,sha256,bytes,contentType,role(required|optional)`。v1五篇正文和其必要资产全部required；只有装饰图可optional，UI明确无图仍完整可读。URL必须同源、无敏感查询、在发布白名单；清单本身不包含用户数据。

### 9.2 保存算法要求

1. 在线取得当前清单并显示总大小；用户点击才开始；并发默认3个，避免抢占手机网络。
2. 可请求存储估计；估计不足先提示清理本项目旧包/改用普通网页，不假装精确剩余空间。`persist()`只能主动保存后尝试，拒绝不影响普通浏览。
3. 下载到`cqpal-pack-staging-{version}`。每项响应校验状态、类型、字节与hash，错误项记录；取消则中止后续请求并清理未完成staging。
4. 所有required项通过后才写完成标记/活动版本指针；Cache API没有数据库式跨缓存事务，禁止声称一个“rename cache”就原子完成。
5. 完成标记最后写入，切换前再校验；恢复启动时忽略没有完成标记的staging。先保留旧完整版本，成功切换后再清理；错误不能毁掉原本可用的包。
6. 每次启动Travel kit检查活动版本标记及required资源是否存在；不能只读localStorage的`downloaded=true`。缺项则missing/partial，保留已完成内容和重试动作。
7. 同一设备最多当前完整包＋一个替换中的包；目标当前包≤3MiB，含更新过程总缓存≤8MiB。超过预算构建失败或减少装饰资源，不删政策/关键说明凑数。
8. 不依赖后台长任务一定完成。用户关闭页面时任务可能中断；重新打开检查实际资源后续传/重新下载，不能后台盲报成功。

仅保存公共版本与状态元数据，可用单独命名空间Cache记录；v1不因简单状态再引入IndexedDB封装库。任何储存/网络异常显示恢复动作，不能`catch {}`吞掉后显示ready。

### 9.3 清除

用户点`Remove saved kit`后确认，删除`cqpal-pack-*`及对应元数据；最小离线说明shell可保留，文案写清只清除资料包。不能遍历删除本域所有缓存，尤其不能破坏其他应用或无关缓存。删除主屏图标由系统操作，网页不伪装已卸载应用。

## 10. 更新、失效与发布回退

- `/sw.js`响应不设长期不可变缓存，使用`no-cache`；哈希静态资产可immutable。HTML与latest指针更新策略不能被CDN长期缓存遮蔽。
- 在Travel kit首次进入后注册SW；普通营销首屏不自动下载完整离线包。不支持SW时正常网页继续。
- 新SW安装进入waiting，显示`An update is ready. Reload when you’re ready.`＋Later。用户同意且不在付款/表单提交关键状态才发送激活消息并刷新。
- 不默认在每次install无条件`skipWaiting()`；控制器变更不自动清空表单或重新提交交易。
- 资料包版本与SW版本分开；文案/公共号码变化可更新包，不要求每次改一个字就换PWA身份。
- 内容检查日超过30天提示review_due；联网发现新版才标outdated。无网不可远程撤销已下载资料，因此联系/交通资料说明核验时间，不能保证永远最新。
- 回退时发布新的修复版本，而非把浏览器缓存当作服务器回滚会同步清空；保留与仍在使用的旧shell兼容的必要哈希资产，清单404不得让旧包消失。
- 清理只针对本项目前缀。既有骨架若曾部署过`cqlocalpal-v1`，迁移时明确删除该已知旧缓存（其中可能有booking），不能无差别删同源缓存；是否存在实际用户先核对部署记录。

[判断] 安全问题需要紧急禁用时，部署一个同scope的安全清理SW，删除本项目错误缓存并停止敏感路径拦截；已离线设备无法即时接收修复，不能宣传“服务器一改所有离线副本立刻消失”。本版因此从一开始禁止存私人数据。

## 11. Manifest、图标和无障碍

manifest必需：稳定`id`、CQLocalPal名称/短名、`start_url=/en/travel-kit/`、`scope=/en/`、`display=standalone`、`lang=en`、`theme_color=#173C32`、`background_color=#F6F3EC`、192/512 PNG、单独maskable512。不得把未经安全区设计的普通icon标成maskable。iOS另给180px图标。

不锁死portrait；横屏与200%放大仍可用。safe-area适配刘海/底栏，交互触控≥44px；保存进度/错误`aria-live=polite`，明确焦点，不用颜色单独表示状态。只预缓存需要的本地字体及许可证，不请求Google Fonts才能显示页面。

界面风格沿用官网：暖纸/墨绿、Instrument Serif＋Source Sans 3；Travel kit是操作/阅读页，使用稳定单列，不为“像App”加入手势导航或隐蔽按钮。

## 12. 隐私、统计与业务一致性

- 资料包只存公共信息；没有客户身份、订单金额、服务开始时间、接待者私人号码、管理令牌、健康资料和收款凭据。
- 公开客服号码必须经营方同意公布；如只有私人联系方式，不能默认塞入可离线传播的包。
- 未登录浏览器也能读所有公共指南；离线能力不绑定注册/营销订阅。
- 自愿保存资料与接受分析是两回事。可选统计遵守官网同意设置；必要下载存储说明用途。
- v1不做离线分析事件队列。联网且同意时记录`kit_save_requested/completed/failed,kit_update,kit_clear,install_guide_open`；离线打开不补传设备轨迹。安装指引打开不等于实际安装，不支持检测的平台报告unknown。
- PWA指标只辅助：完整保存成功率目标≥95%（可测尝试）、离线验收用例100%通过、私人资源缓存0条。不要拿安装量替代¥200产品的付费验证。

## 13. 验收矩阵：必须实际执行

### 13.1 平台

| 平台 | 最小验收 |
|---|---|
| Android Chrome实际手机 | 普通页→保存→安装→关网→主屏启动→打开5篇→重新联网更新 |
| iPhone Safari实际手机 | 普通页→保存→分享添加主屏→重开检查存储→关网阅读→更新/清除 |
| Desktop Chrome/Edge | 安装入口/键盘阅读/离线/更新等待 |
| iOS/Android常见社媒内置浏览器 | 普通页/咨询正常，安装不支持时正确说明，不误称已经安装 |
| 禁JS/禁SW/隐私限制环境 | 静态正文可读，离线功能说明降级，订单不被伪造提交 |

记录浏览器/OS/设备版本；桌面模拟iPhone不替代iPhone真机。没有设备时明确“未测”，不得勾选通过。

### 13.2 用例

| AC | 操作 | 期望 |
|---|---|---|
| P01 | 首次访问首页不点保存 | 不下载五篇完整包；咨询/预订无需安装 |
| P02 | 有网保存并查看缓存/清单 | required项全部存在且校验通过，才显示ready |
| P03 | 仅打开首页、未访问Travel kit就断网 | 尚未注册SW时浏览器默认离线页可以接受；网站事先不得声称已可离线。已访问kit但未保存时则显示无已保存包 |
| P04 | 保存后开飞行模式、关闭再打开主屏 | 5篇正文/必要图/中文词/样式可用；显示保存时间 |
| P05 | 保存中断网/一个required资源404 | partial并可重试；原完整包不丢失 |
| P06 | 存储配额不足/用户清除站点数据 | 正确失败或missing；不相信旧保存标记 |
| P07 | 离线访问booking/manage/带token URL/API | 无私人缓存响应；明确需联网，订单状态不变 |
| P08 | 在线提交付款后断网并刷新 | 不能二次扣费/自动补交；需在线查询真实状态 |
| P09 | 发布新版时停留填写表单 | 显示稍后更新；不自动刷新丢输入 |
| P10 | 包更新失败或新版清单缺资源 | 继续可用旧完整包；说明更新失败，不能半新半旧混用 |
| P11 | 已安装但主屏模式没有缓存 | 指引在当前环境重新保存，不显示虚假ready |
| P12 | 点击清除 | 仅本项目资料包删除；无私人信息/无关缓存不受影响 |
| P13 | 未保存深链/拼错URL离线 | 公共离线说明，不返回主页冒充目标文章 |
| P14 | 用户拒绝统计 | 保存/离线/咨询完整可用，网络无分析请求 |
| P15 | 下载清单被加入外域/私有路径/含令牌URL | 构建校验失败或客户端拒绝，不发请求写缓存 |
| P16 | 断网后点WhatsApp/地图/客服入口 | 明示需联网；复制公开联系信息可用，不能声称消息已发 |
| P17 | 清单超过3MiB或更新峰值超8MiB | 预算检查失败，不静默缓存全站大图 |
| P18 | 第三方字体/脚本全部阻断 | 核心离线阅读仍完整；无必要外链依赖 |

### 13.3 测试产物

生产构建预览测试，而非只测开发服务器；localhost/loopback可用于安全上下文测试，正式环境必须HTTPS。记录SW scope、版本、manifest、安装/保存/离线截图、缓存键清单、失败用例、网络请求、主/旧包更新结果。不得在报告/截图里留下真实旅客信息。

原型预算`[假设]`：最小shell≤150KiB压缩总传输；完整资料包≤3MiB；更新过程≤8MiB；同手机离线已存文章打开至可读目标≤1秒。Service Worker不阻塞官网首屏LCP；PWA额外脚本、请求和资源要计入官网预算并单列包下载成本。

## 14. 开发顺序与完成定义

1. 复查既有SW/manifest部署状态，明确替换边界；不直接叠加第二个SW。
2. 做TravelKitLayout和五篇共享内容的离线版；完成manifest/本地图标/字体。
3. 构建公共包清单与路径/大小校验，禁止交易路径。
4. 实现保存/取消/恢复/完整性/清除状态；先验证坏网络/缺资源。
5. 接注册/安装引导/更新提示；验证不同平台降级。
6. 做真机断网、存储清理、版本更新、支付回归；与官网一起出验收报告。

[假设] 预计在官网基础稳定后增加2–4个开发工作日；真实耗时以开发和测试记录为准。11.17目标含这一轻PWA，不以加图标代替功能完成。若公共内容未批准，框架可完成但资料包不得宣称可用；交易准备不足不阻碍公共PWA开发。

本版P01–P18均为P0验收项；不存在通过安装测试就免做其余项的例外。

完成定义：上述P0路径和失败态有实现、有实测证据；用户普通浏览不受影响；已保存公共内容真的可离线；私人交易内容缓存为零；文档/代码/界面口径一致。
