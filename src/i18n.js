import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Platform features": JSON.stringify([{ text: "Platform " }, { text: "features", accent: true }]),
            "Market challenges versus The Stels solutions": JSON.stringify([{ text: "Market challenges versus" }, { text: "The Stels solutions", accent: true }]),
            "The Stels solutions": JSON.stringify([{ text: "The Stels solutions", accent: true }]),
            "About us": JSON.stringify([{ text: "About ", accent: true }, { text: "us" }]),
            "With over 7 years": JSON.stringify([{ text: "With " }, { text: "over 7 years", accent: true, }]),
            "Stels by Gliesereum": JSON.stringify([{ text: "Stels " }, { text: "by Gliesereum", accent: true }]),
            "Ready to experience the future?": JSON.stringify([{ text: "Ready to experience the future? ", accent: true }]),
            "[ STELS ]": JSON.stringify([{ text: "[ STELS ] ", accent: true }]),
            "Tailored solutions for your needs": JSON.stringify([{ text: "Tailored solutions " }, { text: "for your needs", accent: true }]),
            "Automation systems": JSON.stringify([{ text: "Automation ", accent: true }, { text: "systems" }]),
            "Main blocks": JSON.stringify([{ text: "Main " }, { text: "blocks", accent: true }]),
            "Unlock the full potential": JSON.stringify([{ text: "Unlock " }, { text: "the full potential", accent: true, }]),
            "Press about us": JSON.stringify([{ text: "Press " }, { text: "about us", accent: true }]),
            "read the article": JSON.stringify([{ text: "read the article", accent: true, }]),
            "By Gliesereum": JSON.stringify([{ text: "By " }, { text: "Gliesereum", accent: true }]),

        }
    },
    kr: {
        translation: {
            "Solutions": "솔루션",
            "AI-systems": "AI 시스템",
            "Ecosystem": "생태계",
            "Media": "미디어",
            "FAQ": "자주하는 질문",
            "Features": "기능",
            "About us": "회사 소개",
            "About us ": "회사 소개",
            "[ STELS ]": JSON.stringify([{ text: "[ STELS ] ", accent: true }]),
            "WEB 3.0 by Gliesereum": "글리세움의 WEB 3.0",
            "Try now": "지금 사용하기",
            "Tailored solutions for your needs": "고객의 니즈를 따라가는 맞춤형 솔루션",
            "For projects with own tokens": "자체 토큰이 있는 프로젝트를 위한",
            "For exchanges and market-makers": "거래소 및 마켓메이커를 위한",
            "For private Investors and Individuals": "개인 투자자 혹은 개인을 위한",
            "Benefit from our market-making service build on AI-powered automated systems": "AI 기반 자동화 시스템으로 구축된 마켓메이킹 서비스의 혜택을 누리세요",
            "Attract liquidity from your customers to scale your market and grow": "고객으로부터 유동성을 확보하여 당신의 시장을 확장하고 성장해요",
            "Have access to RAW market data, aggregated from all sources for ease of analysis": "용이한 분석을 위해, 모든 소스에서 집계된 RAW 시장 데이터에 액세스 할 수 있습니다.",
            "Attract new customers, provide efficient services for your clients and grow their capital": "새로운 고객을 유치하고, 고객에게 효율적인 서비스를 제공하며, 고객의 자본을 늘릴 수 있습니다",
            "Enjoy professional market-tested tools and cut the expenses with automated systems": "시장-테스트가 완료된 전문적인 도구를 활용하시고, 자동화된 시스템으로 비용을 절감하세요",
            "Be efficient, agile and well-informed by having data, prediction models and execution strategies in one place.": "데이터, 예측모델, 실행전략을 한 곳에 모아 능률적으로, 민첩하게, 그리고 풍부하게 정보를 얻으세요",
            "Use your capital in low-risk market-making strategies with no IL": "IL 없이 위험성 적은 마켓메이킹 전략에 당신의 자본을 사용하세요",
            "Maximize returns with our specialized arbitrage and spread bots": "전문적인 차익거래 및 스프레드 봇으로 수익을 긱대화하세요",
            "Maintain full control of your assets, benefiting from compounded rewards and flexible withdrawals": "복합적인 보상과 유연한 인출의 혜택을 누리는 동시에 당신의 자산에 대한 완전한 통제권을 유지하세요",
            "Automated systems": "자동화 시스템",
            "Stels is providing flexible AI-powered system for market making that is fast, precise and reliable": "Stels는 빠르고, 정확하며, 신뢰할 수 있는 마켓메이킹 전용 유연한 AI 기반 시스템을 제공하고 있습니다.",
            "10 specialized bots": "10개의 전문 봇",
            "Use ready-to-go setup of bots, that are united into Botboxes - teams of specialized AI-algorithms that are combining efforts to maximize the effieciency and perform the ordered task.": "즉시 사용 가능한 봇을 사용하세요. 각각의 봇은 봇박스로 통합되고, 봇박스는 주문된 작업 수행 측면에서 효율성을 극대화하기 위한 결합된 노력인 전문 AI 알고리즘의 집합체입니다.",
            "Neuronic control module": "신경 제어 모듈",
            "Enhance your ROI and metrics with our neuronic decision-making system, that analyses streaming RAW data from all markets and communicates with all the bots to immediately execute.": "당신의 ROI와 지표를 저희의 신경학적 의사결정체계를 사용하여 향상하세요. 저희 신경학적 의사결정체계는 모든 시장의 스트리밍 RAW 데이터를 분석하고 모든 봇과 통신하여 즉시 실행합니다.",
            "Our ecosystem": "우리의 생태계",
            "Gliesereum сross-chain blockchain": "글리세움의 크로스체인 블록체인",
            "Dive into a blockchain network that transcends boundaries. Our cross-chain technology ensures fluidity, security, and efficiency, bridging various blockchain environments for seamless transactions and interactions.": "경계를 초월하는 블록체인 네트워크에 빠져보세요. 저희 크로스체인 기술은 원활한 거래와 상호 작용을 위해 다양한 블록체인 환경을 연결하여 유동성, 보안 및 효율성을 보장합니다.",
            "Gliesereum wallet": "글리세움 지갑",
            "Your gateway to the Gliesereum universe. Experience a safe, user-friendly, and intuitive wallet designed to manage, transfer, and store your assets with unparalleled ease.": "Gliesereum 세계로 가는 관문입니다. 비교할 수 없을 정도로 간단하게 자산을 관리, 전송 및 저장이 가능한 특별히 설계된 안전하고 사용자 친화적이며 직관적인 지갑을 경험해 보세요.",
            "Stels by Gliesereum Web 3.0": "글리세움 WEB 3.0의 Stels",
            "The next frontier in web evolution. Embrace a decentralized, encrypted data transfer protocol. We innovate and bring new ways of secure data transfer and market maintenance, without risks of leaking any sensitive and private data": "차세대 웹을 경험해보세요. 투명하고 제어 가능하며 향상된 사용자 경험을 제공하는 분산된 사용자 중심 웹 환경을 수용합니다. 우리는 데이터 전송 및 시장 유지 관리를 위한 새로운 방법을 혁신하고 도입합니다.",
            "AI-powered Automation Systems": "AI 기반 자동화 시스템",
            "Automation reimagined. With Stels, tap into the prowess of advanced AI algorithms, automating market processes and yield generation to optimize profitability and efficiency.": "자동화가 재창조되었습니다. Stels 를 사용하면 고급 AI 알고리즘의 능력을 활용하여 시장 프로세스와 수익 생성을 자동화하여 수익성과 효율성을 최적화할 수 있습니다.",
            "Unlock the full potential": JSON.stringify([{ text: "Stels ", accent: true }, { text: "소프트웨어의 잠재력을 최대한 활" }]),
            "of Stels software and access an expansive suite of AI automation systems": "용하고 광범위한 AI 자동화 시스템 제품군에 액세스하세요",
            "get access": "액세스 권한 지금 받기",
            "Press about us": "회사소개를 누르세요",
            "Binance square": "바이낸스 스퀘어",
            "read the article": "관련 기사 읽기",
            "KITKO": "KITKO",
            "read the article": "관련 기사 읽기",
            "Coin market cap": "코인 시가총액",
            "Min Max": "최소 최대",
            "One news page": "하나의 뉴스페이지 ",
            "Traiding view": "트레이딩뷰",
            "What is Stels and how is it revolutionizing the market-making landscape?": "Stels는 무엇이며 마켓메이킹 환경에 어떤 새로운 파동을 일으키고 있습니까?",
            "Stels is a cutting-edge platform designed to redefine market management and yield generation. By offering advanced AI-powered automation and algorithmic strategies, Stels empowers both projects with their own tokens and individual investors to maximize efficiency, returns, and control in the dynamic world of digital finance.": "Stels는 시장 관리와 수익 창출을 재정의하도록 설계된 최첨단 플랫폼입니다. 고급 AI 기반 자동화 및 알고리즘 전략을 제공함으로써 Stels는 현재 디지털 금융의 역동적인 세계에서 효율성과 수익을 극대화하고 통제력을 확보할 수 있도록 자체 토큰과 개인 투자자 모두에게 권한을 부여합니다.",
            "How does the BotBox system enhance my market-making capabilities?": "BotBox 시스템은 어떤 방식으로 당신의 마켓메이킹 능력을 향상합니까?",
            "The BotBox system allows users to curate a unique trio of bots from a selection of 10 distinct options. This specialized combination is designed for collaborative efficiency and leverages pooled liquidity. With the integration of neuronic analysis in our AI-prefix bots, users can make informed decisions and navigate market intricacies with enhanced precision.": "BotBox 시스템을 사용하면 사용자는 10개의 개별 옵션 중에서 고유한 3개의 봇을 선별할 수 있습니다. 이 특수 조합은 협업 효율성을 보여주고 풀링된 유동성을 활용하도록 설계되었습니다. 신경 분석과 통합된 AI 접두사 봇을 사용하면 사용자는 정보에 입각한 결정을 내리고 향상된 정밀도로 복잡한 시장을 탐색할 수 있습니다.",
            "How does the Graph token integrate with Stels and what benefits does it offer?": "그래프 토큰은 Stels와 어떻게 통합되나요? 그리고 어떤 이점이 있나요?",
            "The Graph token serves as a membership key to unlock Stels' full range of features and automation systems. Built on the reliable Gliesereum blockchain, this exclusive token not only grants premium access but also ensures seamless integration within our ecosystem. Users can easily monitor and manage their Graph tokens through the Gliesereum wallet, experiencing efficiency and transparency in every transaction.": "Graph 토큰은 Stels의 모든 기능과 자동화 시스템을 잠금 해제하는 멤버십 키 역할을 합니다. 신뢰할 수 있는 Gliesereum 블록체인을 기반으로 구축된 이 독점 토큰은 프리미엄 액세스 권한을 부여할 수 있을 뿐만 아니라 우리 생태계 내에서 원활한 통합을 보장할 수 있습니다. 사용자는 Gliesereum 지갑을 활용하여 그래프 토큰을 쉽게 모니터링하고 관리할 수 있으며 모든 거래에서 효율성과 투명성을 경험할 수 있습니다.",
            "What assurances does Stels provide for individual investors?": "Stels는 개인 투자자에게 어떤 보증을 제공합니까?",
            "For individual investors, capital return and security are paramount. Stels offers a platform where they can maintain uninterrupted control over their funds, which always remain on the exchange. By granting access to advanced algorithms, Stels ensures maximized returns while also mitigating risks, including concerns of impermanent loss.": "개인투자자에게는 자본수익률과 안전성이 무엇보다 중요합니다. Stels는 개인 투자자가 항상 거래소에 남아 있는 자금에 대해 중단 없이 통제할 수 있는 플랫폼을 제공합니다. Stels는 고급 알고리즘에 대한 액세스 권한을 부여함으로써 수익을 극대화하는 동시에 비영구적 손실에 대한 우려를 포함한 많은 위험을 완화합니다.",
            "How does Stels cater to projects with their distinct tokens?": "Stels는 고유한 토큰을 사용하여 프로젝트를 어떻게 충족합니까?",
            "Projects with their own tokens often require sophisticated market-making services. Stels provides enhanced control over the market-making process, cost-effective solutions, and access to the best algorithmic strategies in the marketplace. This ensures tailored and precise market-making aligned with the unique goals of each project.": "자체 토큰을 사용하는 프로젝트에는 정교한 마켓메이킹 서비스가 필요한 경우가 많습니다. Stels는 시장 형성 프로세스에 대한 향상된 제어, 비용 효율적인 솔루션 및 시장 최고의 알고리즘 전략에 대한 액세스를 제공합니다. 이를 통해 각 프로젝트의 고유한 목표에 맞춰 맞춤화된, 정확한 마켓메이킹이 보장됩니다.",
            "Platform features": "플랫폼 기능",
            "We've crafted an ecosystem that empowers projects, market-makers and individual investors, granting them tools for unprecedented market control and efficiency in liquidity management.": "우리는 프로젝트, 마켓메이커, 개인 투자자에게 힘을 실어주는 생태계를 구축했습니다. 이는 전례 없는 시장 통제와 유동성 관리 효율성을 위한 도구를 제공합니다.",
            "Market-making and Yield generation": "마켓메이킹 및 수익 창출",
            "AI-powered automated system": "AI 기반 자동화 시스템",
            "In-depth analyticsand RAW market data": "심층 분석 및 RAW 시장 데이터",
            "Liquidity provision marketplace": "유동성 공급 마켓플레이스",
            "Projects with their distinct tokens": "고유한 토큰을 사용하는 프로젝트",
            "Projects with their distinct tokens can harness the robust tools of Stels for cost-effective and precise market-making, tailored to their unique strategy and goals. Meanwhile, private investors gain access to advanced algorithms, ensuring their capital not only remains under their control but also works diligently for them, maximizing returns without the typical risks.": "고유한 토큰을 사용하는 프로젝트는 Stels의 강력한 도구를 활용하여 고유한 전략과 목표에 맞게 비용 효율적이고 정확한 마켓메이킹을 할 수 있습니다. 한편, 개인 투자자는 고급 알고리즘에 액세스하여 자본을 통제할 뿐만 아니라 부지런히 작동하여 일반적인 위험 없이 수익을 극대화할 수 있습니다.",
            "Learn more about platform": "플랫폼에 대해 자세히 알아보기",
            "Market challenges": "시장의 당면 과제",
            "The Stels solutions": "Stels 솔루션",
            "Prevailing market inefficiencies": "시장의 비효율성",
            "Web 3.0 market control: advanced, AI-driven market intervention and control.": "웹 3.0 시장 통제: AI-주도적 고도화된 시장 개입 및 통제",
            "Limited transparency from exchanges lacking raw data and market performance metrics": "RAW 데이터 및 시장 성과 지표가 부족한 거래소의 투명성 제한",
            "Data transparency: offering in-depth analytics and raw market insights": "데이터 투명성: 심층 분석 및 RAW 데이터 시장 통찰력 제공",
            "Inadequate and costly market-making solutions": "부적절하고 비용이 많이 드는 마켓메이킹 솔루션",
            "Fish text filling entire two rows and describe this solution": "두 행 전체를 채우는 물고기 텍스트 및 이 솔루션에 대한 설명",
            "Difficulty in accessing and drawing liquidity on CEX platforms": "CEX 플랫폼에 대한 접근 및 유동성 확보의 어려움",
            "Liquidity solutions: a dedicated marketplace for efficient liquidity provisioning": "유동성 솔루션: 효율적인 유동성 제공을 위한 전용 시장",
            "Elevated risks and IL hindering optimal yield generation and passive income streams": "최적의 수익률 창출과 소극적인 소득 흐름을 방해하는 위험과 IL 증가",
            "AI-powered systems: sophisticated automations designed for market-making and yield generation": "AI 기반 시스템: 마켓메이킹 및 수익 창출을 위해 설계된 정교한 자동화",
            "About us": "회사 소개",
            "We are Gliesereum, the vanguard of next-generation blockchain technology poised to redefine the contours of digital market management.": "우리는 디지털 시장 관리의 윤곽을 재정의할 차세대 블록체인 기술의 선두주자인 글리세움입니다.",
            "With over 7 years": "7년 이상의 경력...",
            "With over 7 years in top-tier Market-Making, our goal is to change market management for everyone's benefit. We combine the best of blockchain with AI smarts.": "최고 수준의 마켓메이킹 분야에서 7년 이상 경력을 쌓은 우리의 목표는 모든 사람의 이익을 위해 시장 관리를 바꾸는 것입니다. 우리는 최고의 블록체인과 AI 스마트를 결합합니다.",
            "Stels by Gliesereum": "글리세움의 Stels",
            "Stels by Gliesereum Web 3.0 market control is a result of multiple years of development, which shape out as an easy and intuitive set of tools to create and control the market.": "글리세움 Web 3.0의 Stels의 시장 통제는 시장을 창출하고 통제하기 위한 쉽고 직관적인 도구 세트로 형성된 다년간의 개발의 결과입니다.",
            "Ready to experience the future?": "미래를 경험할 준비가 되셨나요?",
            "Become a part of the Gliesereum community. Explore our products, engage with our team, and witness the future of market management and yield generation.": "글리세움 커뮤니티의 일원이 되어보세요. 글리세움의 제품을 탐색하고, 글리세움과 협력하고, 시장 관리 및 수익 창출의 미래를 목격하십시오.",
            "Get access": "액세스 권한 지금 받기",
            "Automation systems": "자동화 시스템",
            "Main blocks": "메인 블록",
            "Stels protocol": "Stels 규약",
            "By Gliesereum": "글리세움의",
            "Automation systems": "자동화 시스템",
            "Automated capital and market management": "자동화된 자본과 시장관리를 지금 만나보세요",
        }
    },
    cn: {
        translation: {
            "Solutions": "方案",
            "AI-systems": "人工智能系统",
            "Ecosystem": "生态",
            "Media": "媒体",
            "FAQ": "常见问题",
            "Features": "平台特色",
            "About us": "关于我们",
            "About us ": "关于我们",
            "[ STELS ]": JSON.stringify([{ text: "[ STELS ] ", accent: true }]),
            "Web 3.0 by Gliesereum": "Gliesereum Web 3.0 技术",
            "Try now": "现在试试",
            "Tailored solutions for your needs": "根据你的需求制定方案",
            "For projects with own tokens": "对于拥有自己代币的项目",
            "For exchanges and market-makers": "对于交易所和做市商",
            "For private Investors and Individuals": "对于私人投资者和个人",
            "Benefit from our market-making service build on AI-powered automated systems": "从我们利用人工智能驱动的做市系统收益",
            "Attract liquidity from your customers to scale your market and grow": "吸引客户的流动性以扩大市场规模并实现增长",
            "Have access to RAW market data, aggregated from all sources for ease of analysis": "可以访问从所有来源汇总的原始市场数据，以便于分析",
            "Attract new customers, provide efficient services for your clients and grow their capital": "吸引新客户，为您的客户提供高效服务，并增长他们的资本",
            "Enjoy professional market-tested tools and cut the expenses with automated systems": "享受专业经过市场测试的工具，并通过自动化系统降低开支",
            "Be efficient, agile and well-informed by having data, prediction models and execution strategies in one place.": "通过将数据、预测模型和执行策略集中在一个地方，保持高效、灵活和信息灵通",
            "Use your capital in low-risk market-making strategies with no IL": "策略中利用您的资本，无需承担损失",
            "Maximize returns with our specialized arbitrage and spread bots": "通过我们专业的套利和价差机器人让您的回报最大化",
            "Maintain full control of your assets, benefiting from compounded rewards and flexible withdrawals": "保持对您的资产的完全控制，从复利奖励和灵活的提现中受益",
            "Automation systems": "自动化系统",
            "Stels is providing flexible AI-powered system for market making that is fast, precise and reliable": "Stels提供灵活并且基于人工智能的市场做市系统，快速、精确、可靠",
            "10 specialized bots": "10种专业机器人",
            "Use ready-to-go setup of bots, that are united into Botboxes - teams of specialized AI-algorithms that are combining efforts to maximize the effieciency and perform the ordered task.": "使用现成的机器人预设，所有预设组合成Botboxes（机器人盒子）- 由专业的AI算法组成，同时运行这些算法以最大化效率并执行所需任务",
            "Neuronic control module": "神经元控制模块",
            "Enhance your ROI and metrics with our neuronic decision-making system, that analyses streaming RAW data from all markets and communicates with all the bots to immediately execute.": "通过我们的神经元决策系统提高您的投资回报率和指标，该系统分析来自所有市场的流式原始数据并与所有机器人通信以立即执行",
            "Our ecosystem": "我们的生态",
            "Gliesereum сross-chain blockchain": "Gliesereum跨链区块链",
            "Dive into a blockchain network that transcends boundaries. Our cross-chain technology ensures fluidity, security, and efficiency, bridging various blockchain environments for seamless transactions and interactions.": "深入了解一个超越边界的区块链网络 我们的跨链技术确保流动性、安全性和效率，在不同的区块链环境之间建立桥梁，实现无缝的交易和互动",
            "Gliesereum wallet": "Gliesereum 钱包",
            "Your gateway to the Gliesereum universe. Experience a safe, user-friendly, and intuitive wallet designed to manage, transfer, and store your assets with unparalleled ease.": "您进入Gliesereum宇宙的入口 体验一个安全、用户友好和直观的钱包，旨在以无与伦比的便利性管理、转移和存储您的资产",
            "Stels by Gliesereum Web 3.0": "Stels是由Gliesereum开发的Web 3.0平台",
            "The next frontier in web evolution. Embrace a decentralized, encrypted data transfer protocol. We innovate and bring new ways of secure data transfer and market maintenance, without risks of leaking any sensitive and private data": "Web 3.0是Web演化的下一个前沿 一个倡导去中心化、以用户为中心的Web环境，提供透明度、控制权和增强的用户体验 我们创新并引入新的安全数据传输和市场维护方式",
            "AI-powered Automation Systems": "基于人工智能的自动化系统",
            "Automation reimagined. With Stels, tap into the prowess of advanced AI algorithms, automating market processes and yield generation to optimize profitability and efficiency.": "重新构想自动化 通过Stels，利用先进的AI算法的能力，自动化市场流程和收益生成，以优化盈利能力和效率",
            "Unlock the full potential": "释放所有的潜力",
            "of Stels software and access an expansive suite of AI automation systems": "通过Stels访问一个广泛的AI自动化系统套件",
            "get access": "获得权限",
            "Press about us": "关于我们的新闻",
            "Binance square": "币安广场",
            "read the article": "阅读文章",
            "KITKO": "金拓",
            "Coin market cap": "CoinMarketCap（CMC）",
            "Min Max": "MinMax",
            "One news page": "One News Page",
            "Traiding view": "TraidingView",
            "What is Stels and how is it revolutionizing the market-making landscape?": "什么是Stels，它是如何彻底改变市场格局的",
            "Stels is a cutting-edge platform designed to redefine market management and yield generation. By offering advanced AI-powered automation and algorithmic strategies, Stels empowers both projects with their own tokens and individual investors to maximize efficiency, returns, and control in the dynamic world of digital finance.": "Stels是一个前沿平台，旨在重新定义市场管理和收益生成 通过提供先进的人工智能自动化和算法策略，Stels赋予了项目方和个体投资者在数字金融的动态世界中最大化效率、回报和控制的能力 它为拥有自己代币的项目方和个人投资者提供了强大的工具，帮助他们在数字金融领域取得成功",
            "How does the BotBox system enhance my market-making capabilities?": "BotBox系统如何增强我的做市能力？",
            "The BotBox system allows users to curate a unique trio of bots from a selection of 10 distinct options. This specialized combination is designed for collaborative efficiency and leverages pooled liquidity. With the integration of neuronic analysis in our AI-prefix bots, users can make informed decisions and navigate market intricacies with enhanced precision.": "BotBox系统允许用户从10个不同的选项中策划一个独特的三个机器人组合 这种专业化的组合旨在提高协同效率并利用汇集的流动性 通过在我们的AI前缀机器人中集成神经分析，用户可以做出明智的决策，并以更高的精确性应对市场的复杂性",
            "How does the Graph token integrate with Stels and what benefits does it offer?": "Graph代币如何与Stels集成，并提供哪些好处？",
            "The Graph token serves as a membership key to unlock Stels' full range of features and automation systems. Built on the reliable Gliesereum blockchain, this exclusive token not only grants premium access but also ensures seamless integration within our ecosystem. Users can easily monitor and manage their Graph tokens through the Gliesereum wallet, experiencing efficiency and transparency in every transaction.": "Graph代币作为会员密钥，用于解锁Stels全系列的功能和自动化系统 该独家代币建立在可靠的Gliesereum区块链上，不仅授予高级访问权限，而且确保在我们的生态系统内无缝集成 用户可以通过Gliesereum钱包轻松监控和管理他们的Graph代币，在每笔交易中体验高效和透明",
            "What assurances does Stels provide for individual investors?": "Stels为个人投资者提供哪些保障？",
            "For individual investors, capital return and security are paramount. Stels offers a platform where they can maintain uninterrupted control over their funds, which always remain on the exchange. By granting access to advanced algorithms, Stels ensures maximized returns while also mitigating risks, including concerns of impermanent loss.": "对于个人投资者来说，资本回报和安全性至关重要 Stels提供了一个平台，让他们可以对自己的资金保持不间断的控制，这些资金始终留在交易所中 通过提供对先进算法的访问权限，Stels确保最大化回报的同时也降低风险，包括对暂时性损失的担忧",
            "How does Stels cater to projects with their distinct tokens?": "Stels如何满足具有独特代币的项目的需求？",
            "Projects with their own tokens often require sophisticated market-making services. Stels provides enhanced control over the market-making process, cost-effective solutions, and access to the best algorithmic strategies in the marketplace. This ensures tailored and precise market-making aligned with the unique goals of each project.": "拥有自己代币的项目通常需要复杂的市场做市服务 Stels提供了对市场做市过程的增强控制、经济高效的解决方案以及对市场上最佳算法策略的访问 这确保了根据每个项目的独特目标进行量身定制和精确的市场做市",
            "Platform features": "平台特色",
            "We've crafted an ecosystem that empowers projects, market-makers and individual investors, granting them tools for unprecedented market control and efficiency in liquidity management.": "我们构建了一个生态系统，赋予项目、市场做市商和个人投资者工具，实现了在流动性管理方面前所未有的市场控制和效率",
            "Market-making and Yield generation": "做市与收益的产生",
            "AI-powered automated system": "基于人工智能的自动化系统",
            "In-depth analyticsand RAW market data": "深度分析和原始市场数据",
            "Liquidity provision marketplace": "流动性供应市场",
            "Projects with their distinct tokens": "具有独特代币的项目",
            "Projects with their distinct tokens can harness the robust tools of Stels for cost-effective and precise market-making, tailored to their unique strategy and goals. Meanwhile, private investors gain access to advanced algorithms, ensuring their capital not only remains under their control but also works diligently for them, maximizing returns without the typical risks.": "具有独特代币的项目可以利用Stels强大的工具进行经济高效和精确的市场做市，根据其独特的策略和目标进行量身定制 与此同时，个人投资者可以获得先进的算法，确保他们的资本不仅在他们掌控之下，而且为他们辛勤工作，最大限度地提高回报，同时避免典型风险",
            "Learn more about platform": "了解更多有关平台的信息",
            "Market challenges": "市场的挑战",
            "The Stels solutions": "Stels的解决方案",
            "Prevailing market inefficiencies": "市场普遍存在的低效率",
            "Web 3.0 market control: advanced, AI-driven market intervention and control.": "Web 3.0市场控制：基于先进人工智能的市场干预和控制",
            "Limited transparency from exchanges lacking raw data and market performance metrics": "因缺乏原始数据和市场绩效指标的交易导致透明度有限",
            "Data transparency: offering in-depth analytics and raw market insights": "数据透明度：提供深度分析和原始市场的见解",
            "Inadequate and costly market-making solutions": "市场做市解决方案不足且成本高昂",
            "Difficulty in accessing and drawing liquidity on CEX platforms": "在中心化交易所（CEX）平台上访问和提供流动性困难",
            "Liquidity solutions: a dedicated marketplace for efficient liquidity provisioning": "流动性解决方案：一个专门的市场用于高效的流动性提供",
            "Elevated risks and IL hindering optimal yield generation and passive income streams": "风险升高和短暂损失（Impermanent Loss，简称IL）阻碍了最佳的收益生成和被动收入流",
            "AI-powered systems: sophisticated automations designed for market-making and yield generation": "基于AI的系统：专为市场做市和收益生成而设计的复杂自动化系统",
            "We are Gliesereum, the vanguard of next-generation blockchain technology poised to redefine the contours of digital market management.": "我们是Gliesereum，下一代区块链技术的先锋，旨在重新定义数字市场管理的轮廓",
            "With over 7 years": "七年之久",
            "With over 7 years in top-tier Market-Making, our goal is to change market management for everyone's benefit. We combine the best of blockchain with AI smarts.": "拥有超过7年顶级市场做市经验，我们的目标是改变市场管理，造福于所有人 我们将区块链的优势与人工智能智慧相结合",
            "Stels by Gliesereum": "Gliesereum —— Stels",
            "Stels by Gliesereum Web 3.0 market control is a result of multiple years of development, which shape out as an easy and intuitive set of tools to create and control the market.": "Gliesereum —— Stels Web 3.0 市场控制经过多年开发， 形成了一套简单直观的工具，用于创建和控制市场",
            "Ready to experience the future?": "准备好体验未来了吗？",
            "Become a part of the Gliesereum community. Explore our products, engage with our team, and witness the future of market management and yield generation.": "成为Gliesereum社区的一员 探索我们的产品，与我们的团队互动，并见证市场管理和收益生成的未来",
            "Stels protocol": "Stels 协议",
            "Main blocks": "主要区块",
            "By Gliesereum": JSON.stringify([{ text: "Gliesereum ", accent: true }, { text: "技术" }]),
            "Automated capital and market management": "自动化资本和市场管理",
            // "Automation systems": "自动化系统"
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;