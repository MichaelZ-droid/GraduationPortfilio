export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
  image?: string; // Path to image in public folder or URL
  features?: string[];
  painPoints?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide-react icon name
  type: 'link' | 'copy';
  value?: string; // The value to copy or display
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    about: string;
    avatar?: string;
  };
  projects: Project[];
  learningReviews: {
    title: string;
    content: string; // Can be markdown or plain text
  }[];
  socials: SocialLink[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Shangshu",
    title: "AI Product Builder | VibeCoding训练营 学员",
    tagline: "用AI重塑工作生活，从想法到产品的思维突破",
    about: "你好！我是詹尚枢。我拥有一段多元的职业经历，从医疗建筑设计研究，到宣传片制作，再到如今深耕于无人车运营与解决方案领域。我始终保持着对新事物的好奇心，喜欢不断尝试、体验和突破自我。目前，我正在积极探索 AI 编程与自动化工作流（Vibecoding），致力于通过技术手段提升效率，与大家一同通过 AI 探索新的可能性。",
    avatar: "/placeholder-avatar.jpg",
  },
  projects: [
    {
      title: "PoDigest",
      description: "自动获取播客摘要的 AI 助手。针对知识工作者和终身学习者面临的播客内容过载问题，提供高效的信息获取方案。通过订阅机制，自动将长音频转化为精炼摘要，帮助用户快速筛选高价值内容，告别“收藏吃灰”的焦虑。",
      tags: ["Next.js", "AI", "Podcast", "Automation"],
      link: "https://pod-digest-1sym.vercel.app/",
      image: "/case1.png",
      painPoints: [
        "没时间听：工作日忙碌，周末积压几十期播客，瞬间失去打开动力",
        "听完就忘：偶尔听完一期，第二天忘了80%内容，难以沉淀价值",
        "检索困难：想找之前听过的某个观点，完全找不到定位"
      ],
      features: [
        "5分钟了解1小时内容：AI 自动生成精炼摘要",
        "感兴趣片段快速定位：不再需要从头听到尾",
        "价值沉淀：将“听过”转化为“留存”，构建个人知识库"
      ]
    },
    {
      title: "VideoNote",
      description: "针对知识分享与会议录像等高价值长内容，用户不仅需要处理线上公开资源，更面临大量线下私有录制文件的整理痛点。VideoNote 的核心在于探索一种**隐私优先且低成本**的解决方案：通过浏览器端本地提取音频，仅上传轻量级音频数据进行AI处理，既规避了GB级视频上传的带宽成本与隐私风险，又完美满足了用户对私有内容的高效索引与学习需求。",
      tags: ["Next.js", "OpenAI Whisper", "Local-First", "Privacy"],
      link: "https://video-note.vercel.app/",
      image: "/case2.png",
      painPoints: [
        "囤积焦虑：硬盘里躺着几十个G的直播录像/会议记录，想看但不敢开，开了又怕浪费时间",
        "检索噩梦：只想要“AI落地”那5分钟干货，却需要在2小时的进度条里盲目拖拽",
        "隐私顾虑：公司会议/私人课程不便上传到云端平台进行分析"
      ],
      features: [
        "本地化处理：浏览器端提取音频，视频文件绝不上传，保护隐私且零带宽成本",
        "智能摘要：AI 自动生成带时间戳的结构化笔记，一键跳转关键内容",
        "极速体验：拖入即解析，无需等待漫长的视频上传过程"
      ]
    },
    {
      title: "Client-info-parser",
      description: "针对真实工作中从客户收到的大量基本信息录入的高频痛点开发的提效工具。为最大限度降低部署成本并确保数据隐私安全，采用 'Single-File HTML + Python Script' 的极简架构，实现完全本地化的数据解析与清洗，即开即用，零依赖零风险。",
      tags: ["Python", "HTML", "Automation", "Regex"],
      link: "https://pan.baidu.com/s/59Nd6ALb5wG7mFfp81jF_uw",
      linkText: "百度云下载",
      image: "/case3.png",
      painPoints: [
        "多源异构数据录入：客户信息散落在聊天记录、Excel表格中，格式混乱且非结构化",
        "重复劳动效率低：需手动提取姓名、电话、权限三类信息，在电脑与手机端反复切换复制粘贴",
        "人工操作易出错：大量数据手动搬运时，极易发生“看串行”或填错信息的失误"
      ],
      features: [
        "智能解析：支持文本粘贴与Excel上传，自动清洗干扰信息，正则精准提取姓名电话",
        "权限识别：自动高亮“网点管理员/驿站操作员”等关键角色，辅助人工决策",
        "极简交付：单HTML文件+Python脚本架构，数据纯本地处理，零隐私风险，即下即用"
      ]
    },
    {
      title: "Portfilio个人主页",
      description: "WayToAGI VibeCoding训练营第五课阶段性展示。这是一个完全由 AI 辅助编程（VibeCoding）构建的个人作品集网站，旨在记录和展示我在 AI 编程领域的探索历程与实战成果。",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "VibeCoding"],
      link: "https://profilio-vibe.vercel.app/",
      image: "/case4.png",

    }
  ],
  learningReviews: [
    {
      title: "VibeCoding 实战复盘：从踩坑到思维重塑",
      content: `### 每个人都有各自的“坑”，多踩坑才能多成长
- 听课的内容永远只是理论，动手实践时的门槛往往远超预期。从部署网页到打通 GitHub 与 Vercel，每一步都充满挑战。
- 这些报错和挫折让我深刻体会到“眼会手不会”的差距，也正是这些坑构成了成长的阶梯。

### 有困难找 AI，更要学会“观察” AI
- 遇到报错时，将错误日志完整丢给 AI 并补充环境上下文，通常能解决大部分问题。但 AI 有时也会“钻牛角尖”，陷入死循环。
- 在与 Trae 协作修改产品时，我发现它有时会陷入“请求—运行—报错”的循环，却无法生成有效展示。这促使我跳出当前逻辑，去检查更基础的环节：API Key 是否被正确调用？Supabase 链接是否配置无误？
    ——这些我们默认 AI 会处理好的细节，往往是它卡壳的盲区。不要只做指令的发布者，要做 AI 的协作者。

### 完成比完美更重要
- 先有最小可行产品（MVP），再通过迭代优化。学会给产品“减负”，不追求大而全，而是精准解决核心痛点。
- 以需求驱动设计。不要为了“完整”而堆砌技术。很多时候，一个纯前端网页就能解决问题，无需复杂的后端。这种“以终为始”的思维，让产品设计更聚焦、更高效。

### 给新伙伴的建议
- 行动是治疗焦虑的良药。学习 AI 编程没有捷径，唯有持续实践与迭代，才能真正掌握这门新时代的“语言”。`
    }
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/MichaelZ-droid",
      icon: "Github",
      type: "link"
    },
    {
      platform: "Email",
      url: "#",
      value: "shangshuzhan@gmail.com",
      icon: "Mail",
      type: "copy"
    },
    {
      platform: "WeChat",
      url: "#",
      value: "Arch-Templar",
      icon: "Wechat",
      type: "copy"
    }
  ]
};
