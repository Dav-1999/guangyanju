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
  // 闲鱼主页：所有咨询与交易都回到闲鱼内完成
  shop: 'https://www.goofish.com/personal?userId=2218677361208',

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
    /* ---------- 珠宝篇（待定）：只保留若尘花冠的图片 ---------- */
    {
      id: 'dust', cat: '',
      stage: 'works/dust-4-stage.jpg', cut: 'works/dust-4-cut.webp',
      series: '珠宝篇', title: '若尘', subtitle: '传世花冠',
      glow: '#7fb7d9',
      images: ['works/dust-4.jpg', 'works/dust-5.jpg', 'works/dust-1.jpg', 'works/dust-7.jpg',
               'works/dust-2.jpg', 'works/dust-3.jpg', 'works/dust-6.jpg', 'works/dust-8.jpg', 'works/dust-9.jpg']
    },

    /* ================= 绒花 · 绒绒萌物 ================= */
    {
      id: 'mao', cat: 'ronghua', group: 'mengwu',
      stage: 'works/mao-1-stage.jpg', cut: 'works/mao-1-cut.webp',
      title: '一抹红妆', subtitle: '红梅猫咪',
      tags: ['红梅', '猫咪', '冰箱贴', '新年礼物'],
      glow: '#d0152b',
      summary:
        '红梅可改为烟花或鞭炮。咿呀咿呀的小猫咪，兴许可以来图做你自己家里的。\n' +
        '【碎碎念】\n' +
        '本品原设计主体为小提篮，但是运送提篮的话战损可能很严重，极易压扁小猫猫和梅花，遂改为冰箱贴。\n' +
        '礼物版原设计中圣诞礼物有冬青果、圣诞树和东巴纸信封，万圣礼物有小南瓜和幽灵喔。\n' +
        '最终选了此版本作为2024年新年礼物，感兴趣的话可以联系店铺问问哈。',
      images: ['works/mao-1.jpg', 'archive/plum-1.jpg', 'archive/plum-2.jpg'],
      credit: '第 3、4 张为收藏者实拍'
    },
    {
      id: 'caomei', cat: 'ronghua', group: 'mengwu',
      stage: 'works/caomei-1-stage.jpg', cut: 'works/caomei-1-cut.webp',
      title: '甜心莓莓', subtitle: '粉绿草莓',
      tags: ['草莓', '发卡', '盆栽', '水果合集'],
      glow: '#e8708a',
      summary:
        '很娇嫩温柔又特别少女心的一款。给小孩子可以做成发卡或者盆栽，要是怕ta两三天折腾坏了，还是给弄个玻璃罩放上吧。\n' +
        '草莓可以做红色和青绿色的，就是现实里熟透和青涩的样子。表面可以点缀上mini的小珍珠，做个暗黑版的黑心莓莓也不错。\n' +
        '这个技法可以出个水果合集，如柠檬、石榴、桃子等等。',
      images: ['works/caomei-1.jpg']
    },
    {
      id: 'niao', cat: 'ronghua', group: 'mengwu',
      stage: 'works/niao-1-stage.jpg', cut: 'works/niao-1-cut.webp',
      title: '点枝渴', subtitle: '生丝小鸟',
      tags: ['生丝', '小鸟', '枝头树果'],
      glow: '#e2803a',
      summary:
        '生丝小鸟，枝头树果。\n' +
        '如果撒上雪花的话，就有秋末初冬的画面了。\n' +
        '可以做成生丝柿子、葡萄等等。细节根据需要再处理，比如车载挂件、瓶插、画……（摄影实在看着笨笨呆呆傻不拉叽的，其实很俏很灵）',
      images: ['works/niao-1.jpg']
    },

    /* ================= 绒花 · 幻羽蝶变 ================= */
    {
      id: 'cuifeng', cat: 'ronghua', group: 'huanyu',
      stage: 'works/cuifeng-1-stage.jpg', cut: 'works/cuifeng-1-cut.webp',
      title: '绿带翠凤蝶',
      tags: ['蝴蝶', '框画'],
      glow: '#3fae6a',
      summary: '翠绿的蝶翼边缘缀着齿轮和表芯零件，底板压着暗纹，装在黑框里。',
      images: ['works/cuifeng-1.jpg', 'archive/gearwing.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'lanjixie', cat: 'ronghua', group: 'huanyu',
      stage: 'works/lanjixie-1-stage.jpg', cut: 'works/lanjixie-1-cut.webp',
      title: '蓝机械蝶',
      tags: ['蝴蝶', '机械', '框画'],
      glow: '#2fa3d8',
      summary: '湛蓝的蝶停在暗纹底板上，身旁散着齿轮和表芯零件，四角压着银色雕花。',
      images: ['works/lanjixie-1.jpg']
    },
    {
      id: 'haigu', cat: 'ronghua', group: 'huanyu',
      stage: 'works/frozen-1-stage.jpg', cut: 'works/frozen-1-cut.webp',
      title: '黑色骸骨',
      tags: ['黑蝶', '绝对黑色', '凝聚态'],
      glow: '#9fb4c8',
      summary:
        '起点是一句对话。问想要什么蝴蝶，答：“冷冻的，做成黑色就行。”\n' +
        '光盐居给它写过一份异常生物档案式的设定：落在身上的光会被留住，通体纯黑，四周浮着光子逃逸后的雾影；体温永远升不上去，碰到什么就冻住什么。\n' +
        '画框里，这只黑蝶停在一片揉皱的银箔上。',
      images: ['works/frozen-1.jpg']
    },
    {
      id: 'junzhu', cat: 'ronghua', group: 'huanyu',
      stage: 'works/answers-1-stage.jpg', frame: true,
      series: '博物系列', title: '君主斑蝶', subtitle: 'Answers on Her Way',
      tags: ['拟态造景', '双面蝶', '精微毒花', '夹竹桃'],
      glow: '#e0782c', feature: true,
      facts: [
        ['构成', '拟态造景 + 双面蝶 + 精微毒花'],
        ['题记', 'In storms folded, in silence gold.']
      ],
      summary:
        '设计时第一句话就定了主题：君主斑蝶停在夹竹桃上。\n' +
        '之后反复改的是比例：花少做几朵，不必铺满；整体缩到一半甚至三分之一；叶片拉长。\n' +
        '玻璃罩下，一只双面蝶停在红色毒花上。侧光照进来，蝶和花的影子一起落在墙上。',
      images: ['works/answers-1.jpg', 'works/answers-2.jpg']
    },
    {
      id: 'xueyi', cat: 'ronghua', group: 'huanyu',
      stage: 'works/butterfly-stage.jpg', cut: 'works/butterfly-cut.webp',
      title: '血漪蛱蝶',
      tags: ['蝴蝶', '框画'],
      glow: '#c8202b',
      summary: '一只绯红的蛱蝶，收进白色画框里。',
      images: ['archive/butterfly.jpg'],
      credit: '第 2 张为收藏者实拍'
    },
    {
      id: 'ruxue', cat: 'ronghua', group: 'huanyu',
      stage: 'works/ruxue-1-stage.jpg', cut: 'works/ruxue-1-cut.webp',
      title: '如血',
      tags: ['彼岸花', '发簪', '透明匣'],
      glow: '#b0182a',
      summary: '一簇血红的彼岸花，细长的蕊向四面散开，花下是一支白色发簪。收藏时装进透明匣，外面系一段白纱。',
      images: ['works/ruxue-1.jpg', 'archive/redbloom.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'qingting', cat: 'ronghua', group: 'huanyu',
      stage: 'works/qingting-1-stage.jpg', cut: 'works/qingting-1-cut.webp',
      title: '蓝蜻蜓',
      tags: ['青金石', '光盐居代表色', '胸针', '手书落款'],
      glow: '#2f4fe0',
      facts: [
        ['形制', '胸针'],
        ['色源', '阿富汗青金石'],
        ['附件', '手书落款']
      ],
      summary:
        '蓝蜻蜓是一枚胸针，男女都能戴。\n' +
        '颜色取自阿富汗青金石。光盐居比对了一批蓝度不同的原石，在染色蚕丝里试过群青和天蓝，最后定了深蓝。后来的繁星月牙梳、蓝苍、如露都用了这抹蓝，它也成了光盐居的代表色。',
      images: ['works/qingting-1.jpg', 'archive/dragonfly-3.jpg', 'archive/dragonfly-6.jpg', 'archive/dragonfly-4.jpg',
               'archive/dragonfly-5.jpg', 'archive/dragonfly-1.jpg', 'archive/dragonfly-2.jpg'],
      credit: '第 3～8 张为收藏者实拍'
    },

    /* ================= 绒花 · 繁花世界 ================= */
    {
      id: 'rulu', cat: 'ronghua', group: 'fanhua',
      stage: 'works/rulu-1-stage.jpg', cut: 'works/rulu-1-cut.webp',
      series: '信物系列', title: '如露', subtitle: '浅蓝睡荷',
      tags: ['睡荷', '珍珠', '光盐居代表色'],
      glow: '#2c59d8',
      summary: '给夜晚失眠的每一位。',
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
        '冷白、群青与纯黑。\n' +
        '深蓝花瓣一层层向外翻卷，花心是一簇白蕊。',
      images: ['works/lancang-1.jpg']
    },
    {
      id: 'ningye', cat: 'ronghua', group: 'fanhua',
      stage: 'works/ningye-1-stage.jpg', cut: 'works/ningye-1-cut.webp',
      series: '信物系列', title: '凝夜', subtitle: '深紫蝴蝶兰',
      tags: ['蝴蝶兰', '银紫', '深夜观赏'],
      glow: '#7a4fd0',
      summary:
        '暗夜处冷光，穿花黑影，凝夜紫。\n' +
        '比日光下更绝的银紫，推荐观赏时间深夜。争论说暖光更具生命力？\n' +
        '颜色任选任变，怎么做怎么高贵，其实油画混色也很搭。\n' +
        '花串缀满枝头是另一种效果。',
      images: ['works/ningye-1.jpg']
    },
    {
      id: 'yuanwei', cat: 'ronghua', group: 'fanhua',
      stage: 'works/yuanwei-1-stage.jpg', cut: 'works/yuanwei-1-cut.webp',
      title: '斑斓鸢尾',
      tags: ['鸢尾', '油画色', '框画'],
      glow: '#7a62d8',
      summary: '油画鸢尾花，打翻调色盘似的。',
      images: ['works/yuanwei-1.jpg']
    },
    {
      id: 'moli', cat: 'ronghua', group: 'fanhua',
      stage: 'works/moli-1-stage.jpg', frame: true,
      title: '在水一方', subtitle: '茉莉花',
      tags: ['茉莉', '花串', '耳坠', '七夕'],
      glow: '#dcd8c8',
      summary:
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
      tags: ['百合', '浅色蚕丝', '捧花'],
      glow: '#e07aa0',
      summary:
        '浅色蚕丝，有光晃影。\n' +
        '创作空间很大的百合，可以做成各种变幻模样。这个粉碧色拿去搭白纱或捧花等等。嘎嘎美。',
      images: ['works/baihe-1.jpg']
    },
    {
      id: 'furong', cat: 'ronghua', group: 'fanhua',
      stage: 'works/furong-1-stage.jpg', cut: 'works/furong-1-cut.webp',
      title: '点绛唇', subtitle: '芙蓉',
      tags: ['芙蓉', '粉白渐变'],
      glow: '#e86a7a',
      summary: '蜀江水碧蜀山青，芙蓉如面柳如眉。',
      images: ['works/furong-1.jpg']
    },
    {
      id: 'xiuqiu', cat: 'ronghua', group: 'fanhua',
      stage: 'works/xiuqiu-1-stage.jpg', cut: 'works/xiuqiu-1-cut.webp',
      series: '博物系列', title: '仲夏夜之梦', subtitle: '九色绣球',
      tags: ['绣球', '九色渐变', '婚纱', '芭蕾'],
      glow: '#8fb8e8', feature: true,
      facts: [
        ['工艺', '细绒条 + 对半打尖 + 花叶九色渐变'],
        ['用料', '上千丝蚕丝，百来根绒条']
      ],
      summary:
        '仙泉般的颜色，毛绒绒的触感。\n' +
        '白色婚纱和芭蕾舞裙，与仲夏夜之梦堪称绝配。\n' +
        '春风拥一吻，授命不得唇。\n' +
        '美人如花隔云端。',
      images: ['works/xiuqiu-1.jpg', 'works/xiuqiu-2.jpg']
    },
    {
      id: 'malan', cat: 'ronghua', group: 'fanhua',
      stage: 'works/malan-1-stage.jpg', cut: 'works/malan-1-cut.webp',
      series: '博物系列', title: '掐丝马兰花',
      tags: ['掐丝', '马兰花'],
      glow: '#7a6ad8',
      summary: '用掐丝工艺勾出马兰花：金色细线围住紫蓝花瓣，叶片由黄绿渐变到青绿。',
      images: ['works/malan-1.jpg']
    },
    {
      id: 'meigui', cat: 'ronghua', group: 'fanhua',
      stage: 'works/meigui-1-stage.jpg', cut: 'works/meigui-1-cut.webp',
      title: '暗香玫瑰',
      tags: ['玫瑰', '框画'],
      glow: '#9c1730',
      summary: '一朵暗红玫瑰，缀在雕花黑框的一角，桌上散着几片花瓣。',
      images: ['works/meigui-1.jpg']
    },

    /* ================= 绒花 · 行礼如仪 ================= */
    {
      id: 'xiaobaihua', cat: 'ronghua', group: 'xingli',
      stage: 'works/xiaobaihua-1-stage.jpg', cut: 'works/xiaobaihua-1-cut.webp',
      series: '祭时礼', title: '小白花',
      tags: ['白花', '祭奠'],
      glow: '#e8e4d8',
      summary: '冬雪长眠，死生契阔。',
      images: ['works/xiaobaihua-1.jpg']
    },
    {
      id: 'envelope', cat: 'ronghua', group: 'xingli',
      stage: 'works/envelope-1-stage.jpg', cut: 'works/envelope-1-cut.webp',
      series: '红喜事', title: '烧箔信封', subtitle: '礼金信封',
      tags: ['荣华', '喜花', '婚礼', '礼金'],
      glow: '#cf1d2f',
      facts: [
        ['配色', '银朱 & 朱樱，红色渐变'],
        ['花型', '内五外七，共十二瓣'],
        ['尺寸', '花瓣约 2cm，每片形态各异；花朵直径约 6cm，手工误差 1～2cm'],
        ['用法', '花可取下，佩在新娘或宾客身上']
      ],
      summary:
        '绒花谐音“荣华”，向来是好意头。光盐居把一朵喜花别在了礼金信封上。\n' +
        '最好放在自然阳光下，欣赏蚕丝和烧/金箔的光泽感。\n' +
        '【特别提醒】\n' +
        '烧箔会自然氧化褪色，每次烧制呈现各样颜色变化，且需放置于干燥环境。\n' +
        '若保存不便，尤其南方天气潮湿，不建议贴烧箔，会影响花朵光泽。可以直接换铺金箔。\n' +
        '如果乐意亲手做的话，店铺可随送烧/金箔纸。',
      images: ['works/envelope-1.jpg']
    },
    {
      id: 'feihuang', cat: 'ronghua', group: 'xingli',
      stage: 'works/feihuang-1-stage.jpg', cut: 'works/feihuang-1-cut.webp',
      series: '红喜事', title: '飞凰引', subtitle: '金凤钗',
      tags: ['彼岸花', '金钗', '婚礼'],
      glow: '#e2552a', feature: true,
      summary: '朱红和橙黄的花瓣层层叠起，细长的花蕊向外伸，底下是一支金色发钗。',
      images: ['works/feihuang-1.jpg', 'works/feihuang-2.jpg', 'archive/lycoris.jpg'],
      credit: '第 4 张为收藏者实拍'
    },
    {
      id: 'jiuxiao', cat: 'ronghua', group: 'xingli',
      stage: 'works/jiuxiao-1-stage.jpg', cut: 'works/jiuxiao-1-cut.webp',
      series: '红喜事 · 细绒条', title: '九霄凤翎', subtitle: '信物系列之九霄',
      tags: ['凤翎', '青金石', '淡水珍珠', '可订制'],
      glow: '#2f4fe0',
      facts: [
        ['尾羽', '群青、冷白蚕丝线'],
        ['点缀', '阿富汗青金石、淡水珍珠'],
        ['尺寸', '双尾凤翎，0.2mm 细绒条；单尾羽长 7～11cm，宽 3cm，羽杆可按需延伸'],
        ['订制', '数量、长短、颜色、点缀、主体']
      ],
      summary:
        '青金石和淡水珍珠，可以换成花啊朵啊串料啊之类的，其中其他宝石仅限来料，海水珍珠可订。不喜欢点缀也可以不要。\n' +
        '至于尾羽颜色，深绿还蛮贵气。\n' +
        '主体的话，看你想要啥。比如做书签？只要舍得就行。若是要个凤凰，可以商量商量。\n' +
        '信物系列用作珍藏和陈列，均视情况长期提供修复。其中所用材料比如珍珠，难免会有自然变化。',
      images: ['works/jiuxiao-1.jpg']
    },
    {
      id: 'lieyan', cat: 'ronghua', group: 'xingli',
      stage: 'works/lieyan-1-stage.jpg', cut: 'works/lieyan-1-cut.webp',
      series: '红喜事 · 细绒条', title: '烈焰红丝绒',
      tags: ['细绒条', '红花'],
      glow: '#d4202a',
      summary: '细绒条搓出的红花，瓣尖收得锐利，花心一簇金黄的蕊向外挑出。',
      images: ['works/lieyan-1.jpg']
    },
    {
      id: 'chazhen', cat: 'ronghua', group: 'xingli',
      stage: 'works/chazhen-1-stage.jpg', frame: true,
      series: '宜室宜家', title: '枝叶茶用', subtitle: '竹枝一回眸',
      tags: ['竹作', '茶针', '茶拨'],
      glow: '#7fae4a',
      facts: [
        ['品名', '竹枝一回眸'],
        ['技艺', '竹作 & 绒花'],
        ['配色', '各种绿'],
        ['茶用', '茶针 & 茶拨']
      ],
      summary:
        '【备注】\n' +
        '1. 颜色可铺为纯色，叶片形态可更纤细。\n' +
        '2. 除竹叶款外，设计中有杉/松/柏等图样。\n' +
        '3. 样品图中竹枝为自然风干态，新竹枝带青，另有碳化色偏黑。\n' +
        '4. 随竹枝颜色，花叶枝干有系法，样品没绑丝线。\n' +
        '5. 样品图为茶针/茶拨两用型，可单独做一种。',
      images: ['works/chazhen-1.jpg']
    },
    {
      id: 'fanxing', cat: 'ronghua', group: 'xingli',
      stage: 'works/fanxing-1-stage.jpg', cut: 'works/fanxing-1-cut.webp',
      series: '宜室宜家', title: '繁星月牙梳',
      tags: ['发梳', '淡水珍珠', '光盐居代表色'],
      glow: '#3d6cf0',
      facts: [
        ['品名', '繁星'],
        ['取料', '蓝色蚕丝线，淡水珍珠'],
        ['色彩', '蓝蜻蜓定下的深蓝']
      ],
      summary:
        '本品灵感源于故宫博物院藏之点翠球梅纹头花，玻璃折射打光，祖宗严选。\n' +
        '“繁星”很神奇的地方在于：它拆成一小朵一小簇也好，或者铺得更多更密也罢，怎么倒腾都能有点印象。\n' +
        '梳子可以更换为木梳，也可以改为其他主体，或者也可以直接做成插花。（样品图里的梳子不是银料，具体什么材质没测过。仅是表面带闪银色，中意它的好看又耐用而已。）\n' +
        '可改色改形。更接近点翠颜色的蚕丝线，倒也不是没有。另外这个花挺像勿忘我的。',
      images: ['works/fanxing-1.jpg', 'archive/bluecomb.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'ziteng', cat: 'ronghua', group: 'xingli',
      stage: 'works/ziteng-1-stage.jpg', frame: true,
      series: '宜室宜家', title: '落梅紫藤',
      tags: ['紫藤', '落梅'],
      glow: '#c97ab0',
      summary: '落梅和紫藤垂在枝上。这张拍在工作台边，后面是一排排丝线。',
      images: ['works/ziteng-1.jpg']
    },
    {
      id: 'aletai', cat: 'ronghua', group: 'xingli',
      stage: 'works/aletai-1-stage.jpg', cut: 'works/aletai-1-cut.webp',
      series: '宜室宜家', title: '阿勒泰的秋',
      tags: ['秋叶', '渐变'],
      glow: '#d9a03a',
      summary: '一枝叶子，从翠绿渐变到金黄、橙红。',
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
      summary: '取料、炫彩、密度、光泽、织法、艺术效果都很出色，近些年来的锦中神作。',
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
      summary: '有浅蓝和深蓝两色。用了茶纤维，所以它自带香味。',
      images: ['works/shuimu-1.jpg', 'works/shuimu-2.jpg', 'works/shuimu-3.jpg', 'works/shuimu-4.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },
    {
      id: 'lushen', cat: 'zhijin', group: 'zhijin',
      stage: 'works/lushen-1-stage.jpg', cut: 'works/lushen-1-cut.webp',
      title: '林深见鹿',
      tags: ['鹿', '螺钿彩线', '挂画'],
      glow: '#d9a640', feature: true,
      facts: [
        ['画幅', '大画幅，内径 30～45cm'],
        ['锦料', '桑蚕丝加织螺钿彩线']
      ],
      summary: '桑蚕丝加织螺钿彩线，白色背景墙效果拉满，很适合当挂画。',
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
        ['订制', '可来图订制，也可委托创作；一客一订，一幅一价，工期一月起']
      ],
      summary:
        '样品图为客订，源于《大宅门写意 · 卢沟晓月》音乐合奏，仅做观赏打样。\n' +
        '螺钿画很美很梦幻，实物效果胜于拍摄，不过比虚化聚焦那张闪度低一些。\n' +
        '【订制须知】\n' +
        '底面可以更换，除黑色真丝底布外，有黑丝绒布可以选择。黑色真丝自带高级光泽感，加上纯手工抽丝缠覆，价格相对会高一些。\n' +
        '画面内容可接来图订制，当然也可委托店铺创作。报价综合考虑画幅尺寸、复杂度、工时、艺术效果等因素，几百上千不等。',
      images: ['works/luodian-1.jpg', 'works/luodian-2.jpg', 'works/luodian-3.jpg', 'works/luodian-4.jpg',
               'works/luodian-5.jpg', 'works/luodian-6.jpg', 'works/luodian-7.jpg', 'works/luodian-8.jpg', 'works/luodian-9.jpg'],
      source: 'https://www.goofish.com/item?id=1000519164604'
    }
  ]
};
