# CQ Local Pal / 重庆本地通
## 外国客文案、预订流程、服务边界与信任设计研究草稿

> 日期：2026-11-02  
> 状态：研究草稿，供产品、运营、翻译与法律审查使用，不是法律、税务、保险或投资意见。  
> 范围：重庆入境游的英语使用者，以及马来西亚、泰国、新加坡、印度尼西亚、韩国等主要客源市场；美国、英国、欧盟、西班牙、葡萄牙作为成熟监管与信任设计对照，不作为唯一研究对象。  
> 证据标记：`[官方事实]`、`[平台规则]`、`[研究观察]`、`[假设]`、`[判断]`。  
> 引用编号：`[S1]` 等对应文末来源表。访问日期统一为 2026-11-02，另有说明除外。

---

## 0. 执行摘要

1. **外国用户首先在判断“这是不是一个真实、可执行、可退出的交易”，而不是先被“本地朋友/专业团队”打动。** 页面要先回答：总价多少、包含什么、谁实际履约、在哪里见、取消怎么办、出问题找谁。价格和履约主体模糊，是最直接的放弃触发点。[S25]

2. **“Local Pal”可以是品牌语气，不能成为规避导游资质的业务结构。** 中国规则把导游定义为持证、接受旅行社委派并从事导游/讲解服务的人；导游不得私自承揽导游业务，也不得索取小费。产品页、合同、收款主体和实际服务角色必须一致；“非导游 host/remote concierge”与“持证导游”要分开写，并做中国法律审查。[S2][S3][S4]

3. **价格透明不是“便宜”，而是“可计算”。** 固定产品应展示真实总价；可定制产品应展示计价单位、最低总价、强制费用和报价时效。不得在结账前追加“服务费、接送费、节假日费”等 mandatory fees；可选加项必须单独列出并取得客户确认。英国 CMA 的总价/drip pricing 材料、欧盟不公平商业行为材料和 FTC 的评价规则可作为成熟对照，但实际适用性需按目标市场律师意见确认。[S18][S21][S13][S14]

4. **评价、稀缺性和照片都必须可核验。** 不买评、不以免单/折扣/抽奖换取好评、不隐藏合理差评、不制造假倒计时或“仅剩 2 席”，不使用与真实服务无关的图库照片冒充现场。推荐把“评价来源、验证方法、回应权、删除/举报标准”写成公开政策。[S13][S15][S17][S27]

5. **MVP 应当是网页优先，而不是 App/小程序优先。** 推荐主链路：帖子/广告 → 移动端落地页 → 轻量问卷/邮件 → 人工报价 → WhatsApp/邮件澄清 → 持牌旅行社或合规商户的支付链接 → 书面确认与条款 → 行前提醒 → 见面交付 → 反馈/评价/转介绍。登录、App、小程序不是首版必需。[S25]

6. **英语是基线，不是全部。** 重庆官方数据支持马来西亚、泰国、新加坡、印度尼西亚、韩国作为 2025 年入境外国客源的前五来源国，但这不等于这些市场的语言偏好、自由行比例或支付习惯。[S1] 泰语、印尼语、韩语的高风险内容必须由母语者审校；LINE/KakaoTalk/WhatsApp 的具体偏好不能当作统计事实，只可先作为待验证假设。

---

## 1. 客源优先级与研究边界

### 1.1 官方客源信号

重庆市人民政府 2026-01-10 的报道显示，2025 年重庆口岸入境外籍旅客来源国前五为：**马来西亚、泰国、新加坡、印度尼西亚、韩国**；东盟国家占入境外籍旅客的 **72%**；报道同时提到全年口岸出入境人员 248 万余人次、外籍旅客出入境 76 万余人次。[S1]

这些数字能支持“市场优先级”的研究判断，**不能**直接支持以下结论：

- 不能说“马来西亚游客都讲英语/华语”；
- 不能说“泰国游客都用 LINE”或“韩国游客都用 KakaoTalk”；
- 不能说“这些市场都偏好自由行”；
- 不能说“这些市场愿意为本地陪伴/讲解支付某个价格”；
- 不能把来源国排序等同于语言版本优先级。

### 1.2 建议的市场分层

| 层级 | 市场/语言 | 首版建议 | 证据状态 | 不能推出的结论 |
|---|---|---|---|---|
| A. 英语基线 | 所有市场；新加坡、马来西亚的英语使用者，长线英语客 | 完整英文落地页、英文合同摘要、英文客服 | `[判断]` 英语是跨境旅游最常见的共同语言；仍需用自有流量验证 | 不能假设所有非英语客人都接受英文 |
| A. 华语选项 | 马来西亚/新加坡及已有中文偏好的用户 | 先做简体中文选项，语言由用户主动选择；是否加繁体按流量和用户访谈决定 | `[假设]` 华语可能有帮助；没有证据证明按国籍可推断语言 | 不能把“华人”与“中国公民/简体中文”混为一谈 |
| B. 东南亚本地语 | 泰国、印度尼西亚、马来西亚 | 先翻译 P0 事实（价格、包含、取消、见面、支付、安全、隐私），再由母语者审校；不先做全站机翻 | `[判断]` 高风险信息翻译错误会直接破坏信任 | 不能声称“已本地化”而只做了机翻 |
| B. 东北亚 | 韩国 | 同 B；韩语敬语、姓名、地址和支付说明必须人工审校 | `[假设]` 韩语内容可能提升转化；需用韩语页面/广告实测 | 不能把 KakaoTalk 当作已被证实的唯一渠道 |
| C. 成熟监管对照 | 美国、英国、欧盟、西班牙、葡萄牙 | 作为评价、价格、包价旅游、隐私和可访问性设计的对照基准 | `[官方事实/研究观察]` 这些法域有成熟消费者保护与评价规则 | 不能直接说这些法律“自动适用于”中国主体或所有交易 |

### 1.3 研究限制

- 本稿没有做外国游客的大样本定量调查，也没有把任何转化率当作事实。
- 本稿没有验证各平台最新的全部评价政策；Google、Tripadvisor、GetYourGuide、Yelp、Booking 等页面在本次检索中不可稳定读取，因此不引用其具体条款，也不编造平台规则。
- 本稿没有取得 LINE、KakaoTalk、WhatsApp 的市场份额或各国使用率数据；渠道建议标为 `[假设]`，必须通过小规模测试确认。
- 具体 SKU 是否构成旅行社业务、是否必须由持证导游履约、是否触发欧盟包价旅游规则，必须由相应法域律师审查。

---

## 2. 外国用户第一眼判断什么，什么会导致放弃

### 2.1 用户的信息判断顺序

以下顺序是信息架构建议，不是对所有用户的统计结论。NN/g 的定性研究支持：用户会寻找联系方式、包含/不包含、费用、保证/退款等基本信息；缺少这些信息会引发不信任，而冗长报价表在展示价值前就会造成流失。[S25]

| 用户最先问 | 为什么重要 | 页面/首屏应给出的答案 | 缺失或含糊的后果 | 证据/判断 |
|---|---|---|---|---|
| 这是什么，适合谁？ | 用户要先判断是否与自己的行程、体力、预算、语言能力匹配 | 一句任务型描述 + “适合/不适合” + 时长 + 团队规模 | 只写“深度体验重庆”会迫使用户猜 | `[研究观察]` 用户需要具体信息作判断；`[判断]` 任务型描述优于品牌形容词 |
| 总价是多少？ | 预算是硬门槛，隐藏费用会破坏信任 | 真实总价；若定制则给出计价公式/范围、强制费用和报价时效 | “DM 询价”且不给任何区间，容易被视为套路 | `[判断]` 价格是首要信任门槛；英国 CMA 总价材料支持“强制费用前置”的设计原则[S18] |
| 包含/不包含什么？ | 用户需要比较“值不值”，也需要避免现场加价 | 门票、餐食、交通、讲解、保险、接送、税费逐项列出 | 把“不含”藏到 FAQ 或合同深处，容易引发退款争议 | `[官方事实]` 中国旅游合同规则要求费用、服务标准等事项明确[S2][S4]；`[判断]` 应做成可视化清单 |
| 谁实际履约？ | 用户要知道是平台、旅行社、持证导游还是个人 host | 法律主体、旅行社/商户、实际带客人、替补机制 | “我们是一个专业团队”无法回答“谁出现” | `[官方事实]` 导游须持证并接受旅行社委派[S2][S3]；`[判断]` 履约主体必须可见 |
| 有没有执照/保险？ | 用户把安全、合法性和赔付能力联系在一起 | 许可证/备案信息、核验链接、保险类型和覆盖范围 | 只放一个无链接的“认证”图标，反而降低可信度 | `[官方事实]` 旅行社许可、责任保险、导游证等制度存在[S2][S3][S4]；`[判断]` 必须说明“保什么、不保什么” |
| 在哪里见？ | 重庆地形复杂，集合点不清会直接导致迟到/走失 | 中文地址、英文说明、地图链接、地标照片、联系人、到达建议 | 只写“解放碑附近”不够；只发定位对没有中国手机号的用户也可能不够 | `[判断]` 集合点是高摩擦节点；需要多模态信息 |
| 取消/退款/改期怎么算？ | 用户要判断“买错了能不能退出” | 截止时间、费用、不可抗力、天气、闭馆、迟到/no-show | “免费取消”无期限、无例外，属于高风险文案 | `[判断]` 取消条款是交易信任的一部分；中国旅游法有取消/退款/不可抗力规则[S2] |
| 雨天/闭馆/导游生病怎么办？ | 用户担心计划落空，尤其是短停旅客 | 明确替代、改期、退款、差价处理 | 只写“风雨无阻”可能不安全；只写“不可抗力”又不解释，等于没有答案 | `[判断]` 需要“what happens if”而不是口号 |
| 饮食/过敏/无障碍能做到什么？ | 用户可能在健康、宗教、体力上有硬约束 | 可询问、可翻译、可调整的边界；不能保证的地方要明说 | “allergy-friendly”“fully accessible”这类绝对承诺风险高 | `[判断]` 诚实限制比空泛保证更能建立信任 |
| 怎么支付？ | 国际卡、支付宝/微信支付、现金、支付链接都可能失败 | 支持的支付方式、币种、失败后的备选、绝不通过聊天收集卡号 | 只说“支持国际支付”但没有测试/备选，会在付款时流失 | `[官方事实]` 重庆官方页面介绍支付宝/微信支付支持多种国际卡[S9]；`[判断]` 仍未证明每个商户/每张卡可用，需实测 |
| 多久回复？ | 用户要判断能否在出行前完成沟通 | 实际服务时段、时区、自动回复、紧急升级路径 | “24/7”若无人值守，会破坏信任并造成投诉 | `[判断]` 只能承诺可验证的响应窗口 |
| 我的数据/照片/位置怎么处理？ | 用户会提供过敏、行动能力、酒店区域、联系方式等敏感信息 | 收集目的、保存期限、共享对象、删除方式、单独同意 | 一问就收集护照/病历，或把敏感数据发给多个供应商，风险高 | `[官方事实]` 中国 PIPL 对敏感个人信息、单独同意、跨境提供和删除有要求[S5]；`[判断]` 首轮询价不应收集护照和完整病史 |
| 评价是真的吗？ | 用户用评价替代无法亲自验证的质量 | 评价来源、验证方式、总数、差评处理、外部链接 | 只有精选五星好评、没有来源、没有差评回应，会被视为营销材料 | `[研究观察]` 第三方评价通常比卖家自贴 testimonial 更可信[S25]；`[平台规则]` Airbnb 要求评价基于真实预订并禁止操纵/激励[S27] |
| 出紧急情况找谁？ | 用户要知道医疗、警察、火灾、交通事故和平台联系人 | 110/119/122/120、保险/领保/酒店信息、平台升级路径 | 只写“联系客服”不足以应对紧急情况 | `[官方事实]` 重庆官方英文页面列出 110/119/122/120 及领事/法律援助入口[S8]；不证明接线员会英语或 24/7 多语服务 |

### 2.2 直接导致放弃的 P0 触发点

以下按“最可能让用户关页/不付款”的顺序排列，属于 `[判断]`，应通过用户测试验证排序：

1. **只给“联系我们获取价格”，不给任何价格区间、计价单位或最低总价。**
2. **首屏没有说清楚实际由谁履约，或把“local friend”“host”“guide”“concierge”混着用。**
3. **包含/不包含、强制费用、取消条款要等到付款后才出现。**
4. **“免费取消”但没有截止时间、例外和退款到账说明。**
5. **“持证导游/专业团队/官方合作”无法核验，或没有链接/编号/主体名称。**
6. **集合点只有“解放碑附近”或一条无法打开的定位。**
7. **用图库照片冒充实际导游/实际路线，或所有照片都是精修空镜。**
8. **评价只有“100% 五星”，没有来源、数量、时间范围、验证方式。**
9. **制造虚假倒计时、“仅剩 2 席”、虚假原价/折扣。**
10. **首轮表单要求护照号、完整病史、信用卡信息，或没有隐私说明。**
11. **只给微信，强迫没有微信/不在中国的外国用户安装微信。**
12. **承诺“24/7”“fully insured”“allergy-safe”“fully accessible”但无法解释边界。**
13. **出现英语语法错误、机器翻译腔、货币/日期/地址不一致，让用户怀疑运营能力。**

### 2.3 首屏“信任条”示例

只有以下内容真实时才可使用；方括号内容必须替换为可核验信息：

```text
Operated by [legal entity name] · [travel agency licence / registration no., if applicable]
Delivered by [licensed guide assigned by the agency] or [non-guide local host]
English support · Reply within [actual hours] China time
Total price from ¥[amount] · [what is included]
Cancellation: [actual policy]
```

不要把“trust strip”做成没有链接的徽章墙。每个信任声明至少应有一个可点击的证据：许可证查询页、旅行社页面、导游证核验、保险说明、真实评价来源或条款页。

### 2.4 10 秒理解测试

找至少 5 位目标用户（按语言/客群分组），只给首屏 10 秒，然后问：

- What is this?
- Who is it for?
- How much is the total price?
- Who will actually meet you?
- What happens if it rains or the attraction closes?
- What is included and what is not?

如果用户答不出“谁履约、总价、取消/天气”，不是用户的问题，是页面没有通过测试。

---

## 3. 英文营销语言的最佳实践

### 3.1 从客户任务出发，而不是从“我们很专业”出发

推荐公式：

```text
For [specific traveller] who wants [task/outcome] in [place/time],
we provide [specific service] with [proof/capacity],
for [total price or clear starting condition].
```

例如：

- 弱：`We are a professional local team offering authentic Chongqing experiences.`
- 强：`Land after dark? We meet you near Jiefangbei, help you order dinner, and walk a 3-hour route that ends at a metro station. Total price: ¥[X] per person. Dinner is not included.`

写文案时依次回答：

1. **谁**：第一次来重庆、转机停留、带父母/孩子、想吃辣但怕踩雷、需要远程协助的人。
2. **任务**：不是“探索城市”，而是“从机场到酒店不迷路”“第一次点火锅知道怎么选锅底”“半天看完核心景点且少走路”。
3. **范围**：几小时、几个人、走多远、是否含餐/门票/交通。
4. **限制**：不适合谁、不能保证什么、雨天/闭馆怎么处理。
5. **证据**：谁带队、什么资质、真实照片、评价来源。
6. **下一步**：看日期和总价、问一个问题、发预订请求——不要同时给五个 CTA。

### 3.2 避免中式英语、空洞形容词和“旅游宣传腔”

| 不建议 | 更好的英文 | 原因 |
|---|---|---|
| `We are a professional local team with rich experience, warmly welcome you to Chongqing!` | `You will be met by [name], a [licensed guide/local host]. We help you [specific task]. Total price: ¥[X], including [items].` | 用具体人、具体任务、具体价格替代自夸 |
| `Deeply experience the 8D magic city.` | `Ride Line 2 across the river, walk [route], and stop for [specific dish].` | “8D 魔幻”对没来过的人是空词；具体动作可验证 |
| `Worry-free trip.` | `If your flight is delayed, message us before the start time. We will [actual policy].` | “无忧”是绝对承诺；写清异常处理才有用 |
| `Authentic local life.` | `Shop at [market], order [dish], and take the [metro/bus] to [place].` | “authentic”无法验证；具体活动可以 |
| `We provide the best service.` | `We reply within [actual window] China time and send a named contact before you pay.` | “best”不可证明；SLA 可检验 |
| `Fully licensed and insured.` | `Operated by [agency], travel agency licence no. [X]. Liability insurance: [scope]. This does not replace your own travel insurance.` | “fully insured”容易误导；必须说明谁被保、保什么 |
| `Free cancellation.` | `Free cancellation until [date/time]. After that, [fee/credit policy].` | 无期限的“免费取消”是高风险宣传 |
| `24/7 support.` | `WhatsApp replies [09:00–21:00] China time. For emergencies, call [number]; we are not an emergency service.` | 只能承诺真实 staffing |
| `Allergy-friendly food tour.` | `We can ask the restaurant about ingredients and translate your request. We cannot guarantee an allergy-free kitchen or prevent cross-contact.` | 过敏是健康风险，不能作绝对保证 |
| `Fully accessible tour.` | `This route has [X] steps, [Y] metres of uneven ground, and [elevator/accessible toilet details]. Contact us before booking if you need step-free access.` | 可访问性要描述具体条件 |
| `Only 2 spots left!` | `This date has [actual remaining capacity] places. [If true and operationally verified.]` | 假稀缺会破坏信任，也可能构成误导 |
| `100% five-star reviews.` | `[Number] reviews from [source], verified by [method], since [date]. Read all reviews, including negative ones: [link].` | 精选好评不如可核验来源 |
| `Official partner / government approved.` | `[Only with written authorisation and exact scope.]` | 未经授权的“官方”声明风险极高 |
| `Tips welcome.` | `No tip is required. The guide/host fee is included in your price.` | 中国导游规则禁止索取小费；非导游 host 的收费政策也应由法律/财务确认[S2][S3] |
| `Skip the line.` | `Entry ticket included; security line still applies.` | 除非票务条款真的允许，否则不要暗示免排队 |
| `VIP experience.` | `Private group of up to [N], starting at [time], with [specific inclusions].` | “VIP”没有信息量 |

### 3.3 每个卖点都要有证据

| 英文卖点 | 发布前必须能回答 |
|---|---|
| `English-speaking` | 是导游、host 还是远程客服？英语水平如何验证？如果临时换人怎么办？ |
| `local` | “local”指重庆本地人、常住者、特定社区关系，还是只是 local office？ |
| `small group` | 最大几人？最少几人成行？实际平均几人？ |
| `licensed guide` | 导游证号、委派旅行社、服务范围；不能把非持证 host 写成 guide |
| `insured` | 哪个主体、哪种保险、覆盖谁、除外责任是什么；是否覆盖体验中的交通/餐饮/第三方活动 |
| `no shopping stops` | 产品是否真的无购物；是否包含“自由活动”中的购物建议 |
| `skip-the-line` | 票务合同是否支持；安检/入场是否仍需排队 |
| `24/7` | 谁值班、哪种语言、哪些日期、超时如何升级 |
| `free cancellation` | 截止时间、时区、退款路径、到账时间、不可抗力例外 |
| `allergy-friendly` | 能否保证无交叉污染；不能保证时必须改为“can ask/translate/advise” |
| `accessible` | 台阶、坡道、电梯、厕所、步行距离、拥挤程度、备用路线 |
| `eco-friendly` | 具体措施和证据；没有证据就不要使用绿色口号 |

### 3.4 “适合谁 / 不适合谁”模板

```text
This is for you if:
- You can walk [distance] with [stairs/uneven ground/heat] and want a small group of [2–6] people.
- You want [specific outcome], not a large coach tour.
- You are comfortable paying for [meal/transport/ticket] separately.

This is not for you if:
- You need step-free access throughout.
- You need a guaranteed allergy-free kitchen.
- You want door-to-door private transport or a fully private guide.
- You want a shopping-focused itinerary.
```

写法要求：每一条“不适合”都要配一个替代方案或明确的“contact us before booking”，不要只拒绝用户。

### 3.5 “What happens if”模板

```text
If it rains:
We run the route in light rain with a covered alternative. If the route is unsafe,
we will offer a rescheduled date or the refund option stated in your booking terms
before the start time.

If an attraction closes:
We will send an alternative route and the price difference, if any, before changing
the plan. You can accept, reschedule, or request the applicable refund.

If your guide/host is ill:
We will offer a replacement with the same role and language where possible, or a
reschedule/refund under the booking terms. We will tell you as soon as we know.

If you are late:
Message us before the start time. We will hold the start for [X] minutes subject to
guide/venue availability. After that, [actual policy].
```

### 3.6 “What you get / what you don't get”模板

```text
What you get:
- [Duration] with [name/role] in [language]
- [Route/experience] for up to [N] people
- [Tickets/meal/transport] exactly as listed
- A WhatsApp contact for [actual hours] China time
- Written meeting point and emergency contact before the start

Not included:
- [Meals/drinks]
- [Transport to/from the meeting point]
- [Personal travel/medical insurance]
- [Optional extras], which are quoted separately and never added without your written approval
```

### 3.7 “Meet point”模板

```text
Meet at [venue/landmark], [English description].
Chinese address for taxi: [中文地址]
Map pin: [link]
Photo of the exact meeting spot: [link/photo]
Your contact on the day: [name], [phone/WhatsApp]
Arrive by [time]. If you are lost, message us before the start time; do not walk to a
different entrance.
```

### 3.8 Tipping 模板

```text
No tip is required. The guide/host fee is included in the price shown.
Please do not feel obliged to tip. If you have a question about the policy, ask us
before booking.
```

不要写 `Tips welcome`、放 tip jar、或让导游/host 主动索取小费。中国法下导游不得索取小费[S2][S3]；其他服务角色的收费安排也应由运营/法律确认。

### 3.9 Dietary / allergy 模板

```text
Tell us before booking:
- Dietary pattern (for example vegetarian, vegan, halal, no pork, no alcohol)
- Allergies and severity
- Whether you carry medication
- Whether you need a kitchen that can prevent cross-contact

What we can do: ask the restaurant about ingredients, translate your request, and
help you choose dishes.
What we cannot do: guarantee an allergy-free kitchen or prevent cross-contact.
```

“Halal”不要当作所有马来西亚/印度尼西亚客人的默认需求；把它作为一个可选项询问。不要从国籍推断宗教或饮食要求。

### 3.10 Accessibility 模板

```text
Accessibility notes for this route:
- Total walking: [X] km
- Stairs: [number/location]; lift: [yes/no/location]
- Uneven ground: [description]
- Seating: [available at X]
- Toilets: [accessible/not accessible; location]
- Crowds/heat: [description]
- Step-free alternative: [available/not available]

If you need step-free access, contact us before booking so we can confirm the route
instead of relying on a generic “accessible” label.
```

### 3.11 Safety 模板

```text
Your safety:
- The route involves [walking/stairs/water/heat/crowds].
- We will send a safety briefing and emergency contact before the start.
- We cannot eliminate all risk. Travel insurance is strongly recommended.
- In a medical, police, fire, or traffic emergency, call 120/110/119/122 first.
  Our team can assist during [actual support hours], but we are not emergency services.
```

重庆官方英文页面列出 110、119、122、120，以及领事和法律援助入口[S8]；这不证明接线员提供英语或 24/7 多语服务。

### 3.12 英文写作的可读性规则

- 一句话只表达一个意思；标题不超过两行（移动端）。
- 用 `total price`，不要用 `price` 暗示还有未列费用。
- 用 `per person` / `per group` 明确计价单位。
- 日期写 `2 Nov 2026`，时间写 `21:00 China time (UTC+8)`。
- 金额写 `¥399 CNY`，不要只写 `$` 或 `RMB` 造成歧义。
- 地点同时给英文名、中文名和地图链接。
- 不用 `we are passionate/professional/unique` 代替事实。
- 不用 `everyone/every time/always/guaranteed`，除非有书面保证和赔付能力。
- 不用 `local friends` 描述需要持证导游的讲解服务。

---

## 4. 可直接测试的英文文案模板

> 使用规则：所有 `[方括号]` 都必须由运营、财务、保险和法律确认后替换。不要为了 A/B 测试而发布虚假价格、虚假资质、虚假评价或未经验证的安全承诺。

### 4.1 标题与副标题

#### Hero A：第一次到重庆的晚间体验

```text
H1: Your first night in Chongqing, without the guesswork.

Subhead:
A [3-hour] small-group walk from [Jiefangbei] with an English-speaking [licensed guide/local host],
a planned dinner stop, and a real person on WhatsApp if plans change.
¥[X] per person. Dinner is not included.

CTA: See dates and total price
```

#### Hero B：远程本地协助

```text
H1: A real person in Chongqing, on call for your trip.

Subhead:
Ask about taxis, menus, payments, closures, or your next stop.
We reply within [actual response window] China time.
From ¥[X] for [duration]. No payment until we confirm the scope.

CTA: Ask a question on WhatsApp
```

#### Hero C：带父母/孩子/行动限制

```text
H1: A slower Chongqing route for the people you are travelling with.

Subhead:
[X]-hour private route with [licensed guide/local host], planned around [stairs/heat/rest breaks].
We will tell you honestly what this route cannot support.
¥[X] total for [N] people. [Inclusions.]

CTA: Check fit and total price
```

#### 副标题公式

```text
[Specific outcome] + [who delivers it] + [duration/group size] + [one honest limitation] + [total price/next step].
```

#### CTA 变体

| CTA | 适用场景 | 注意 |
|---|---|---|
| `See dates and total price` | 固定产品 | 比 `Book now` 更低压力，适合首次访问 |
| `Check fit and total price` | 有体力/饮食/无障碍限制 | 明确需要用户先判断是否适合 |
| `Ask a question on WhatsApp` | 远程协助/定制 | 要预填产品、日期、人数，减少空白聊天 |
| `Get a written quote` | 定制 | 承诺报价时效和“不付款即可先问” |
| `Reserve with a deposit` | 已有明确条款 | 必须同时显示定金、余款、退款规则 |

避免：`Book now` 作为唯一 CTA，尤其当价格、取消条款和履约主体还没出现时。

### 4.2 产品卡模板（可直接填）

```text
[Product name: e.g. First Night Walk]
[One-line outcome: e.g. Land, eat, and learn the metro without guessing.]

[Duration] · [Max group size] · [Language] · [Start/end location]

Operated by: [legal entity name]
Travel agency licence / registration: [number + verification link, if applicable]
Delivered by: [licensed guide assigned by the agency / non-guide local host]
Guide certificate: [number/link, if applicable]
Insurance: [type and scope; what it does not cover]

Total price: ¥[amount] [per person/per group]
Includes: [item], [item], [item]
Not included: [item], [item], [item]
Optional extras: [item + price], added only with your written approval

Meeting point: [English description + 中文地址 + map link + photo]
Start time: [time] China time (UTC+8)
What happens if: [rain/closure/illness/delay/refund link]
Accessibility: [distance, stairs, lift, toilet, seating]
Dietary needs: [what you can ask/translate; what you cannot guarantee]
Payment: [methods + currency + deposit/balance]
Cancellation: [deadline + fee/refund + timezone]
Response time: [hours] China time
Reviews: [source + count + verification method + link]
Questions: [email/WhatsApp]
```

产品卡必须让用户在不打开合同的情况下回答：**多少钱、谁带、包含什么、在哪里见、取消怎么办、遇到异常怎么办。**

### 4.3 总价与支付块

```text
Price: ¥[amount] per person
Includes: [list]
Not included: [list]
Deposit: ¥[amount], payable via [licensed agency/merchant payment link]
Balance: ¥[amount], due [date/time] China time
Currency: CNY. Your card issuer may apply its own exchange rate or fees.
All mandatory fees and taxes are included in the total shown above.
Optional extras are listed separately and are never added without your written approval.
```

如果价格是定制的：

```text
Price for your group = [base fee] + [per-person fee × number of people] + [mandatory fees].
The final written quote is valid until [date/time] China time.
We will not charge you before you approve the written scope and total.
```

不要用低价 `from` 吸引点击，再在结账时加入不可避免的费用。英国 CMA 对总价、强制费用和 drip pricing 的说明可作为对照[S18]；中国法下也需遵守真实宣传、合同费用明确等要求[S2][S4]。

### 4.4 WhatsApp 首响模板

```text
Hi {{name}}, I’m {{human name}} from CQ Local Pal.
I can help with {{date}} for {{group size}} people.

To confirm availability and the total price, please send:
1. Your arrival date and time
2. Your hotel area (not the room number)
3. The one thing you most want to avoid on this trip

I’ll reply with what is included, what is not, and the full price before you pay anything.
Our reply hours are {{actual hours}} China time.

Please do not send your passport, full medical history, card number, password, or
verification code in this chat. If we need sensitive information later, we will explain why
and send a secure process.
```

### 4.5 确认信模板

```text
Subject: Your CQ Local Pal booking on [date] — confirmation [booking ID]

Hi [name],

Your booking is confirmed. Here is the written summary.

What you booked
- Product: [name]
- Date/time: [date], [time] China time (UTC+8)
- Group: [N] people
- Language: [language]
- Legal operator: [legal entity]
- Delivered by: [licensed guide/host name], [role]
- Guide certificate (if applicable): [number/link]

Price and payment
- Total price: ¥[amount] CNY
- Paid: ¥[amount]
- Balance: ¥[amount], due [date/time]
- Included: [list]
- Not included: [list]

Meeting point
- [English description]
- 中文地址: [address]
- Map: [link]
- Photo: [link]
- Arrive by: [time]
- Day-of contact: [name], [phone/WhatsApp]

What happens if
- Weather/closure/illness/delay: [short summary + link to full terms]
- Cancellation: [deadline, fee/refund, timezone]

Before you travel
- Bring: [items]
- Accessibility/dietary notes: [summary]
- Travel insurance: strongly recommended; not included
- Emergency numbers in China: 110 police, 119 fire, 122 traffic, 120 medical

Privacy
- We use your details for [purposes]. Retention: [period]. Sharing: [who]. Access/deletion:
  [contact/link]. Full notice: [link].

Questions before the trip: reply to this email or message [WhatsApp number] during
[actual hours] China time. If you do not receive a reply within [actual escalation window],
email [escalation address].

See you in Chongqing,
[human name]
[role]
```

### 4.6 行前提醒模板（24 小时 / 2 小时）

```text
Hi [name], this is [human name] from CQ Local Pal.

Your [product] starts tomorrow at [time] China time (UTC+8).
Meet at [landmark], [English description]. 中文地址: [address]. Map: [link].
Your guide/host: [name], [photo/link], [phone/WhatsApp].
Bring: [water/comfortable shoes/ID if needed/etc.].
Weather note: [actual note].
If you are late, message us before [time]. If you cannot reach us, call [number].
Emergency numbers: 110 police, 119 fire, 122 traffic, 120 medical.
```

2 小时版本只保留：时间、集合点、联系人、迟到/取消规则、紧急电话。

### 4.7 异常通知模板

#### 天气/安全

```text
Hi [name], we are monitoring the weather for [date].
The route is currently [safe/not safe] because [specific reason].
Your options are:
1. Keep the plan with this covered alternative: [details].
2. Move to [available date/time] at no extra charge / with this price difference: [amount].
3. Cancel under the weather policy in your booking terms: [refund/credit details].
Please reply by [time] China time so we can confirm guides and venues.
```

#### 景点闭馆

```text
Hi [name], [attraction] has notified us that it will be closed on [date].
We can offer:
1. [Alternative] at the same total price.
2. [Alternative] with a price difference of ¥[amount].
3. A reschedule or the refund option in your booking terms.
We will not change the itinerary or charge a difference without your written approval.
```

#### 导游/host 生病

```text
Hi [name], [name] is unable to lead your experience on [date] due to illness.
We can offer:
1. A replacement [licensed guide/host] with the same role and language: [name/profile].
2. A reschedule to [date/time].
3. The refund option in your booking terms.
We are sorry for the disruption. Please tell us which option you prefer by [time].
```

#### 航班/到达延误

```text
Hi [name], thanks for the update. We have recorded your new arrival time as [time].
We can hold the start until [time] subject to guide/venue availability.
If you arrive later, we will offer [alternative/reschedule/refund policy].
Please message us again when you land so we can confirm the plan.
```

### 4.8 付款失败/支付安全模板

```text
Hi [name], the payment link did not go through. Please do not send card details,
passwords, or verification codes in chat.

You can try [documented alternative payment method] here: [link].
If that also fails, reply with the error message (without card details) and we will
offer a documented fallback or hold the request until [time].
```

不要通过 WhatsApp/微信索要完整卡号、CVV、密码或短信验证码。

### 4.9 售后请求评价模板

```text
Subject: How was your [product] on [date]?

Hi [name],

Thank you for joining us. We would like to hear what worked and what did not.

If something went wrong, please reply to this email first. We would rather try to fix it
than ask you for a rating.

If you would like to leave a review, you can use [external platform link] or our
booking-linked review form: [link]. We do not offer discounts, freebies, or entries in
exchange for a positive review. We publish reviews from completed bookings and explain
our verification method here: [review policy link].

Thank you,
[human name]
```

### 4.10 投诉确认模板

```text
Hi [name], I’m sorry this happened. I have logged your complaint as [case ID].

What we understood: [one-sentence summary].
What happens next: [owner] will review [evidence] and reply by [date/time] China time.
If you need urgent medical/police/fire/traffic help, call 120/110/119/122 first.

We will keep a written record and tell you the outcome, including any refund or remedy
under your booking terms.
```

---

## 5. 预订与服务交付流程

### 5.1 MVP 主链路（网页优先）

```text
Ad/social post
  → mobile landing page (price, inclusions, operator, terms)
  → short form or email/WhatsApp link
  → human qualification and written quote
  → WhatsApp/email clarification
  → licensed agency/merchant payment link for deposit
  → written confirmation + terms + privacy notice
  → 24h and 2h reminders
  → meet at a documented point
  → delivery + exception handling
  → end-of-service check
  → complaint window / honest review request
  → referral / next-trip offer (optional, consent-based)
```

不建议首版做：账号体系、App、微信小程序、复杂会员积分、自动排班、自动退款、实时库存。它们会增加合规与运维负担，但不能替代价格、履约主体和人工异常处理。

### 5.2 服务蓝图

“SLA”均为待运营确认的建议示例，不是已承诺数字。对外只能发布实际可执行的窗口。

| 阶段 | 用户在意点 | 前台动作（用户看到/收到） | 后台动作与责任 | 工具/系统 | 建议 SLA（待确认） | 失败模式与补救 | 指标 |
|---|---|---|---|---|---|---|---|
| 1. 广告/帖子 | 这是不是给我的？会不会是骗局？ | 具体任务、真实图、价格起点/总价条件、落地页链接 | 素材版权/真实性审核；UTM；评论/私信响应 | 社交后台、素材库 | [X] 小时内首响 | 夸大承诺、假图、私信只问“预算多少” | 点击率、落地页到达率、私信→页面率 |
| 2. 落地页 | 总价、包含、谁履约、取消 | 首屏 trust strip、产品卡、what happens if、FAQ | 法务/运营核对每个声明；链接可用性检查 | CMS、分析工具 | 页面 [X] 秒内可读；链接每周检查 | 价格/条款过期、表单坏、WhatsApp 链接失效 | 10 秒理解通过率、滚动深度、CTA 点击 |
| 3. 轻量问卷 | 是否要先暴露隐私？ | 只问日期、人数、目标、预算、联系方式、语言、酒店区域 | 线索分级；敏感信息不进入首轮表单 | 表单、CRM/表格 | 自动确认即时；人工分类 [X] 小时 | 字段太多、无隐私说明、移动端错位 | 开始率、完成率、放弃字段 |
| 4. 人工报价 | 价格是否完整、能否改、何时有效 | 书面报价：总价、包含/不含、履约主体、有效期、下一步 | 核库存/导游/场地；计算强制费用；记录假设 | 邮件模板、报价单、CRM | [X] 个工作小时内 | 报价后被加价、口径不一致 | 报价率、报价→定金率、报价差错率 |
| 5. 定金/支付 | 支付是否安全、能否退 | 合规商户支付链接、金额/币种、退款条款、收据 | 对账；确认收款主体；不通过聊天收卡号 | 支付链接、财务系统 | 支付后 [X] 分钟内确认 | 国际卡失败、重复扣款、链接过期 | 支付成功率、失败原因、退款时长 |
| 6. 书面确认 | 我到底买了什么？ | 确认信 + 条款 + 隐私说明 + 联系人 | 合同/订单归档；导游/供应商派单；保险核对 | 邮件、电子合同、订单系统 | 支付后 [X] 小时内 | 确认信缺项、角色写错、条款版本不一致 | 确认完整率、条款打开率、客诉率 |
| 7. 行前提醒 | 会不会迟到/走错/漏带东西 | 24h/2h 提醒：集合点、地图、照片、联系人、天气、紧急电话 | 检查导游/场地/天气；更新变更 | 邮件、WhatsApp、短信备份 | 24h 前 + 2h 前 | 用户没看到、电话不通、集合点临时变更 | 提醒送达率、迟到率、no-show 率 |
| 8. 见面 | 谁出现？是否安全？ | 姓名/照片/角色、证件/工牌、再次确认行程 | 导游签到；备用联系方式；现场风险评估 | 移动打卡、WhatsApp | 开始前 [X] 分钟到达 | 导游迟到/走错/临时换人 | 准时率、见面成功率、首响时间 |
| 9. 行中异常 | 下雨/闭馆/身体不适/支付失败怎么办 | 现场说明选项、价格差、退款/改期 | 运营值班；供应商协调；记录证据 | WhatsApp、电话、应急表 | 紧急情况立即；非紧急 [X] 分钟 | 无人接听、擅自改行程、加价 | 异常解决时长、投诉率、现场升级率 |
| 10. 结束 | 是否完成承诺？下一步？ | 结束确认、未解决问题入口、收据/发票 | 服务记录；供应商反馈；异常归档 | 订单系统 | 结束后 [X] 小时内 | 提前结束、遗漏项目、未解释 | 完成率、CSAT、异常闭环率 |
| 11. 评价请求 | 评价是否真实、是否被诱导 | 无激励的评价邀请；外部平台链接；投诉优先入口 | 验证预订；发布政策；回应差评 | 评价工具、邮件 | 结束后 [X] 天 | 只邀好评、删差评、诱导评价 | 评价率、差评响应时长、来源分布 |
| 12. 转介绍/复购 | 下次是否还找你 | 可选推荐；明确同意后再营销 | 分群；退订机制；不滥发 | CRM、邮件 | 按活动 | 未经同意营销、过度频率 | 转介绍率、退订率、复购率 |
| 13. 投诉/退款闭环 | 谁来负责、多久有结果 | 案件号、负责人、时间点、结果与补救 | 证据审查；退款/补偿；根因复盘 | 工单、财务 | 首次回应 [X] 小时；结案 [X] 天 | 无记录、推诿、超期 | 首次响应、结案时长、重复投诉率 |

### 5.3 网页优先的原因与边界

- 网页能稳定展示价格、包含/不包含、履约主体、取消条款和隐私说明；社交平台帖子不适合作为交易记录。
- 网页是 SEO/广告/多语言落地的基础；WhatsApp/微信承担对话，不承担最终条款。
- 支付链接应来自持牌旅行社或合规商户；商户名称必须与确认信中的法律主体一致，或明确解释关系。
- 不在聊天中收集完整卡号/CVV/密码/验证码；不把个人收款码当作默认企业收款方式；具体收款结构由财务/法律确认。
- 微信只作为“已有微信/已在中国”的备选，不作为唯一渠道。外国用户默认可用 email + WhatsApp。

### 5.4 支付与货币的经验规则

- 页面显示 CNY 总价；如显示估算外币，必须标注汇率来源、更新时间和“card issuer rate may differ”。
- 支付宝/微信支付支持国际卡是官方页面介绍的能力[S9]，但不等于每个商户、每张卡、每个国家都成功；上线前用真实测试卡/真实用户路径验证。
- 滴滴官方英文页面称支持境外手机号和多种国际卡[S11]；同样需要实测，不作为“所有司机/车辆都可用”的承诺。
- 任何支付失败都要有替代路径和人工跟进；不能让用户重复付款。

### 5.5 关键 SLA 的设计原则

- 对外只承诺可排班、可衡量的时间，例如“周一至周日 09:00–21:00 China time，[X] 小时内回复”。
- 明确时区：`China time (UTC+8)`。
- 明确“紧急”定义：医疗/警察/火灾/交通事故先拨官方号码，平台协助不是紧急服务。
- 设自动回复，但自动回复必须与实际一致，不能假装人工在线。
- 记录首次响应、解决时长、退款时长；不要只记录“已回复”。

### 5.6 旅程指标

| 环节 | 指标 | 说明 |
|---|---|---|
| 认知 | 10 秒理解测试通过率 | “这是什么/谁带/总价/取消/雨天”能否答对 |
| 落地页 | 落地页→表单开始、表单→提交 | 不用点击率代替理解率 |
| 报价 | 报价请求→书面报价、报价→定金 | 记录报价差错与加价投诉 |
| 支付 | 支付尝试→成功、失败原因 | 分卡组织/国家/设备 |
| 履约 | 准时率、见面成功率、异常解决时长 | 以用户确认和运营记录为准 |
| 信任 | 评价来源分布、差评响应时长、投诉闭环率 | 不只看平均星级 |
| 经济性 | 退款率、客单价、获客成本 | 不以牺牲透明度换转化 |

---

## 6. 信任、合规与服务边界

### 6.1 适用性声明（必须先读）

美国 FTC、英国 CMA 和欧盟消费者保护材料是**成熟对照基准**。它们是否适用于 CQ Local Pal，取决于目标消费者所在地、广告投放、合同主体、服务组合、履约方式和具体交易。不要在没有律师确认的情况下写“我们符合 FTC/CMA/EU 法规”，也不要自行判断某个产品“不是 package”。涉及美国、英国、欧盟消费者时，应由相应法域律师审查。

### 6.2 中国法下的角色边界

| 角色 | 可以怎么说 | 不能怎么说/必须确认 |
|---|---|---|
| 持证导游 | `licensed guide assigned by [travel agency]`；展示导游证号/核验方式 | 不能把无证 host 称为 `licensed guide`；不能私自承揽导游业务[S2][S3] |
| 非导游 host | `local host; not a licensed tour guide`；明确不含专业讲解/持证导游服务 | 不能暗示其可替代导游；是否收费、是否构成导游业务需法律审查 |
| 远程 concierge | `remote assistance during [hours]`；说明不是现场导游、不是紧急服务 | 不能写 `24/7 emergency support`；不能承诺医疗/翻译/救援 |
| 旅行社/组团方 | `operated by [legal entity]`；许可证、合同、保险、投诉渠道 | 不能把平台写成“只是朋友帮忙”来规避旅行社责任 |
| 供应商（餐厅/场地/交通） | `provided by [supplier]`；说明合同关系与责任边界 | 不能把供应商的资质/保险说成平台自身资质 |
| 收款主体 | 与合同/确认信一致；显示商户名称 | 不能匿名收款、个人账户默认收款或收款主体与合同主体不一致而无说明 |

中国《旅游法》要求旅游经营者不得作虚假或引人误解的宣传；导游/领队须持证、接受旅行社委派、不得私自承揽导游业务，不得索取小费；旅行社业务需许可、质量保证金和责任保险；旅游合同应明确服务内容、费用、退改等事项。[S2][S3][S4] 这些是研究线索，不是对具体 SKU 的法律结论。

**品牌写法建议：**

```text
CQ Local Pal is the brand. The legal operator for this booking is [legal entity].
Your experience will be delivered by [licensed guide assigned by the agency] / [non-guide local host].
```

不要把“local friend/pal”当作规避导游资质的商业结构。涉及讲解、带路并收费的产品，应逐 SKU 做中国旅游法律审查，确认是否需要旅行社委派持证导游、合同/收款/保险主体如何匹配。[S2][S3][S4]

### 6.3 服务边界必须写进产品页

服务边界不是免责声明堆砌，而是帮助用户判断“你是否适合”。建议用两栏：

| We provide | We do not provide |
|---|---|
| 行程规划、集合与路线带领、语言协助、餐厅点单协助、行中协调 | 医疗诊断/治疗、法律意见、签证保证、儿童看护、个人购物、紧急救援 |
| 在明确时段内回复 WhatsApp/邮件 | 24/7 随时在线（除非实际排班） |
| 按合同提供的门票/餐食/交通 | 未列明的交通、餐食、保险、私人消费 |
| 对已知风险作提示和应急指引 | 消除所有风险或保证第三方服务不失误 |

具体产品可增加：不进入未开放区域、不代替客人做医疗决定、不承诺餐厅绝对无过敏原、不保证天气/人流/景点临时开放。

### 6.4 价格、评价与消费者保护

**价格：**

- 固定产品：展示含强制费用的真实总价；不要用“起价”吸引点击却无法以该价格购买。
- 定制产品：展示计价公式、最低总价、强制费用、报价有效期；在用户书面确认前不收款。
- 可选加项：单独列出，取得书面同意；不要在确认后自动加入。
- 退款：写明截止时间、时区、手续费、到账路径；不要承诺“立即到账”除非财务能保证。

英国 CMA 材料指出，总价应包含不可避免的费用和税费，drip pricing 可能违法；无法计算总价时，应提供足以让消费者计算的信息[S18]。欧盟不公平商业行为材料也强调清晰、准确、非误导的信息，并讨论虚假倒计时/暗黑模式[S21]。这些作为设计对照，不直接等同于中国法结论。

**评价：**

- 只发布与真实订单关联的评价；如果使用“verified”标签，公开定义验证方法。
- 不购买好评、不购买差评、不以免单/折扣/抽奖/礼品换取特定情绪的评价。
- 不隐藏合理差评、不用法律威胁压制评价；可对辱骂、隐私泄露、虚假事实按公开政策处理并保留申诉/回应权。
- 公开评价来源、总数、时间范围、是否筛选、是否翻译、是否激励。
- 员工/亲友/合作伙伴评价必须披露关系；不能伪装成普通客户。
- 网站精选 testimonial 不能替代外部平台真实评价；至少提供外部链接。

FTC 16 CFR Part 465 涉及虚假评价、购买评价、内部人评价披露、受控评价网站和评价压制等[S13]；FTC Endorsement Guides（16 CFR Part 255）要求真实意见和重大关系披露[S14]。CMA 将虚假评价、隐藏激励评价、误导性评价呈现等列为重点执法领域[S15][S17]；Airbnb 的评价政策要求评价基于真实预订，禁止操纵、激励、施压、威胁和以价值交换评价[S27]。这些都是对照/平台特定规则，不能概括成“所有平台统一规则”。

### 6.5 真实照片、视频与“证明栈”

推荐按顺序展示：

1. 法律主体与许可证/备案（可点击核验）；
2. 实际导游/host 的姓名、角色、语言、照片；
3. 导游证/委派信息（如适用）；
4. 保险类型与覆盖范围（说明不保什么）；
5. 真实路线照片/视频，标注拍摄日期/地点/是否示意；
6. 评价来源、数量、验证方法、差评链接；
7. 取消/天气/闭馆/迟到条款；
8. 响应时段与升级联系人；
9. 隐私说明与敏感数据同意；
10. 紧急电话与安全提示。

不要在未获同意时使用客人照片；不要把图库图说成“我们的导游”；不要用 AI 生成的人像冒充真实团队。若使用示意图，必须标注 `Illustrative image; not the actual guide/route`。

### 6.6 评价政策（可直接改为英文）

```text
Review policy

We publish reviews only from customers with a completed booking, unless a review is
clearly labelled otherwise. We verify a review by matching the booking ID and the email
or phone number used for the booking. We do not offer discounts, freebies, entries, or
other incentives in exchange for a positive review. We do not suppress legitimate negative
reviews. We may remove content that contains personal data, threats, hate speech, spam,
or false statements about a person, and we will explain the reason on request. Businesses
and staff may reply to a review but may not edit the customer’s text. We publish the source,
date, verification method, and any translation note. To report a problem: [contact].
```

这段政策是设计建议，不是法律意见；上线前需与实际验证能力、平台规则和适用法律核对。

### 6.7 隐私与敏感数据

中国《个人信息保护法》要求合法、正当、必要、诚信、最小化、透明；敏感个人信息包括医疗健康、金融账户、行踪轨迹、宗教、生物识别、特定身份等，通常需要单独同意，并告知必要性和影响；跨境提供、删除权等也有要求。[S5]

最低可行做法：

- 首轮询价只收集：日期、人数、语言、联系方式、酒店区域、目标/限制、预算范围。
- 不收集：护照号、完整病史、信用卡号、精确房间号、未必要的定位轨迹。
- 过敏/行动能力/宗教饮食需求：先问“是否需要我们做特别安排”，说明用途、共享对象、保存期限；需要时再收集必要细节。
- 取得隐私同意，并把营销同意单独列出（默认不勾选）。
- 与导游/餐厅/交通供应商只共享必要信息；能匿名化就匿名化。
- 制定删除/更正/撤回同意流程和供应商数据地图。
- 如面向欧盟/英国用户，另做 GDPR/UK GDPR 评估；如涉及跨境传输，做传输机制评估。
- 不通过 WhatsApp/微信收集支付凭证；支付页面由合规支付方处理。

### 6.8 保险与紧急安全

- 旅行社责任保险是旅行社制度的一部分[S4]，但它不等同于游客个人医疗/意外/行程取消保险；不要写 `fully insured` 让用户误以为一切都被覆盖。
- 在确认信中建议游客购买旅行保险，并说明平台保险的覆盖范围/除外责任。
- 对高风险活动（夜爬、涉水、摩托车、长途徒步、极端天气）单独评估，不把普通路线文案套用到高风险产品。
- 确认信和行前提醒列出 110/119/122/120[S8]，并说明接线语言/服务时间不由平台保证。
- 建立事故/疾病/走失/天气/治安事件升级表；记录时间、地点、证人、证据、处置和回访。

### 6.9 不得使用的信任/营销手法

- 不得买评、刷评、删合理差评、伪造评价者身份；
- 不得制造虚假倒计时、虚假“仅剩名额”、虚假原价/折扣；
- 不得隐藏强制费用或到店加价；
- 不得把图库图/AI 人像说成真实团队；
- 不得虚构“官方合作/政府认证/获奖”；
- 不得把非持证 host 写成 licensed guide；
- 不得承诺 `allergy-safe`、`fully accessible`、`100% safe`、`24/7` 等无法证明的绝对承诺；
- 不得用“local friend”暗示可以规避合同、保险、税务或导游监管。

---

## 7. 跨语言最低可行方案

### 7.1 原则：不是每个市场都要先做全站翻译

首版建议：**一个完整英文站 + 每个重点语言的一页“关键事实卡”**，而不是六套半成品网站。关键事实卡至少覆盖：

- 这是什么、谁履约、适合/不适合；
- 总价、包含/不含、定金/余款；
- 集合点、时间、时区；
- 取消/退款、雨天/闭馆/生病；
- 过敏/饮食/无障碍边界；
- 支付方式与失败备选；
- 隐私摘要与删除联系方式；
- 安全/紧急电话；
- 英文客服入口与响应时段。

当某个语言版本证明有需求（表单选择、广告点击、询问量、实际预订），再扩展完整页面和本地化客服。`[判断]`

### 7.2 各语言的最低可行做法

| 语言/市场 | 首版必须有什么 | 必须人工母语审校 | 可先机翻的内容 | 不能机翻后直接发布的内容 | 渠道/证据状态 |
|---|---|---|---|---|---|
| 英语 | 完整落地页、产品卡、FAQ、确认信、异常通知、隐私摘要 | 英文文案编辑/母语审校；法律条款由律师审阅 | 内部草稿、低风险社媒 caption | 价格、取消、安全、医疗/过敏、保险、隐私同意、许可证、支付 | Email + WhatsApp 为默认；WhatsApp 使用率未验证 |
| 简体中文（华语） | 语言选择器 + 关键事实卡；不要按国籍自动跳转 | 中文编辑；术语与合同口径一致 | 低风险景点介绍 | 法律术语、价格、退款、保险、导游/旅行社角色 | 作为用户主动选择的语言；不假设马来西亚/新加坡用户都使用简体中文 |
| 马来语 | P0 关键事实卡/FAQ；英文客服兜底 | 马来语母语者 + 业务/法律术语校对 | 低风险社媒、景点短介绍 | 价格、退款、导游资质、保险、隐私、安全、支付 | 没有渠道偏好证据；先测试语言选择与广告，不假设 WhatsApp/其他渠道份额 |
| 泰语 | P0 关键事实卡/FAQ；英文客服兜底 | 泰语母语者；需检查敬语、姓名、地址、货币/日期 | 低风险 discovery 内容 | 同上；涉及“licensed guide/host”的术语必须定义 | `[证据]` LINE for Business Thailand 页面显示 LINE 面向泰国企业提供聊天商务方案[S29]；`[假设]` 部分泰国旅客可能偏好 LINE；需测试 |
| 印尼语 | P0 关键事实卡/FAQ；英文客服兜底 | 印尼语母语者；检查正式/非正式语气、宗教/饮食表达 | 低风险 discovery 内容 | 同上；halal/过敏/无障碍表述尤其需要审校 | `[假设]` WhatsApp 可能常用；没有本次可核验的使用率来源；必须用渠道选择题和小规模测试验证 |
| 韩语 | P0 关键事实卡/FAQ；英文客服兜底 | 韩语母语者；敬语、姓名、地址、支付说明必须审校 | 低风险 discovery 内容 | 同上；不要用机器翻译生成敬语或法律承诺 | `[假设]` KakaoTalk 可能是部分韩国用户的渠道；本次未取得可核验官方数据，不能当事实；先测试后再建 Kakao 渠道 |

### 7.3 哪些内容必须人工母语审校

以下属于“高信任/高风险”内容，不能只靠机器翻译：

1. 价格、定金、余款、币种、汇率、发票/收据；
2. 包含/不包含与强制费用；
3. 取消、退款、改期、no-show、不可抗力；
4. 导游/旅行社/ host 的法律角色与资质；
5. 保险范围、除外责任、紧急援助；
6. 医疗、过敏、饮食、宗教、行动能力/无障碍；
7. 安全提示、风险活动、天气/闭馆；
8. 隐私告知、敏感数据单独同意、跨境传输、删除权；
9. 支付方式、支付失败、防诈骗提示；
10. 合同、条款、投诉/争议解决、适用法律；
11. 集合点地址、电话、姓名、地图；
12. 评价政策、验证方法、激励披露。

机器翻译可以在以下地方提高速度，但仍需人工抽查：低风险景点背景、社媒标题、内部工单、非承诺性的旅行灵感内容。`[判断]`

### 7.4 机器翻译最容易伤害信任的地方

- **法律/角色术语**：`licensed guide`、`local host`、`concierge`、`tour operator` 被翻成同一个词，用户会误以为个人 host 就是持证导游。
- **绝对承诺**：`guaranteed`、`allergy-free`、`fully accessible`、`24/7` 被翻成更强或更弱的承诺。
- **价格和退改**：币种、per person/per group、截止时间、时区、手续费丢失。
- **姓名/地址/电话**：音译不一致、地址顺序错误、电话号码少一位。
- **敬语和语气**：韩语/泰语/印尼语的礼貌层级、正式程度用错，会让用户觉得不被尊重或不可靠。
- **饮食/宗教**：把 `halal`、`vegetarian`、`no pork`、`no alcohol` 混为一谈，或把“可询问”翻成“保证”。
- **品牌口号**：直译“本地通/8D 魔幻/江湖”通常没有信息量，甚至造成误解。

### 7.5 翻译 QA 的最低流程

1. **冻结英文源文案**：先确定价格、条款、角色、SLA，再翻译；不要翻译还会变的版本。
2. **建立术语表**：每个术语给英文定义 + 对应法律/业务含义；所有语言统一。
3. **专业翻译**：由目标语言译者完成，不使用纯机翻直接上线。
4. **母语审校**：必须由目标市场母语者审校，不只是“会该语言”的人；高风险段落再由法律/运营复核。
5. **反向检查**：让另一位母语者只看译文回答“总价、谁带、取消、过敏、支付、隐私”六问。
6. **运营验收**：链接、地图、电话、地址、日期、时区、货币、按钮在手机上逐项点通。
7. **上线后回访**：收集“哪句话看不懂/不敢相信”的原文，按语言修正。

### 7.6 渠道：证据、假设、决策

| 市场 | 证据 | 假设（待验证） | 首版决策 |
|---|---|---|---|
| 泰国 | LINE for Business Thailand 页面显示 LINE 为泰国企业提供聊天商务方案[S29]；未取得使用率数据 | 部分泰国旅客可能偏好 LINE | 先 email + WhatsApp；有泰语需求和母语客服后，再评估 LINE Official Account |
| 韩国 | 本次未取得可核验的 Kakao 官方渠道数据 | KakaoTalk 可能是部分用户常用渠道 | 不写“韩国人都用 Kakao”；先 email + WhatsApp，再用韩语页面/访谈测试 Kakao |
| 印度尼西亚 | 本次未取得可核验的 WhatsApp 使用率来源 | WhatsApp 可能是常用渠道 | 不把 WhatsApp 写成“官方偏好”；在表单里让用户选择渠道，按数据决定 |
| 马来西亚/新加坡 | 英语为常见商务/旅游语言是判断，不是本次统计；华语需求需实测 | 英语默认 + 简体中文选项可能覆盖部分用户 | 语言选择器；不按国籍自动跳转；马来语有需求且母语审校后再上 |
| 长线英语客（美/英/澳/欧） | FTC/CMA/EU 材料显示成熟市场对价格、评价、隐私和包价旅游有较高要求[S13][S15][S18][S21][S22] | 这些用户更可能检查评价来源、取消条款和运营主体 | 英文页面必须按最高透明度标准做；具体合规由当地律师确认 |

**统一渠道策略：**

- Email 是交易记录和条款送达的基线；
- WhatsApp 是默认即时沟通候选；
- 微信只作为已有微信/已在中国用户的备选；
- LINE/Kakao 先测试，不先假设；
- 所有渠道都在确认信中回到 email/网页条款，避免聊天记录成为唯一合同依据。

---

## 8. 一页英文落地页结构

### 8.1 页面目标

一页不是“把所有东西塞进一屏”，而是让用户在 3 次滚动内完成判断：**适合我吗 → 总价多少 → 谁带我 → 出问题怎么办 → 如何问/订**。`[判断]`

### 8.2 推荐结构（移动端优先）

| 顺序 | 区块 | 必须出现的内容 | 目的 | 验收标准 |
|---|---|---|---|---|
| 0 | Header | Logo、`English` 语言选择、`WhatsApp` 链接、`Sign in` 不需要 | 降低导航负担 | 手机上不遮挡首屏 CTA |
| 1 | Hero | H1 任务、副标题、总价/起价条件、主 CTA、真实图片/短视频 | 10 秒内知道是什么、多少钱、下一步 | 不看下方也能回答“是什么/谁带/总价” |
| 2 | Trust strip | 法律主体、角色、许可证/备案、保险范围、响应时段 | 建立交易信任 | 每个声明可点击核验 |
| 3 | Who it's for / not for | 体力、语言、饮食、无障碍、团队规模、购物偏好 | 让不适合的人尽早离开，减少退款/差评 | 至少有 3 条“not for you”及替代建议 |
| 4 | What you get | 时长、人数、语言、路线、门票/餐食/交通、联系人 | 让用户比较价值 | 与产品卡/合同一致 |
| 5 | What you don't get | 未含餐食、接送、保险、私人消费、可选加项 | 预防现场加价争议 | 不含项与含项同样醒目 |
| 6 | How it works | 3 步：选日期/问问题 → 收到书面报价 → 确认并支付定金 | 降低流程不确定 | 每步说明多久、由谁做 |
| 7 | Price & payment | 总价、押金/余款、币种、支付方式、失败备选 | 消除结账恐惧 | 无强制费用后置 |
| 8 | What happens if | 雨天、闭馆、生病、迟到、支付失败、投诉 | 回答“如果……” | 每个场景有选项和时间点 |
| 9 | Meet point & accessibility | 英文说明、中文地址、地图、照片、台阶/电梯/厕所 | 降低走错/体力风险 | 地图/照片链接在手机上可打开 |
| 10 | Dietary & allergy | 能问/能翻译/不能保证；过敏严重度询问 | 保护健康边界 | 不出现 `allergy-safe` 绝对承诺 |
| 11 | Reviews | 来源、数量、验证方法、差评链接、评价政策 | 用可核验证据替代自夸 | 至少一个外部来源或明确“尚无评价” |
| 12 | Operator & insurance | 法律主体、许可证、保险范围/除外、投诉渠道 | 回答“谁负责” | 与确认信/合同一致 |
| 13 | FAQ | 10 条以内，先放价格/角色/退改/天气/支付/隐私 | 处理最后异议 | 每条回答具体，不用“请联系我们” |
| 14 | Final CTA | `See dates and total price` 或 `Ask a question` | 收口 | 不制造假倒计时 |
| 15 | Footer | 隐私、条款、取消政策、评价政策、紧急电话、联系地址 | 合规与信任 | 所有链接可用、版本日期明确 |

### 8.3 首屏最小文案骨架

```text
[Brand]
[Language: English]

H1: [Specific outcome for a specific traveller]
Subhead: [Who delivers it] · [duration/group size] · [one honest limitation]
Price: ¥[X] [per person/group] · [what is included]
[Primary CTA: See dates and total price]
[Secondary CTA: Ask a question on WhatsApp]

Trust: Operated by [legal entity] · [licence/registration] · Delivered by [licensed guide/host]
[Review source/count, only if verifiable]
```

### 8.4 一页落地页的硬性要求

- 不登录也能看到价格、包含、取消和履约主体；
- 不要求用户先填长表才能看到价格；
- 价格、币种、日期、时区、人数单位在同一屏内一致；
- `WhatsApp` 链接预填产品名、日期、人数，不让用户面对空白聊天；
- 语言切换不丢失当前页面/表单数据；
- 所有法律/隐私/评价政策链接有新版本日期；
- 移动端 320–360px 宽度无横向滚动；
- 图片有 alt text，重要信息不只放在图片里；
- 表单错误提示说明“怎么修”，不是只标红；
- 支付前再次显示总价、退款条款和运营主体；
- 页脚有紧急电话，但明确平台不是紧急服务。

---

## 9. 产品卡字段与完整样卡

### 9.1 字段清单

| 字段 | 是否必需 | 说明 |
|---|---|---|
| 产品名 | 必需 | 用任务命名，不用空洞品牌词 |
| 一句话结果 | 必需 | 用户完成后得到什么 |
| 法律运营主体 | 必需 | 旅行社/公司/商户名称 |
| 许可证/备案/导游证 | 条件必需 | 涉及旅行社/导游服务时展示并链接核验 |
| 实际履约人/角色 | 必需 | `licensed guide` 或 `non-guide host`，不能混用 |
| 语言 | 必需 | 写明是导游、host 还是远程客服的语言能力 |
| 时长/起止 | 必需 | 含时区 |
| 团队规模 | 必需 | 最大/最少成行 |
| 总价/计价单位 | 必需 | CNY、per person/group、强制费用 |
| 包含/不包含 | 必需 | 逐项，不用“等”模糊收尾 |
| 可选加项 | 必需（如有） | 价格与确认方式 |
| 集合点 | 必需 | 英文 + 中文地址 + 地图 + 照片 |
| 取消/退款/改期 | 必需 | 截止时间、时区、费用 |
| 天气/闭馆/生病 | 必需 | 替代/改期/退款 |
| 饮食/过敏 | 必需（如涉及餐饮） | 能力边界 |
| 无障碍 | 必需（如路线有体力要求） | 台阶、电梯、厕所、步行距离 |
| 支付方式 | 必需 | 支付链接、失败备选、防诈骗 |
| 响应时间 | 必需 | 实际时段 + 时区 |
| 保险 | 必需（如宣称） | 类型、覆盖、除外 |
| 评价来源 | 必需（如有评价） | 来源、数量、验证方法 |
| 隐私 | 必需 | 收集目的、共享、保留、删除 |
| 紧急联系方式 | 必需 | 官方号码 + 平台升级路径 |

### 9.2 两类产品的写法差异

**A. 持证导游产品：**

```text
Delivered by [name], a licensed guide assigned by [travel agency].
Guide certificate: [number/link].
The guide may provide commentary and guiding services within the licensed scope.
```

**B. 非导游 host 产品：**

```text
Delivered by [name], a local host. This is not a licensed guided tour.
The host can help with navigation, language support, and local coordination,
but does not provide licensed guide commentary or replace a tour guide.
```

如果业务模式介于两者之间，先做法律审查，不要在文案中自行“折中”成 `licensed local friend`。

### 9.3 完整英文样卡（填空版）

```text
First Night Walk
Land, eat, and learn the metro without guessing.

3 hours · Max 6 people · English · Jiefangbei

Operated by: [legal entity]
Travel agency licence / registration: [number + verification link, if applicable]
Delivered by: [name], [licensed guide assigned by the agency / non-guide local host]
Guide certificate: [number/link, if applicable]
Insurance: [type/scope; exclusions]

Total price: ¥[X] per person
Includes: [guided/hosted route], [one metro ride], [dinner reservation], [translation help]
Not included: dinner, drinks, hotel pickup, personal travel insurance, optional extras
Optional extras: [private car + ¥X], added only with written approval

Meeting point: [landmark], [English description]. 中文地址: [address]. Map: [link]. Photo: [link].
Start time: [time] China time (UTC+8)
What happens if: [link to weather/closure/illness/delay terms]
Accessibility: [X] km walking, [N] stairs, [lift details], [seating/toilet details]
Dietary needs: We can ask/translate; we cannot guarantee an allergy-free kitchen.
Payment: [Alipay/WeChat Pay/card/payment link], CNY; deposit ¥[X], balance ¥[Y] due [date]
Cancellation: [free until date/time; after that X%; refund path]
Response time: [hours] China time
Reviews: [source], [count], [verification method], [link]
Questions: [email/WhatsApp]
```

---

## 10. 问卷问题

### 10.1 首轮轻量表单（低摩擦）

建议 8–10 个字段，移动端一屏可完成；不要一上来要求护照/病历/信用卡。

```text
1. What would you like help with?
   [ ] First night / arrival
   [ ] Food and local neighborhoods
   [ ] A custom itinerary
   [ ] Remote help during my trip
   [ ] Something else: [short text]

2. Preferred date and time window
   [date] [time window] [flexible? yes/no]

3. Group size and ages of children (if any)
   [number] adults, [number] children, ages [ ]

4. Preferred language
   [English] [简体中文] [Bahasa Melayu] [ไทย] [Bahasa Indonesia] [한국어] [Other]

5. How should we contact you?
   [Email] [WhatsApp] [WeChat, if already using] [Other]
   [contact field]

6. Your hotel area (not the room number)
   [area/landmark]

7. What is your budget range?
   [ ] Under ¥[X] per person
   [ ] ¥[X]–¥[Y] per person
   [ ] ¥[Y]+ per person
   [ ] Not sure; show me options

8. What is the one thing you most want to avoid on this trip?
   [ ] Walking too far / stairs
   [ ] Heat or crowds
   [ ] Allergies / dietary problems
   [ ] Getting lost / language barriers
   [ ] Tourist traps / forced shopping
   [ ] Other: [ ]

9. Do you need us to plan around a health, accessibility, dietary, or religious need?
   [ ] No
   [ ] Yes — please send me a secure follow-up question
   [ ] Prefer not to say

10. Privacy and contact consent
   [ ] I agree to the privacy notice: [link]. (Required)
   [ ] I would like occasional trip tips by email. (Optional; unchecked by default)
```

### 10.2 报价后/预订前补充问题

只有进入报价/预订才问，且说明必要性：

```text
1. Full names of travellers (as they should appear on the booking)
2. Arrival date/time and preferred meeting time
3. Exact hotel area / pickup point, if transport is included
4. Mobility needs: distance, stairs, lift, seating, toilet access
5. Dietary pattern and allergy severity; do you carry medication?
6. Do you need a halal / no-pork / no-alcohol / vegetarian kitchen? (only if relevant)
7. Emergency contact name and phone (optional unless required by the operator/insurer)
8. Travel insurance status (recommended, not necessarily mandatory)
9. Would you like to add [optional extra]? Price ¥[X].
10. Do you need an invoice/receipt? Billing name and email.
11. Anything else we must know to keep you safe?
12. Consent to share necessary details with the guide/restaurant/transport supplier: [ ] yes [ ] no
```

### 10.3 问卷的隐私微文案

```text
We use these answers to check whether the experience fits you and to prepare a written
quote. We do not sell your data. We only share necessary details with the guide, venue, or
transport supplier after your booking is confirmed. You can ask us to access, correct, or
delete your data at [contact]. Full privacy notice: [link].
```

如收集健康/过敏/行动能力/宗教等敏感信息，应在此处说明“为什么需要、不提供的后果、共享给谁、保存多久”，并按适用法律取得单独同意。[S5]

### 10.4 表单设计规则

- 先给价值/价格，再要求联系方式；不要在首屏强迫注册。
- 每个字段说明“为什么问”；敏感字段尤其如此。
- 允许“prefer not to say”，但说明是否影响安全评估。
- 支持保存/继续，避免重复输入。
- 区分“必填/选填”；营销同意默认不勾选。
- 表单提交后立即给确认号和“下一步/多久回复”。
- 不在 URL 参数、聊天预览或分析工具中泄露健康/过敏信息。

---

## 11. WhatsApp / 邮件 / 异常 / 售后话术

### 11.1 对话状态机

| 状态 | 目标 | 必须发出的信息 | 不应发生 |
|---|---|---|---|
| 新线索 | 判断是否适合 + 收集最低信息 | 人工姓名、响应时段、3 个问题、隐私提醒 | 一上来要护照/病历/卡号 |
| 已资格确认 | 给出可执行选项 | 日期/人数/语言/价格范围/下一步 | 只发“PM me”或“DM for price” |
| 已报价 | 让用户能比较和决定 | 书面总价、包含/不含、履约主体、有效期 | 报价后口头加价 |
| 待支付 | 降低支付风险 | 合规链接、金额/币种、退款条款、失败备选 | 通过聊天收卡号/CVV/验证码 |
| 已确认 | 固化合同与期望 | 确认信、条款、隐私、联系人、集合点 | 只发一句“booked” |
| 行前 | 防止迟到/走错/漏带 | 24h/2h 提醒、地图、照片、天气、电话 | 临时改集合点不通知 |
| 行中 | 快速解决异常 | 选项、价格差、时间点、升级人 | 消失、推诿、擅自改行程 |
| 结束 | 收口与补救 | 完成确认、投诉入口、收据/评价 | 只发五星好评请求 |
| 售后 | 复盘与关系 | 案件号、结果、退款/补偿、回访 | 删差评、威胁、拖延 |

### 11.2 WhatsApp 首响（广告点击后）

```text
Hi {{name}}, I’m {{human name}} from CQ Local Pal. Thanks for your message about {{product}}.
I can help with {{date}} for {{group size}} people.

Before I confirm availability, please send:
1. Your arrival date and time
2. Your hotel area (not the room number)
3. Whether anyone in the group needs step-free access, a specific diet, or allergy planning

I’ll send the total price, what is included, and what is not before you pay.
Our reply hours are {{actual hours}} China time.
```

如果用户只问“多少钱”，不要只回一个数字；回复：

```text
The total depends on [date/group size/route]. For [example scenario], the total is ¥[X]
including [items]. There are no mandatory fees beyond that. If you tell me [date/people],
I can confirm the exact total and availability.
```

### 11.3 资格确认话术

```text
Thanks — that helps. This route may fit you if [fit criteria]. It may not fit if [limitation].
Before I quote, can you confirm:
- [accessibility need]
- [allergy severity / dietary pattern]
- [whether children/elderly travellers need a slower pace]
If any of these is a hard requirement, tell me now so I can say honestly whether we can
deliver it instead of overpromising.
```

### 11.4 书面报价话术

```text
Here is the written quote for [date]:

Total: ¥[X] CNY for [N] people
Includes: [list]
Not included: [list]
Operated by: [legal entity]
Delivered by: [licensed guide/host + role]
Cancellation: [deadline/fee]
Quote valid until: [date/time] China time

If you want to proceed, I’ll send a secure payment link from [merchant/agency name].
No optional extra will be added without your written approval.
```

### 11.5 定金/支付话术

```text
To reserve [date], the deposit is ¥[X]. The balance is ¥[Y], due [date/time].
Payment link: [link]
Merchant name on the link: [name]
Cancellation/refund terms: [link]

Please do not send card numbers or verification codes in chat. If the link fails, tell me
the error message (without card details) and I’ll offer [documented fallback].
```

### 11.6 24 小时/2 小时提醒

```text
Hi [name], your [product] starts [tomorrow/at time] at [time] China time (UTC+8).
Meet at [landmark], [English description]. 中文地址: [address]. Map: [link]. Photo: [link].
Your guide/host: [name], [role], [photo/link], [phone/WhatsApp].
Bring: [items]. Weather: [note].
If you are late or lost, message us before [time]. Emergency: 110 police, 119 fire,
122 traffic, 120 medical.
```

### 11.7 行中异常话术

#### 用户迟到/找不到

```text
I’m at [exact spot] near [landmark]. I’m wearing [description] and standing [location].
Please send me a photo of where you are. Do not cross the road / enter a different
entrance. We can hold the start until [time] subject to [policy].
```

#### 天气/安全

```text
The route is not safe today because [specific reason]. We will not run it as planned.
Your options are: [covered alternative], [reschedule], or [refund/credit under terms].
Please choose by [time]. We will confirm the price difference, if any, in writing.
```

#### 景点闭馆

```text
[Attraction] is closed today. We can offer [alternative] at the same price, [alternative]
with a ¥[X] difference, or [reschedule/refund]. We will not change the plan without your
written approval.
```

#### 导游/ host 生病

```text
[Name] is ill and cannot lead today. We can offer [replacement with same role/language],
[reschedule], or [refund under terms]. We are sorry and will confirm your choice by [time].
```

#### 支付失败

```text
The payment did not go through. Please do not send card details in chat. Try [alternative
link/method]. If it still fails, send me only the error text (no card number) and I will
offer [documented fallback].
```

#### 医疗/治安/火灾/交通事故

```text
Please call 120 for medical, 110 for police, 119 for fire, or 122 for a traffic accident
first. Then send me your location and a safe callback number. Our team can help during
[support hours], but we are not emergency services.
```

### 11.8 投诉升级话术

```text
I’m sorry. I’m logging this as [case ID] and assigning [owner].
Please send [photos/receipts/messages] by [time]. We will reply with findings and the
remedy/refund under your booking terms by [date/time] China time.
If you are in immediate danger, call the emergency numbers above first.
```

### 11.9 评价与转介绍话术

```text
Thank you for travelling with us. If something did not go well, reply here first; we would
rather fix it than ask for a rating. If you want to leave a review, use [external link] or
our booking-linked form: [link]. We do not offer incentives for positive reviews.
If you want to share a referral code, it is optional and never affects your review.
```

### 11.10 微信备选话术

```text
If you already use WeChat, you can add us at [ID]. We will still send the booking summary,
price, terms, and privacy notice by email so you have a written record. WhatsApp and email
remain available if WeChat is not convenient.
```

### 11.11 客服禁用话术

- `Everyone loves us` / `100% satisfied` / `best in Chongqing`：无证据。
- `Don't worry, everything is included`：除非合同逐项列明。
- `We can definitely handle any allergy`：无法保证。
- `The tour is fully accessible`：除非逐段验证。
- `We are available 24/7`：除非真实排班。
- `You must pay now to keep the price`：除非价格/库存真的有截止规则。
- `We will give you a discount if you leave a 5-star review`：评价激励。
- `Just trust us`：没有信息量，反而降低信任。

---

## 12. FAQ 10 条（英文可直接改）

> 以下答案必须与真实运营/合同一致。`[方括号]` 不能原样上线。

### 1. Is this a guided tour or a local host service?

```text
It depends on the product, and the product card says which one you are buying.
[Product A] is operated by [legal entity] and delivered by a licensed guide assigned by
[travel agency]. [Product B] is a non-guide local host service: the host can help with
navigation, language, and local coordination, but does not provide licensed guide commentary.
We do not use “local friend” to describe a licensed guide service.
```

### 2. Who exactly will meet me, and what is their role?

```text
You will receive the name, photo, role, and phone/WhatsApp of your guide or host before the
start. If we must replace them, we will tell you the reason and offer a replacement with the
same role/language where possible, a reschedule, or the refund option in your booking terms.
The legal operator is [legal entity]; the day-of contact is [name].
```

### 3. What is included and what is not included?

```text
This product includes [item], [item], and [item]. It does not include [meal/drink],
[transport to the meeting point], [personal travel insurance], or [optional extras].
Optional extras are priced separately at ¥[X] and are never added without your written
approval. The complete list is in your written quote and confirmation.
```

### 4. What is the total price, deposit, balance, and currency?

```text
The total is ¥[X] CNY for [per person/per group]. A deposit of ¥[Y] reserves the date;
the balance of ¥[Z] is due by [date/time] China time. The total shown includes [mandatory
fees/taxes]. Your card issuer may apply its own exchange rate or fees. We will not add
mandatory fees after you receive the written quote.
```

### 5. What happens if it rains, an attraction closes, or the guide is ill?

```text
If it rains, we use [covered alternative] when safe; if the route is unsafe, we offer a
reschedule or the refund option in your booking terms. If an attraction closes, we offer an
alternative and confirm any price difference before changing the plan. If the guide/host is
ill, we offer a same-role replacement where possible, a reschedule, or the applicable refund.
We will not change the itinerary or charge extra without your written approval.
```

### 6. Can you handle dietary needs, allergies, and accessibility requirements?

```text
We can ask the restaurant about ingredients, translate your request, and help you choose
dishes. We cannot guarantee an allergy-free kitchen or prevent cross-contact. For
accessibility, we describe the actual route: [distance], [stairs], [lift], [toilet], and
[seating]. Tell us your hard requirements before booking; if we cannot meet them, we will
say so instead of accepting a booking we cannot deliver.
```

### 7. How do I pay, and what if my international card fails?

```text
We accept [payment methods] through [licensed agency/merchant payment link]. Prices are in
CNY. If your card fails, do not send card details or verification codes in chat; use
[documented alternative] or contact us for a fallback. We will never ask for your password,
full card number, or SMS code by WhatsApp/WeChat/email.
```

### 8. What are the cancellation, late-arrival, and no-show rules?

```text
Free cancellation is available until [date/time] China time. After that, [fee/credit rule].
If you are late, message us before the start; we can hold the start until [time] subject to
guide/venue availability. A no-show after [time] is handled under [policy]. Weather,
closure, and illness exceptions are in [terms link].
```

### 9. Is my health, location, and photo data private?

```text
We collect only what is needed to answer your enquiry and deliver the booking. We use
health/allergy/mobility details to assess suitability and brief the relevant guide/venue,
not for marketing. We share only necessary details with [guide/restaurant/transport supplier]
after confirmation. Retention: [period]. Access/deletion: [contact/link]. Marketing consent
is separate and optional. Full privacy notice: [link].
```

### 10. How quickly do you reply, and what should I do in an emergency?

```text
We reply within [actual hours] China time, [days]. For urgent medical, police, fire, or
traffic emergencies, call 120 (medical), 110 (police), 119 (fire), or 122 (traffic) first.
After calling, message us at [number] during support hours; we can help with coordination
but we are not emergency services. For non-urgent questions, email [address].
```

---

## 13. UX 检查清单

### 13.1 首屏与理解

- [ ] 10 秒内能看懂“是什么、适合谁、总价、谁带、取消/天气”。
- [ ] H1 是客户任务，不是“专业/热情/深度/魔幻”等空词。
- [ ] 首屏有真实产品图/短视频，不是无关图库图。
- [ ] 首屏或一屏内有总价/明确起价条件。
- [ ] 首屏有实际履约主体和角色。
- [ ] 首屏 CTA 与价格/条款相邻，不诱导先留隐私。
- [ ] 至少 5 位目标用户完成 10 秒理解测试。
- [ ] 移动端 320–360px 无横向滚动、无遮挡。

### 13.2 价格与交易

- [ ] 固定产品显示含强制费用的总价。
- [ ] 定制产品显示计价公式/范围、最低总价、报价有效期。
- [ ] 明确 per person/per group、币种、税费、可选加项。
- [ ] 定金、余款、支付链接商户名称与合同主体一致或有解释。
- [ ] 支付失败有备选路径，不在聊天收卡号/CVV/验证码。
- [ ] 退款截止时间、时区、手续费、到账路径写清楚。
- [ ] 不用虚假倒计时、虚假“仅剩名额”、虚假原价。
- [ ] 支付前再次显示总价、取消条款、运营主体。

### 13.3 履约与安全

- [ ] 写明 `licensed guide` / `non-guide host` / `remote concierge` 的真实角色。
- [ ] 导游证/旅行社许可证/备案可点击核验。
- [ ] 保险类型、覆盖范围、除外责任、是否替代个人保险写清楚。
- [ ] 集合点有英文说明、中文地址、地图、照片、联系人。
- [ ] 写明迟到、走失、天气、闭馆、生病、支付失败的处置。
- [ ] 过敏/饮食/无障碍用“能做到/不能做到”而不是绝对保证。
- [ ] 紧急电话与平台升级路径在确认信和行前提醒中可见。
- [ ] 明确平台不是紧急服务，接线语言/时间不夸大。

### 13.4 表单与隐私

- [ ] 首轮表单不超过必要字段，不要求护照/病历/信用卡。
- [ ] 每个敏感字段说明用途、共享对象、保存期限。
- [ ] 隐私同意与营销同意分开，营销默认不勾选。
- [ ] 表单支持保存/继续，避免重复输入。
- [ ] 错误提示说明如何修复，不只标红。
- [ ] 确认页给确认号、下一步、响应时间。
- [ ] 不在 URL/分析工具/聊天预览泄露健康/过敏/位置信息。
- [ ] 有访问、更正、删除、撤回同意的联系路径。

### 13.5 评价与信任

- [ ] 评价有来源、数量、时间范围、验证方法。
- [ ] 至少有一个外部评价链接；没有评价时诚实说明。
- [ ] 不买评、不激励好评、不隐藏合理差评。
- [ ] 差评有公开回应/申诉机制。
- [ ] 员工/亲友/合作伙伴评价披露关系。
- [ ] 真实照片/视频有拍摄日期/地点/授权说明。
- [ ] 示意图/AI 图明确标注，不冒充真实团队。
- [ ] 不使用无链接的“认证/官方合作”徽章。

### 13.6 可访问性与国际化

- [ ] 文字对比度、字号、焦点状态符合 WCAG 2.2 基准[S26]。
- [ ] 触控目标不小于 24×24 CSS px（WCAG 2.5.8 最低要求；实际建议更大）。
- [ ] 表单有可见 label，错误与字段关联。
- [ ] 重要信息不只放在图片/视频里。
- [ ] 日期写 `2 Nov 2026`，时间写 `21:00 China time (UTC+8)`。
- [ ] 金额写 `¥399 CNY`，外币估算注明汇率来源/时间。
- [ ] 语言切换保留当前页面/表单状态。
- [ ] 翻译版本有母语审校记录和版本日期。
- [ ] 电话/地址/地图/支付链接在每个语言版本逐项点通。

### 13.7 运营与合规

- [ ] 每个 SKU 完成导游/旅行社/合同/收款/保险角色审查。
- [ ] 每个公开声明有证据/负责人/复检日期。
- [ ] 供应商有书面资质/保险/安全/取消条款。
- [ ] 投诉有案件号、负责人、首次回应和结案 SLA。
- [ ] 退款有财务路径和到账时间记录。
- [ ] 评价政策、隐私政策、条款都有版本日期。
- [ ] 广告/落地页/确认信口径一致。
- [ ] 不把美国/英国/欧盟规则写成“已自动适用”，除非律师确认。

---

## 14. A/B 测试建议

### 14.1 测试原则

- 先做定性 10 秒测试/访谈，再做定量 A/B；不要用少量点击宣布赢家。
- 每次只测试一个主要变量；预注册假设、主指标、护栏指标和停止规则。
- 按语言/市场/设备分层；不要把英语用户的结论直接套到泰语/韩语用户。
- 不用“点击率更高”替代“理解更清楚、退款更少、投诉更少”。
- 任何测试版本都不得包含虚假价格、虚假稀缺、虚假评价或未经验证的安全承诺。

### 14.2 测试清单

| # | 假设 | A 版本 | B 版本 | 主指标 | 护栏指标 |
|---|---|---|---|---|---|
| 1 | 任务型 H1 比品牌型 H1 更容易理解 | `Your first night in Chongqing, without the guesswork.` | `Discover the real Chongqing with local friends.` | 10 秒理解通过率、CTA 点击 | 表单完成率、退款/投诉 |
| 2 | 价格前置降低无效线索 | 首屏显示总价/起价条件 | 首屏只写 `Get a quote` | 报价请求质量、报价→定金 | 跳出率、客诉“隐藏费用” |
| 3 | 低压力 CTA 更适合首次访问 | `See dates and total price` | `Book now` | CTA 点击、表单开始 | 表单完成、退款率 |
| 4 | 真实导游/ host 照片提升信任 | 真实姓名/角色/照片/视频 | 城市风景图 | 表单完成、报价→定金 | 图片加载、移动端性能 |
| 5 | “适合/不适合”减少错配 | 首屏下方显示 fit/not fit | 只写 inclusions | 合格线索率、退款率 | 表单完成、CSAT |
| 6 | 外部评价比自贴 testimonial 更可信 | 外部平台链接 + 数量/来源 | 仅网站精选好评 | 报价→定金、评价点击 | 评价投诉、品牌风险 |
| 7 | 明确异常处理降低犹豫 | 首屏附近放 weather/closure | 只放 FAQ 底部 | 表单完成、报价请求 | 客服重复问题量 |
| 8 | WhatsApp 入口适合移动端 | 预填消息的 WhatsApp CTA | 短表单 CTA | 首次响应率、合格线索 | 响应超时、垃圾消息 |
| 9 | 透明总价优于模糊 from | 总价 + 强制费用说明 | `from ¥X` 无说明 | 支付完成、客诉 | 跳出率、报价→定金 |
| 10 | 母语审校页面提升信任 | 母语审校关键事实卡 | 机翻完整页 | 表单完成、报价→定金 | 退款/投诉、翻译纠错量 |
| 11 | 定金规则前置降低退款争议 | 支付前显示定金/退款条款 | 支付后才显示 | 支付完成、退款率 | 客诉、拒付率 |
| 12 | 响应时段可验证提升信任 | 显示实际时段/时区 | 写 `24/7`（仅测试假设，不实际承诺） | 首响达标率、CSAT | 未响应投诉；若无法 staffing 立即停用 |

### 14.3 指标定义

- `landing → form start`：开始填写表单的会话 / 落地页会话。
- `form completion`：提交成功 / 开始填写。
- `quote request rate`：请求书面报价 / 提交表单。
- `quote → deposit`：支付定金 / 收到书面报价。
- `time to first human response`：用户首次消息到真人回复的中位数与 P90。
- `deposit completion`：成功支付 / 进入支付页。
- `refund/complaint rate`：退款或投诉订单 / 完成订单。
- `10-second comprehension`：正确回答“是什么/谁带/总价/取消/雨天”的比例。
- `CSAT`：服务后自报满意度；与评价星级分开记录。

不要在没有足够样本时公布“提升 X%”的结论；先看方向、置信区间和护栏指标。

---

<!-- CONTINUE -->
