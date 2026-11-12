/*
 * 光盐居 · 线上博物馆 —— 展品数据
 * ------------------------------------------------------------
 * 网站结构：主页（光盐居 · 万物璀璨）→ 作品节选 → 前奏曲（四个门类）
 * 更新内容只改这个文件：
 *   hero        主页轮播，填作品 id，按顺序轮播
 *   featured    作品节选，填作品 id，第一件在节选里占大图
 *   categories  四个门类，每个门类下分若干陈列（groups）
 *   works       全部作品，按门类、陈列的顺序排列，编号自动生成
 * 详见 README.md。
 */
window.MUSEUM = {
  // 闲鱼主页：作品的收藏、订制和交易都在闲鱼内完成
  shop: 'https://www.goofish.com/personal?userId=2218677361208',

  /*
   * 联系方式：线下参观预约用。还没开通的留空，网页上就不显示那一行。
   *   wechat    企业微信号
   *   wechatQR  企业微信二维码图片（相对 assets/，例 'studio/wechat-qr.png'）
   *   email     邮箱
   */
  contact: {
    wechat: 'guangyanju',   // 占位：作者在聊天里提的号，企业微信正式开通后换成真号
    wechatQR: '',
    email: ''
  },

  /*
   * 工作室栏目（主页“肆 · 工作室”）
   *   place     所在地（小标题里显示）
   *   epigraph  题记
   *   intro     介绍，\n 分段；整行写成【xx】显示为小标题
   *   photos    照片 [{ src: 'studio/xxx.jpg', caption: '说明' }]，图片放 assets/studio/；为空时不显示照片区
   *   visit     参观须知 [名称, 内容]
   *   tickets   票价 [{ name, price, unit, note }]
   *   booking   预约说明（后面自动接上 contact 里已开通的联系方式）
   */
  studio: {
    place: '滇西 · 保山',
    epigraph: '借问酒家何处去，牧童遥指杏花村。',
    intro:
      '【问渠哪得清如许，唯有源头活水来】\n' +
      '线上博物馆的作品是静止凝固的，源头是鲜活的，在工作室，看到一切的流动。\n' +
      '【创作之起点　美之流淌】\n' +
      '如果要看见艺术创作之美的起点，那体验流淌出这些设计的生活方式和理念是必要的。\n' +
      '线下工作室选址位于滇西，具体为云南省保山市杏花村一座四十年历史的独栋百平老屋院落。\n' +
      '院内有梨、石榴、李子、芙蓉、柠檬、桂花、枸杞、寒兰、接骨草、蓼蓝、艾草、蕨菜等数十种中草药花果树木；还有数不清的、不知道什么时候就会冒出来的、野生叫不上来名儿的花花草草。\n' +
      '不同的季节长不同的叶子，开不同的花，结不同的果。可以赏花、摘果、种菜、喝茶、做咖啡、烤肉烧鸡、体验植物染、参观部分展品等等。',
    photos: [],
    visit: [
      ['地点', '云南省保山市杏花村'],
      ['开放时间', '周一到周五，上午 9:00–12:00，下午 2:00–5:00。周末闭馆，节假日无休；外出采风时不定期闭馆。'],
      ['参观方式', '预约收费参观，年期会员制。须提前半月预约，与助理确定来访参观时间。'],
      ['交通', '飞机、高铁直达市区，工作室是位于市区的院子。高铁站打车 10 分钟内，云瑞机场打车 20 分钟左右。']
    ],
    tickets: [
      { name: '单人门票', price: '480', unit: '元', note: '有效期一周，工作日开放时间可多次进出' },
      { name: '年费会员', price: '3,600', unit: '元 / 年', note: '有效期一年，期内开放时间均可进出参观' }
    ],
    booking: '请提前半月预约，联系光盐居官方企业微信，与助理确定来访时间。'
  },

  // 主页轮播（第一张固定放若尘花冠）
  hero: ['dust', 'xiuqiu', 'ningye', 'lushen', 'luodian'],

  // 次页 · 作品节选（作者还没定，先放这几件，改 id 即可）
  featured: ['dust', 'xiuqiu', 'ruxue', 'ningye', 'luodian', 'feihuang', 'lushen', 'fanxing', 'mao'],

  /*
   * 前奏曲 · 四个门类
   *   status  'open' 开放 / 'soon' 筹备中（门类页显示为空）
   *   feature 门面展台上放的代表作（作品 id），有抠图时带立体效果
   *   about   门类页顶部的介绍，可多段（\n 分段）
   *   groups  门类下的陈列，作品用 group 字段归入
   */
  categories: [
    {
      id: 'ronghua', name: '绒花', en: 'Velvet Flowers', status: 'open',
      feature: 'xiuqiu',
      intro: '蚕丝与铜丝，一瓣一瓣搓出来的花、蝶与小物。',
      about: '绒花唐代就有，多做头饰。光盐居做的绒花样子新、价钱公道，男女都能戴。',
      groups: [
        { id: 'mengwu', name: '绒绒萌物', en: 'Little Ones' },
        { id: 'huanyu', name: '幻羽蝶变', en: 'Wings' },
        { id: 'fanhua', name: '繁花世界', en: 'Blooms' },
        { id: 'xingli', name: '行礼如仪', en: 'Occasions' }
      ]
    },
    {
      id: 'zhijin', name: '织锦画', en: 'Brocade Art', status: 'open',
      feature: 'lushen',
      intro: '收锦料时挑出织纹好看的几块，裱成了框画。',
      about:
        '织锦以桑蚕丝为主料。收集东方锦料样本时，光盐居会把织纹有意思的几块裱成框画。\n' +
        '真丝衣物难打理，裱成框画就能长久保存、凑近细看，价钱也更亲民。织锦常被选作国礼，送外国朋友合适；有些面料算得上绝版，可以传下去。\n' +
        '画框尺寸、锦纹、风格都可以订制：天上飞的、地上跑的、水里游的，古典、现代、油画感、白描感，都有得挑。',
      groups: [{ id: 'zhijin', name: '织锦入画', en: 'Framed Brocade' }]
    },
    {
      id: 'ranfang', name: '草木染坊', en: 'Botanical Dyeing', status: 'soon',
      intro: '草木染还在做，作品会陆续入馆。',
      groups: []
    },
    {
      id: 'qidian', name: '漆钿', en: 'Lacquer & Inlay', status: 'open',
      feature: 'luodian',
      intro: '贝壳的光，铺在黑色真丝上。',
      about:
        '螺钿是把贝壳磨成薄片、嵌饰在器物表面的老手艺，属于髹漆工艺的一支。光盐居的螺钿画以黑色真丝为底，贝片配合手绘，挂在家里、送人都合适。\n' +
        '黑色真丝只有一层暗光，贝片却会随看的角度变色。',
      groups: [{ id: 'luodian', name: '螺钿画', en: 'Mother-of-Pearl' }]
    }
  ],

  /*
   * 字段说明
   *   id        英文短名，用于链接（#/w/id），不要重复
   *   cat       所属门类 id；留空的作品只在主页轮播和节选里出现（如若尘）
   *   group     所属陈列 id
   *   series    系列（卡片和展签上的小字，如“信物系列”“红喜事”）
   *   title     作品名；subtitle 副名（如“深幽蓝菊”）
   *   tags      关键词
   *   glow      作品的“光色”，悬停光晕与详情页底色
   *   feature   true 时在展墙上占双倍大小
   *   focus     展墙封面裁切的重心，如 '25% 50%'
   *   facts     展签条目 [名称, 内容]
   *   summary   正文，\n 分段；整行写成【xx】或 #xx# 会显示为小标题
   *   images    图片路径（相对 assets/），第一张是封面
   *   stage     展台合成图（抠图后放在黑丝绒底上），有它时做卡片封面，并排在详情第一张
 *   frame     true 时 stage 只是把原照片装框放上展台（背景太乱抠不出主体），只做封面、不进详情
   *   cut       透明底主体层（WebP），有它时主页轮播和详情第一张用分层展台，带立体效果
   *   credit    图片来源说明（有展台图时，第 1 张是展台图，原图从第 2 张起）
   *   source    闲鱼原帖链接
   */
  works: [
    /* ---------- 珠宝篇：只放若尘花冠的图片 ---------- */
    {
      id: 'dust', cat: '',
      stage: 'works/dust-4-stage.jpg', cut: 'works/dust-4-cut.webp',
      series: '珠宝篇', title: '若尘', subtitle: '传世花冠',
      glow: '#7fb7d9',
      summary:
        '野花惊目，繁星若尘。',
      images: ['works/dust-4.jpg', 'works/dust-5.jpg', 'works/dust-1.jpg', 'works/dust-7.jpg',
               'works/dust-2.jpg', 'works/dust-3.jpg', 'works/dust-6.jpg', 'works/dust-8.jpg',
               'works/dust-9.jpg']
    },

    /* ================= 绒花 · 绒绒萌物 ================= */
    {
      id: 'mao', cat: 'ronghua', group: 'mengwu',
      stage: 'works/mao-1-stage.jpg', cut: 'works/mao-1-cut.webp',
      title: '一抹红妆', subtitle: '红梅猫咪',
      tags: ['新年礼物', '红梅白猫', '冰箱贴', '摆件'],
      glow: '#d0152b',
      summary:
        '冬日梅枝，猫咪浅眠。\n' +
        '【设计衍绎】\n' +
        '可做自家咿咿呀呀的猫猫喔。 梅枝可做圣诞树和冬青果。\n' +
        '#共创节选#\n' +
        '“黑白狸花猫做出来好呆萌，没有那么霸气”\n' +
        '“确实没有那种虎背熊腰的感觉”\n' +
        '“胖点就有那味儿了”',
      images: ['works/mao-1.jpg', 'archive/plum-1.jpg', 'archive/plum-2.jpg'],
      credit: '第 3、4 张为收藏者实拍'
    },
    {
      id: 'caomei', cat: 'ronghua', group: 'mengwu',
      stage: 'works/caomei-1-stage.jpg', cut: 'works/caomei-1-cut.webp',
      title: '甜心莓莓', subtitle: '粉绿草莓',
      tags: ['草莓', '发卡', '盆栽', '水果集合'],
      glow: '#e8708a',
      summary:
        '娇嫩温柔又特别少女心。\n' +
        '给小孩子可以做成发卡或者盆栽，要是怕ta两三天折腾坏了，还是给弄个玻璃罩放上吧。\n' +
        '【设计衍绎】\n' +
        '草莓可以做红色和青绿色的，就是现实里熟透和青涩的样子。\n' +
        '表面可以点缀上mini的小珍珠，做个暗黑版的黑心莓莓也不错。\n' +
        '这个创作技法可以出个水果合集，如柠檬、石榴、桃子等等。\n' +
        '“这谁能忍的住不摸两把”',
      images: ['works/caomei-1.jpg']
    },
    {
      id: 'niao', cat: 'ronghua', group: 'mengwu',
      stage: 'works/niao-1-stage.jpg', cut: 'works/niao-1-cut.webp',
      title: '点枝渴', subtitle: '生丝小鸟',
      tags: ['簪子', '瓶插画', '车载挂件'],
      glow: '#e2803a',
      summary:
        '生丝小鸟，枝头树果。\n' +
        '如果撒上雪花的话，就有秋末初冬的画面了。\n' +
        '它们在树枝上下翻飞，啄食甜蜜的果实的样子，简直不要更生动。\n' +
        '【设计衍绎】\n' +
        '果实可以做成生丝柿子、葡萄等等，小鸟其实很馋很机灵，别看摄影里笨笨呆呆傻不拉叽的，它挑的都是最甜香的果子哟。',
      images: ['works/niao-1.jpg']
    },

    /* ================= 绒花 · 幻羽蝶变 ================= */
    {
      id: 'cuifeng', cat: 'ronghua', group: 'huanyu',
      stage: 'works/cuifeng-1-stage.jpg', cut: 'works/cuifeng-1-cut.webp',
      title: '巫祝', subtitle: '绿带翠凤蝶',
      tags: ['珠光水彩', '手绘纹路', '表芯玻璃', '原初版样品'],
      glow: '#3fae6a',
      summary:
        '翠绿的蝶翼边缘缀着齿轮和表芯零件，以黑色暗纹皮革作为背景，封存在真玻璃的标本框里。',
      images: ['works/cuifeng-1.jpg', 'archive/gearwing.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'lanjixie', cat: 'ronghua', group: 'huanyu',
      stage: 'works/lanjixie-1-stage.jpg', cut: 'works/lanjixie-1-cut.webp',
      title: '残羽', subtitle: '天堂凤蝶',
      tags: ['机械蝴蝶', '蓝紫幻彩', '断翅再生'],
      glow: '#2fa3d8',
      summary:
        '蓝紫色的断翅再生，四角压着银色雕花。\n' +
        '#共创节选#\n' +
        '“但是右下角的那个指针，我觉得太细了显得不对称。因为我喜欢那种我残疾了，但是我通过各种手段弥补后，变得更好看、更健壮的感觉。所以可以的话我想尽量选择粗壮一点的指针。”\n' +
        '“好的，因为这一版用的是真的手表机芯，我找找更合适的指针。”\n' +
        '“希望机械翅膀能做得更健壮一点，不显得病弱。”\n' +
        '“明白，身残志坚！”\n' +
        '“中！”\n' +
        '“机械翅膀的齿轮接触要有连接感，这方面有办法做到吗？”\n' +
        '“固定摆放的时候靠近处理一下即可。”',
      images: ['works/lanjixie-1.jpg']
    },
    {
      id: 'haigu', cat: 'ronghua', group: 'huanyu',
      stage: 'works/frozen-1-stage.jpg', cut: 'works/frozen-1-cut.webp',
      title: '骸骨', subtitle: '虚拟黑蝶',
      tags: ['蝴蝶骸骨', '冷冻黑', '碎银'],
      glow: '#9fb4c8',
      summary:
        '黑蝶停在一片揉皱的银箔上。\n' +
        '银箔随着时间流逝氧化，会掺入淡紫、古铜、灰褐等多种色调。\n' +
        '不复刚做完时的银灰、亮白和深黑色。\n' +
        '更有吞噬的过程感了。\n' +
        '异常生物档案设定：通体纯黑冰冷，冻结一切物质能量，四周浮散光子逃逸后的雾影。\n' +
        '“对不起，我们没有照片，因为它太危险了，所有的光都会在它身上停下，整体呈现为绝对黑色的蝴蝶状生物，周围会有雾状光影，那是光子缓慢逃离导致的视觉效果。”\n' +
        '“其异常特性在于，它永远维持玻·爱凝聚态，没有任何办法，能让它上升哪怕一度，而它触及到的物质，温度会急速下降。它几乎可以冻结一切物质能量，就连光都会被冻住”\n' +
        '#共创节选#\n' +
        '“你喜欢什么蝴蝶？”\n' +
        '“冷冻的，做成黑色就行”\n' +
        '“到底是追求自由的幻梦重要，还是..….”\n' +
        '“这个蝴蝶的身体到底去掉还是不去呢？其实它可以做成像整个画风那样。”\n' +
        '“不用，这个蝴蝶本身就很不真实，加上反而更生动一些。”\n' +
        '“试一下看看，最后在边缘处都会洒银的。”',
      images: ['works/frozen-1.jpg']
    },
    {
      id: 'junzhu', cat: 'ronghua', group: 'huanyu',
      stage: 'works/answers-1-stage.jpg', frame: true,
      series: '博物系列', title: '共生', subtitle: '君主斑蝶',
      tags: ['拟态造景', '双面蝶', '精微毒花'],
      glow: '#e0782c', feature: true,
      summary:
        'Answers On Her Way\n' +
        'Not sudden wings, but whispers-\n' +
        'how you grew: in storms folded, in silence gold.\n' +
        '#共创节选#\n' +
        '“君主斑蝶的幼虫以夹竹桃科的马利筋花为食。”\n' +
        '“君主斑蝶与夹竹毒花，好有意思的共生关系。”',
      images: ['works/answers-1.jpg', 'works/answers-2.jpg']
    },
    {
      id: 'xueyi', cat: 'ronghua', group: 'huanyu',
      stage: 'works/butterfly-stage.jpg', cut: 'works/butterfly-cut.webp',
      title: '赤泪', subtitle: '血漪蛱蝶',
      glow: '#c8202b',
      summary:
        '传说血漪蛱蝶喜欢挑衅打斗，直到遇上真爱才会停止。\n' +
        '前半句估计是真的，所以它真蝶的标本翅膀全是掉粉的。\n' +
        '用了金粉模拟，淡水珠代表眼泪。\n' +
        '鎏金伤痕，珍珠垂泪。\n' +
        '#共创节选#\n' +
        '“每逢想起，泪总是止不住的流。”',
      images: ['archive/butterfly.jpg'],
      credit: '第 2 张为收藏者实拍'
    },
    {
      id: 'ruxue', cat: 'ronghua', group: 'huanyu',
      stage: 'works/ruxue-1-stage.jpg', cut: 'works/ruxue-1-cut.webp',
      title: '如血', subtitle: '彼岸花',
      tags: ['蓝蜻蜓衍生', '曼珠沙华', '骨尖血'],
      glow: '#b0182a',
      summary:
        '一簇血红的彼岸花，细长花蕊向四面散开，骨簪支撑在中央。\n' +
        '大小不一的骷髅散在骨节空缝之间，白骨之手静默又虔诚地托住坟后的曼珠沙华。\n' +
        '收藏时装进透明匣，外面系上一段白纱。\n' +
        '公子白骨，十里红妆。\n' +
        '存殁定数，无去无来。\n' +
        '不垢不净，不生不灭。\n' +
        '—“如血”别名“如果有来生”—\n' +
        '自然法心硬如铁，多少白骨摆在面前；不会眨一下眼，垂一滴泪。\n' +
        '而我把刀架在你脖子上的一刻，也觉得你的眼眸美如真迹。\n' +
        '是尾也是头，恨与爱同歌。\n' +
        '【设计衍绎】\n' +
        '深蓝色版本，发光的海抽奖赠品',
      images: ['works/ruxue-1.jpg', 'archive/redbloom.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'qingting', cat: 'ronghua', group: 'huanyu',
      stage: 'works/qingting-1-stage.jpg', cut: 'works/qingting-1-cut.webp',
      title: '发光的海', subtitle: '蓝蜻蜓',
      tags: ['青金蓝', '群青'],
      glow: '#2f4fe0',
      summary:
        '原版为书签，可在翅翼落款、扑闪粉、赠笺文。\n' +
        '后衍绎为异色/异形胸针。\n' +
        '男/女都能用能戴。\n' +
        '在比对了一批蓝度不同的阿富汗青金原石后，在手染蚕丝里试过群青和天蓝，最后选定了深蓝。\n' +
        '后来的繁星月牙梳、蓝苍、如血里都用了这抹蓝，它也成了光盐居的代表色。',
      images: ['works/qingting-1.jpg', 'archive/dragonfly-3.jpg', 'archive/dragonfly-6.jpg', 'archive/dragonfly-4.jpg',
               'archive/dragonfly-5.jpg', 'archive/dragonfly-1.jpg', 'archive/dragonfly-2.jpg'],
      credit: '第 3～8 张为收藏者实拍'
    },

    /* ================= 绒花 · 繁花世界 ================= */
    {
      id: 'rulu', cat: 'ronghua', group: 'fanhua',
      stage: 'works/rulu-1-stage.jpg', cut: 'works/rulu-1-cut.webp',
      series: '信物系列', title: '如露', subtitle: '浅蓝睡荷',
      tags: ['浅水如露', '蓝莲花', '睡荷'],
      glow: '#2c59d8',
      summary:
        '给夜晚失眠的每一位。',
      images: ['works/rulu-1.jpg']
    },
    {
      id: 'lancang', cat: 'ronghua', group: 'fanhua',
      stage: 'works/lancang-1-stage.jpg', cut: 'works/lancang-1-cut.webp',
      series: '信物系列', title: '蓝苍', subtitle: '深幽蓝菊',
      tags: ['陈列品', '珍藏', '赠礼'],
      glow: '#2a43c8',
      facts: [
        ['用途', '珍藏或赠礼'],
        ['数量', '仅此一件，所见即所得'],
        ['修复', '视情况长期提供']
      ],
      summary:
        '冷白、群青与纯黑，深邃而幽艳。\n' +
        '深蓝花瓣一层层向外翻卷，花心是一簇白蕊。\n' +
        '菊花在众多作品中以花瓣数目极多而著称。\n' +
        '主色群青校色选用蓝度极佳的阿富汗青金原石。\n' +
        '【对话】\n' +
        '“这个花，怎么说呢，它比较～一枝独秀”\n' +
        '“不是为了搭配和点缀，就它自己就很好看”',
      images: ['works/lancang-1.jpg']
    },
    {
      id: 'ningye', cat: 'ronghua', group: 'fanhua',
      stage: 'works/ningye-1-stage.jpg', cut: 'works/ningye-1-cut.webp',
      series: '信物系列', title: '凝夜', subtitle: '深紫蝴蝶兰',
      glow: '#7a4fd0',
      summary:
        '暗夜处冷光，穿花黑影，凝夜紫。\n' +
        '【设计衍绎】\n' +
        '比日光下更绝的银紫，推荐观赏时间深夜。争论说暖光更具生命力？\n' +
        '颜色任选任变，怎么做怎么高贵，其实油画混色也很搭。\n' +
        '花串缀满枝头是另一种效果。\n' +
        '“蝴蝶兰就是那种..….一串串撞进眼睛里，太会开了。”\n' +
        '“是的，而且花剑不长叶子，花还往前冲，花多多的时候都看不到叶子，太会了。”\n' +
        '“很长一段时间都认为它没有叶子。”',
      images: ['works/ningye-1.jpg']
    },
    {
      id: 'yuanwei', cat: 'ronghua', group: 'fanhua',
      stage: 'works/yuanwei-1-stage.jpg', cut: 'works/yuanwei-1-cut.webp',
      title: '斑斓鸢尾',
      tags: ['鸢尾', '油画色', '框画'],
      glow: '#7a62d8',
      summary:
        '油画鸢尾花，打翻调色盘似的。\n' +
        '#共创节选#\n' +
        '“已有副落霞代我先与你相见。”',
      images: ['works/yuanwei-1.jpg']
    },
    {
      id: 'moli', cat: 'ronghua', group: 'fanhua',
      stage: 'works/moli-1-stage.jpg', frame: true,
      title: '在水一方', subtitle: '茉莉',
      tags: ['茉莉', '花串', '耳坠', '七夕'],
      glow: '#dcd8c8',
      summary:
        '所谓伊人，在水一方。溯洄从之，道阻且长。\n' +
        '溯游从之，宛在水中央。\n' +
        '求之不得，寤寐思服。悠哉悠哉，辗转反侧。\n' +
        '月出皎兮，佼人僚兮。\n' +
        '【设计衍绎】\n' +
        '花串为乙巳年七月初七特别制作。\n' +
        '花坠为衍生设计，清白灵动的小耳坠。\n' +
        '#共创节选#\n' +
        '“也要我帮你系吗？”\n' +
        '“戴上真好看。”',
      images: ['works/moli-1.jpg']
    },
    {
      id: 'baihe', cat: 'ronghua', group: 'fanhua',
      stage: 'works/baihe-1-stage.jpg', cut: 'works/baihe-1-cut.webp',
      title: '粉黛幻影', subtitle: '百合',
      tags: ['百合', '粉碧色', '捧花'],
      glow: '#e07aa0',
      summary:
        '浅色蚕丝，有光晃影。\n' +
        '创作空间很大的百合，可以做成各种变幻模样。\n' +
        '这个粉碧色拿去搭白纱或捧花等等。嘎嘎美。',
      images: ['works/baihe-1.jpg']
    },
    {
      id: 'furong', cat: 'ronghua', group: 'fanhua',
      stage: 'works/furong-1-stage.jpg', cut: 'works/furong-1-cut.webp',
      title: '点绛唇', subtitle: '木芙蓉',
      glow: '#e86a7a',
      summary:
        '蜀江水碧蜀山青，芙蓉如面柳如眉。\n' +
        '粉色渐变 三醉芙蓉/木芙蓉\n' +
        '清晨刚开洁白或极淡粉，中午日照变强升温慢慢转为粉红色，傍晚变成玫红，快凋谢时颜色更深。\n' +
        '花瓣里的花青素（花色苷）很敏感，随光照、温度、酸碱度等不断变化。\n' +
        '不是瞬间换色，而是持续渐变。同一株上同时呈白、粉、红，看起来像一树开多种花。',
      images: ['works/furong-1.jpg']
    },
    {
      id: 'xiuqiu', cat: 'ronghua', group: 'fanhua',
      stage: 'works/xiuqiu-1-stage.jpg', cut: 'works/xiuqiu-1-cut.webp',
      series: '博物系列', title: '仲夏夜之梦', subtitle: '绣球',
      tags: ['上百根绒条', '对半打尖', '花叶九色渐变'],
      glow: '#8fb8e8', feature: true,
      summary:
        '仙泉般的颜色，毛绒绒的触感。\n' +
        '春风拥一吻，授命不得唇。\n' +
        '美人如花隔云端。\n' +
        '【设计衍绎】\n' +
        '白色婚纱和芭蕾舞裙，与仲夏夜之梦堪称绝配。',
      images: ['works/xiuqiu-1.jpg', 'works/xiuqiu-2.jpg']
    },
    {
      id: 'malan', cat: 'ronghua', group: 'fanhua',
      stage: 'works/malan-1-stage.jpg', cut: 'works/malan-1-cut.webp',
      series: '博物系列', title: '掐丝马兰花',
      glow: '#7a6ad8',
      summary:
        '掐丝工艺勾出马兰花，立体高贵典雅；\n' +
        '金色细线围住紫蓝花瓣，叶片由黄绿渐变到青绿。\n' +
        '免授图稿，掐丝鸢尾科马蔺，校友礼物。\n' +
        '体现“扎根荒原，默默奉献”的马兰精神，契合对方的人生追求。',
      images: ['works/malan-1.jpg']
    },
    {
      id: 'meigui', cat: 'ronghua', group: 'fanhua',
      stage: 'works/meigui-1-stage.jpg', cut: 'works/meigui-1-cut.webp',
      title: '暗香', subtitle: '玫瑰',
      glow: '#9c1730',
      summary:
        'Light of my life, fire of my loins.\n' +
        '我的生命之光，我的欲念之火\n' +
        'My sin, my soul.\n' +
        '我的罪恶，我的灵魂\n' +
        '——情人节献礼',
      images: ['works/meigui-1.jpg']
    },

    /* ================= 绒花 · 行礼如仪 ================= */
    {
      id: 'xiaobaihua', cat: 'ronghua', group: 'xingli',
      stage: 'works/xiaobaihua-1-stage.jpg', cut: 'works/xiaobaihua-1-cut.webp',
      title: '祭时礼',
      glow: '#e8e4d8',
      summary:
        '冬雪长眠，死生契阔。',
      images: ['works/xiaobaihua-1.jpg']
    },
    {
      id: 'envelope', cat: 'ronghua', group: 'xingli',
      stage: 'works/envelope-1-stage.jpg', cut: 'works/envelope-1-cut.webp',
      series: '红喜事', title: '红山茶',
      tags: ['礼金信封', '洒箔赠礼'],
      glow: '#cf1d2f',
      facts: [
        ['配色', '银朱 & 朱樱，红色渐变'],
        ['花型', '内五外七，共十二瓣，一日相思十二时'],
        ['尺寸', '花瓣约 2cm，每片形态各异；花朵直径约 6cm，手工误差 1～2cm'],
        ['用法', '喜花可取下，佩在新娘或宾客身上']
      ],
      summary:
        '山茶的颜色即是绛色。\n' +
        '其色耀目，灼灼如火。\n' +
        '绒花谐音“荣华”，向来是好意头。\n' +
        '蚕丝本身光泽细腻，洒箔更添几分高贵和闪亮。\n' +
        '最好放在自然阳光或射灯下欣赏。\n' +
        '【特别提醒】\n' +
        '烧箔会自然氧化褪色，每次烧制呈现各样颜色变化，且需放置于干燥环境。若保存不便，尤其南方天气潮湿，不建议贴烧箔，会影响花朵光泽。从长期收藏的角度，洒金箔是佳选。',
      images: ['works/envelope-1.jpg']
    },
    {
      id: 'feihuang', cat: 'ronghua', group: 'xingli',
      stage: 'works/feihuang-1-stage.jpg', cut: 'works/feihuang-1-cut.webp',
      series: '红喜事', title: '飞凰引', subtitle: '洋金凤',
      tags: ['发钗', '耳环', '婚礼'],
      glow: '#e2552a', feature: true,
      summary:
        '叶若飞凰之羽，花若丹凤之冠。\n' +
        '朱红和橙黄的花瓣层层叠起，细长的花蕊四散开来，如同火焰舞者的裙摆。\n' +
        '【设计衍绎】\n' +
        '专为婚礼订制的金色发钗，可取花瓣制成配套耳环。',
      images: ['works/feihuang-1.jpg', 'works/feihuang-2.jpg', 'archive/lycoris.jpg'],
      credit: '第 4 张为收藏者实拍'
    },
    {
      id: 'jiuxiao', cat: 'ronghua', group: 'xingli',
      stage: 'works/jiuxiao-1-stage.jpg', cut: 'works/jiuxiao-1-cut.webp',
      series: '信物系列', title: '九霄', subtitle: '青金石凤翎',
      glow: '#2f4fe0',
      facts: [
        ['尾羽', '群青、冷白蚕丝线'],
        ['点缀', '阿富汗青金石、淡水珍珠'],
        ['尺寸', '双尾凤翎，2mm 左右细绒条；单尾羽长 7～11cm，宽 3cm左右。'],
        ['订制', '数量、长短、颜色、点缀、主体']
      ],
      summary:
        '细绒条天生高贵丝绒感，做成凤翎更是逼人了。\n' +
        '【设计衍绎】\n' +
        '原版为蓝白单翎，衍绎为红蓝双翎。可作为胸针送给新郎新娘。\n' +
        '至于其他尾羽颜色，深绿也还蛮贵气。\n' +
        '可以做一整个的凤凰。\n' +
        '信物系列用作珍藏和陈列，均视情况长期提供修复。\n' +
        '其中所用材料比如珍珠，难免会有自然变化。',
      images: ['works/jiuxiao-1.jpg']
    },
    {
      id: 'lieyan', cat: 'ronghua', group: 'xingli',
      stage: 'works/lieyan-1-stage.jpg', cut: 'works/lieyan-1-cut.webp',
      series: '红喜事', title: '烈焰', subtitle: '红丝绒',
      tags: ['美人欲醉', '艳陆离'],
      glow: '#d4202a',
      summary:
        '落花觉，稍深酌。\n' +
        '美人既醉，朱颜酡些。\n' +
        '目秋波，魂归兮。\n' +
        '【共创节选】\n' +
        '“看到新品了～果真好张扬～”\n' +
        '“细绒条可以模拟花蕊。”\n' +
        '“通过拧转绒条的排列，就如火焰一样了”',
      images: ['works/lieyan-1.jpg']
    },
    {
      id: 'chazhen', cat: 'ronghua', group: 'xingli',
      stage: 'works/chazhen-1-stage.jpg', frame: true,
      series: '宜室宜家', title: '竹枝一回眸', subtitle: '枝叶茶用',
      tags: ['竹作', '茶针', '茶拨'],
      glow: '#7fae4a',
      summary:
        '自然风干的竹枝，系上绿竹叶。\n' +
        '【设计衍绎】\n' +
        '除竹叶款外，还可以做杉/松/柏等。\n' +
        '做成胸针佩戴，显得雅致一些。',
      images: ['works/chazhen-1.jpg']
    },
    {
      id: 'fanxing', cat: 'ronghua', group: 'xingli',
      stage: 'works/fanxing-1-stage.jpg', cut: 'works/fanxing-1-cut.webp',
      series: '宜室宜家', title: '繁星', subtitle: '月牙梳',
      tags: ['发梳', '祖宗严选', '绒花仿点翠'],
      glow: '#3d6cf0',
      facts: [
        ['取料', '蓝色蚕丝线，淡水珍珠']
      ],
      summary:
        '本品灵感源于故宫博物院馆藏之点翠球梅纹头花。\n' +
        '“繁星”很神奇的地方在于：它拆成一小朵一小簇也好，或者铺得更多更密也罢，怎么倒腾都能有点印象。\n' +
        '#共创节选#\n' +
        '“这个能不能做成发夹？还想选个绿色的，有哪些可选呢？”\n' +
        '“看你喜欢什么绿，深绿浅绿翠绿嫩绿鲜绿”\n' +
        '“挑花眼了，这几个颜色我看都好看”',
      images: ['works/fanxing-1.jpg', 'archive/bluecomb.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'ziteng', cat: 'ronghua', group: 'xingli',
      stage: 'works/ziteng-1-stage.jpg', frame: true,
      series: '宜室宜家', title: '落梅妆', subtitle: '紫藤',
      tags: ['玄关造景', '藤蔓花簇'],
      glow: '#c97ab0',
      summary:
        '数串紫藤花垂落于蜿蜒的龙枣枝干。\n' +
        '玫红和黄色的撞色，做摆件艳丽得刚好。\n' +
        '若非是，逢深巷，满城紫无彩。\n' +
        '清欢别，山川羡，一日不见情如绵。',
      images: ['works/ziteng-1.jpg']
    },
    {
      id: 'aletai', cat: 'ronghua', group: 'xingli',
      stage: 'works/aletai-1-stage.jpg', cut: 'works/aletai-1-cut.webp',
      series: '宜室宜家', title: '阿勒泰的秋',
      glow: '#d9a03a',
      summary:
        '天地玄黄，宇宙洪荒。\n' +
        '日月盈昃，辰宿列张。\n' +
        '青黄相接，层林尽染。\n' +
        '风过簌簌，飘然而落。\n' +
        '雨打雷击，劈枝落叶。\n' +
        '穹苍莽默，寒来暑往。\n' +
        '生死偏倚，皆是寻常。',
      images: ['works/aletai-1.jpg']
    },

    /* ================= 织锦画 ================= */
    {
      id: 'mawen', cat: 'zhijin', group: 'zhijin',
      stage: 'works/mawen-2-stage.jpg', cut: 'works/mawen-2-cut.webp',
      title: '炫彩马纹',
      tags: ['马纹', '桑蚕丝', '框画'],
      glow: '#b0306a',
      facts: [
        ['画幅', '小画幅，内径 10～15cm'],
        ['款式', '单马 / 双马'],
        ['锦料', '出口高定品牌 6A 满百熟桑蚕丝织锦']
      ],
      summary:
        '取料、炫彩、密度、光泽、织法、艺术效果都很出色，近些年来的锦中神作。',
      images: ['works/mawen-1.jpg', 'works/mawen-2.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },
    {
      id: 'shuimu', cat: 'zhijin', group: 'zhijin',
      stage: 'works/shuimu-3-stage.jpg', cut: 'works/shuimu-3-cut.webp',
      title: '幽蓝水母',
      tags: ['水母', '茶纤维', '框画'],
      glow: '#3a6ad8',
      facts: [
        ['画幅', '中画幅，内径约 21cm'],
        ['颜色', '浅蓝 / 深蓝'],
        ['锦料', '织入茶纤维，自带香味']
      ],
      summary:
        '有浅蓝和深蓝两色。用了茶纤维，所以它自带香味。',
      images: ['works/shuimu-1.jpg', 'works/shuimu-2.jpg', 'works/shuimu-3.jpg', 'works/shuimu-4.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },
    {
      id: 'lushen', cat: 'zhijin', group: 'zhijin',
      stage: 'works/lushen-1-stage.jpg', cut: 'works/lushen-1-cut.webp',
      title: '林深见鹿',
      tags: ['鹿', '螺钿彩线', '框画'],
      glow: '#d9a640', feature: true,
      facts: [
        ['画幅', '大画幅，内径 30～45cm'],
        ['锦料', '桑蚕丝加织螺钿彩线']
      ],
      summary:
        '桑蚕丝加织螺钿彩线，白色背景墙效果拉满，很适合当挂画。',
      images: ['works/lushen-1.jpg', 'works/lushen-2.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },

    /* ================= 漆钿 ================= */
    {
      id: 'luodian', cat: 'qidian', group: 'luodian',
      stage: 'works/luodian-4-stage.jpg', cut: 'works/luodian-4-cut.webp',
      title: '月夜吹笛少女',
      tags: ['星河璀璨', '螺钿手绘', '黑色真丝'],
      glow: '#7fd8cf', feature: true,
      facts: [
        ['工艺', '螺钿 & 手绘'],
        ['取料', '天然贝壳片、黑色蚕丝线、特调高闪颜料'],
        ['底面', '手工抽丝缠覆黑色真丝画布'],
        ['尺寸', '内径 20×30cm，外框 30×40cm'],
        ['订制', '可来图订制，也可委托创作。']
      ],
      summary:
        '源于《大宅门写意 · 卢沟晓月》音乐合奏。\n' +
        '【设计衍绎】\n' +
        '底面有黑色真丝底布或黑丝绒布；可来图订制，也可委托创作；\n' +
        '报价综合考虑画幅尺寸、复杂度、工时、艺术效果等因素。',
      images: ['works/luodian-1.jpg', 'works/luodian-2.jpg', 'works/luodian-3.jpg', 'works/luodian-4.jpg',
               'works/luodian-5.jpg', 'works/luodian-6.jpg', 'works/luodian-7.jpg', 'works/luodian-8.jpg',
               'works/luodian-9.jpg'],
      source: 'https://www.goofish.com/item?id=1000519164604'
    }
  ]
};
