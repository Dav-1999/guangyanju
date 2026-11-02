/*
 * 光盐居 · 线上博物馆 —— 展品数据
 * ------------------------------------------------------------
 * 网站结构：主页（光盐居 · 万物璀璨）→ 作品节选 → 前奏曲（四大门类）
 * 更新内容只改这个文件：
 *   featured    作品节选，填作品 id，第一件在节选里占大图
 *   categories  四大门类，每个门类下分若干陈列（groups）
 *   works       全部作品，按门类、陈列的顺序排列，编号自动生成
 * 详见 README.md。
 */
window.MUSEUM = {
  // 闲鱼主页：所有咨询与交易都回到闲鱼内完成
  shop: 'https://www.goofish.com/personal?userId=2218677361208',

  // 主页轮播 · 四类作品精选（按顺序轮播，改 id 即可）
  hero: ['xiuqiu', 'ningye', 'lushen', 'luodian', 'dust'],

  // 次页 · 作品节选（作者还没定，先放这几件，改 id 即可）
  featured: ['dust', 'xiuqiu', 'junzhu', 'ningye', 'luodian', 'feihuang', 'lushen', 'fanxing', 'mao'],

  /*
   * 前奏曲 · 四大门类
   *   status  'open' 开放 / 'soon' 筹备中（只留栏目）
   *   cover   门类封面图
   *   about   门类页顶部的介绍，可多段（\n 分段）
   *   groups  门类下的陈列，作品用 group 字段归入
   */
  categories: [
    {
      id: 'ronghua', name: '绒花', en: 'Velvet Flowers', status: 'open',
      cover: 'works/xiuqiu-1-stage.jpg',
      intro: '蚕丝与铜丝，一瓣一瓣搓出来的花、蝶与小物。',
      about:
        '绒花在唐代以头饰闻名。光盐居想做的绒花，不只活在历史里，也不只属于女性：新鲜、价格合理，谁都可以戴。',
      groups: [
        { id: 'mengwu', name: '绒绒萌物', en: 'Little Ones' },
        { id: 'huanyu', name: '幻羽蝶变', en: 'Wings' },
        { id: 'fanhua', name: '繁花世界', en: 'Flowers' },
        { id: 'xingli', name: '行礼如仪', en: 'Rites' }
      ]
    },
    {
      id: 'zhijin', name: '织锦画', en: 'Brocade', status: 'open',
      cover: 'works/lushen-1-stage.jpg',
      intro: '挑出有意思的织纹，裱成框画。浮光跃金，绚烂瑰丽。',
      about:
        '织锦取桑蚕丝为主料，辅以其他特殊工艺。收集东方锦料样本的时候，会挑选其中比较有意思的织纹，一部分裱成框画留作参考。\n' +
        '它很适合懒得打理真丝服设、又想长久保存并触碰织锦之美的人，价格相对也更合宜。这类东西通常是国礼，送国际友人也合适；有些算得上绝版的面料和工艺，就比较适合传代了。\n' +
        '画框尺寸、画幅锦纹、风格款式都可以依需要订制。天上飞的、地上跑的、水里游的，可古典可现代、可油画可白描——简而言之，不会没有中意的。',
      groups: [{ id: 'zhijin', name: '织锦入画', en: 'Framed Brocade' }]
    },
    {
      id: 'ranfang', name: '草木染坊', en: 'Plant Dyeing', status: 'soon',
      intro: '栏目先留着，作品陆续入馆。',
      groups: []
    },
    {
      id: 'qidian', name: '漆 · 钿', en: 'Lacquer & Inlay', status: 'open',
      cover: 'works/luodian-1.jpg',
      intro: '贝壳的光，铺在黑色真丝上。',
      about:
        '螺钿工艺起源于新石器时期，是髹漆工艺体系中的一个支流。这个创作工艺还蛮有意思，表现空间也很大，螺钿画可用于家居设计、礼物往来、艺术观赏等等。\n' +
        '以黑色底布作画，螺钿流光溢彩，光影变幻。底面真丝发暗光，表面螺钿闪明光。',
      groups: [{ id: 'luodian', name: '螺钿画', en: 'Mother-of-pearl' }]
    }
  ],

  /*
   * 字段说明
   *   id        英文短名，用于链接（#/w/id），不要重复
   *   cat       所属门类 id；留空的作品只在主页和节选里出现（如若尘）
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
 *   stage     展台图（抠图后放在黑丝绒底上），有它时做封面、并排在图集第一张
   *   credit    图片来源说明（有展台图时，第 1 张是展台图，原图从第 2 张起）；source 闲鱼原帖链接
   */
  works: [
    /* ---------- 主页花冠：珠宝篇待定，只保留图片 ---------- */
    {
      id: 'dust', cat: '',
      series: '珠宝篇 · 待定', title: '若尘', subtitle: '传世花冠',
      glow: '#7fb7d9',
      images: ['works/dust-4.jpg', 'works/dust-5.jpg', 'works/dust-1.jpg', 'works/dust-7.jpg',
               'works/dust-2.jpg', 'works/dust-3.jpg', 'works/dust-6.jpg', 'works/dust-8.jpg', 'works/dust-9.jpg']
    },

    /* ================= 绒花 · 绒绒萌物 ================= */
    {
      id: 'mao', cat: 'ronghua', group: 'mengwu',
      stage: 'works/mao-1-stage.jpg',
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
      stage: 'works/caomei-1-stage.jpg',
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
      stage: 'works/cuifeng-1-stage.jpg',
      title: '绿带翠凤蝶',
      tags: ['蝴蝶', '框'],
      glow: '#3fae6a',
      summary: '翡翠绿的蝶翼，翅脉之间嵌进齿轮与表芯零件，收在暗纹黑框里。',
      images: ['works/cuifeng-1.jpg', 'archive/gearwing.jpg'],
      credit: '第 3 张为收藏者实拍'
    },
    {
      id: 'lanjixie', cat: 'ronghua', group: 'huanyu',
      stage: 'works/lanjixie-1-stage.jpg',
      title: '蓝机械蝶',
      tags: ['蝴蝶', '机械', '框'],
      glow: '#2fa3d8',
      summary: '一只湛蓝的蝶停在暗纹底板上，蝶身与四周缀着齿轮和机械零件，四角压着银色雕花。',
      images: ['works/lanjixie-1.jpg']
    },
    {
      id: 'haigu', cat: 'ronghua', group: 'huanyu',
      stage: 'works/frozen-1-stage.jpg',
      title: '黑色骸骨',
      tags: ['黑蝶', '绝对黑色', '凝聚态'],
      glow: '#9fb4c8',
      summary:
        '起点是一句对话：想要什么蝴蝶？冷冻的，做成黑色就行。\n' +
        '作者为它写了一份像异常生物档案的说明：光落到它身上就停住，整只蝶是纯粹的黑，四周浮着光子慢慢逃逸留下的雾影；它的温度永远升不上去，碰到什么就冻住什么，连光也不例外。\n' +
        '画框里，这只黑蝶停在一片揉皱的银箔上。',
      images: ['works/frozen-1.jpg']
    },
    {
      id: 'junzhu', cat: 'ronghua', group: 'huanyu',
      series: '博物系列', title: '君主斑蝶', subtitle: 'Answers on Her Way',
      tags: ['拟态造景', '双面蝶', '精微毒花', '夹竹桃'],
      glow: '#e0782c', feature: true,
      facts: [
        ['构成', '拟态造景 + 双面蝶 + 精微毒花'],
        ['题记', 'In storms folded, In silence gold.']
      ],
      summary:
        '设计对话的第一句就定下了主题：君主斑蝶与夹竹桃毒花之间的共生。\n' +
        '之后反复推敲的是灵感与意境：花要少做几朵，不必铺满；整体再缩到一半甚至三分之一；叶片要拉长，比例才对。\n' +
        '玻璃罩下，一只双面蝶停在红色毒花上。光从侧面照进来，蝶与花的影子一起落在墙上。',
      images: ['works/answers-1.jpg', 'works/answers-2.jpg']
    },
    {
      id: 'xueyi', cat: 'ronghua', group: 'huanyu',
      stage: 'works/butterfly-stage.jpg',
      title: '血漪蛱蝶',
      tags: ['蝴蝶', '框'],
      glow: '#c8202b',
      summary: '一只绯红的蛱蝶，收进白色画框里。',
      images: ['archive/butterfly.jpg'],
      credit: '原图为收藏者实拍'
    },
    {
      id: 'ruxue', cat: 'ronghua', group: 'huanyu',
      series: '血漪蛱蝶', title: '如血',
      tags: ['彼岸花', '发簪', '透明匣'],
      glow: '#b0182a',
      summary: '一簇血红的彼岸花，细长的蕊向四面散开，簪在一支白色发簪上。收藏时装进透明匣，外面系一段白纱。',
      images: ['works/ruxue-1.jpg', 'archive/redbloom.jpg'],
      credit: '第 2 张为收藏者实拍'
    },
    {
      id: 'qingting', cat: 'ronghua', group: 'huanyu',
      series: '血漪蛱蝶', title: '蓝蜻蜓',
      tags: ['青金石', '光盐居代表色', '胸针', '手书落款'],
      glow: '#2f4fe0',
      facts: [
        ['门类', '胸针'],
        ['色源', '阿富汗青金石'],
        ['定色', '比对多块原石与染色蚕丝后，定为深蓝'],
        ['附件', '手书落款']
      ],
      summary:
        '在光盐居看来，绒花不只是史书里的非遗，也不只属于女性。蓝蜻蜓就是为所有人做的绒花：新鲜，价格合理，谁都可以戴。\n' +
        '它的颜色取自阿富汗青金石。作者专门比对了一批蓝度不同的原石，在染色蚕丝里试过群青和天蓝，最后定下深蓝。这抹蓝后来又出现在繁星月牙梳、深幽蓝菊、如露睡荷里，成了光盐居的代表色。',
      images: ['works/qingting-1.jpg', 'archive/dragonfly-3.jpg', 'archive/dragonfly-6.jpg', 'archive/dragonfly-4.jpg',
               'archive/dragonfly-5.jpg', 'archive/dragonfly-1.jpg', 'archive/dragonfly-2.jpg'],
      credit: '第 2～7 张为收藏者实拍'
    },

    /* ================= 绒花 · 繁花世界 ================= */
    {
      id: 'rulu', cat: 'ronghua', group: 'fanhua',
      stage: 'works/rulu-1-stage.jpg',
      series: '信物系列', title: '如露', subtitle: '浅蓝睡荷',
      tags: ['睡荷', '珍珠', '光盐居代表色'],
      glow: '#2c59d8',
      summary: '给夜晚失眠的每一位。',
      images: ['works/rulu-1.jpg']
    },
    {
      id: 'lancang', cat: 'ronghua', group: 'fanhua',
      stage: 'works/lancang-1-stage.jpg',
      series: '信物系列', title: '蓝苍', subtitle: '深幽蓝菊',
      tags: ['陈列品', '珍藏', '赠礼'],
      glow: '#2a43c8',
      facts: [
        ['用途', '珍藏或赠礼'],
        ['售卖', '只给一位买家，所见即所得'],
        ['修复', '视情况长期提供']
      ],
      summary:
        '冷白、群青与纯黑。\n' +
        '深蓝花瓣一层层向外翻卷，花心簇着一团米白的蕊。这一朵只给一位买家，拿到手的就是照片里这一朵。',
      images: ['works/lancang-1.jpg'], focus: '45% 50%'
    },
    {
      id: 'ningye', cat: 'ronghua', group: 'fanhua',
      stage: 'works/ningye-1-stage.jpg',
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
      stage: 'works/yuanwei-1-stage.jpg',
      title: '斑斓鸢尾',
      tags: ['鸢尾', '油画色', '框'],
      glow: '#7a62d8',
      summary: '油画鸢尾花，打翻调色盘似的。',
      images: ['works/yuanwei-1.jpg']
    },
    {
      id: 'moli', cat: 'ronghua', group: 'fanhua',
      title: '在水一方', subtitle: '茉莉花',
      tags: ['茉莉', '花串', '耳坠', '七夕'],
      glow: '#dcd8c8',
      summary:
        '花串属乙巳年七月初七特别制作。\n' +
        '花坠为衍生设计，清白灵动的小耳坠。\n' +
        '#共创节选#\n' +
        '“也要我帮你系吗？”\n' +
        '“戴上真好看。”',
      images: ['works/moli-1.jpg']
    },
    {
      id: 'baihe', cat: 'ronghua', group: 'fanhua',
      stage: 'works/baihe-1-stage.jpg',
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
      title: '点绛唇', subtitle: '芙蓉',
      tags: ['芙蓉', '粉白渐变'],
      glow: '#e86a7a',
      summary: '蜀江水碧蜀山青，芙蓉如面柳如眉。',
      images: ['works/furong-1.jpg']
    },
    {
      id: 'xiuqiu', cat: 'ronghua', group: 'fanhua',
      stage: 'works/xiuqiu-1-stage.jpg',
      series: '博物系列', title: '仲夏夜之梦', subtitle: '九色绣球',
      tags: ['绣球', '九色渐变', '婚纱', '芭蕾'],
      glow: '#8fb8e8', feature: true,
      facts: [
        ['简介', '细绒条 + 对半打尖 + 花叶九色渐变'],
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
      series: '博物系列', title: '掐丝马兰花',
      tags: ['掐丝', '马兰花'],
      glow: '#7a6ad8',
      summary: '用掐丝工艺勾出马兰花：金色细线围住紫蓝花瓣，叶片由黄绿渐变到青绿。',
      images: ['works/malan-1.jpg']
    },
    {
      id: 'meigui', cat: 'ronghua', group: 'fanhua',
      title: '暗香玫瑰',
      tags: ['玫瑰', '框'],
      glow: '#9c1730',
      summary: '一朵暗红的丝绒玫瑰，收在雕花黑框里，四周散落几片花瓣。',
      images: ['works/meigui-1.jpg']
    },

    /* ================= 绒花 · 行礼如仪 ================= */
    {
      id: 'xiaobaihua', cat: 'ronghua', group: 'xingli',
      series: '祭时礼', title: '小白花',
      tags: ['白花', '祭奠'],
      glow: '#e8e4d8',
      summary: '冬雪长眠，死生契阔。',
      images: ['works/xiaobaihua-1.jpg']
    },
    {
      id: 'envelope', cat: 'ronghua', group: 'xingli',
      stage: 'works/envelope-1-stage.jpg',
      series: '红喜事', title: '烧箔信封', subtitle: '礼金信封',
      tags: ['荣华', '喜花', '婚礼', '礼金'],
      glow: '#cf1d2f', focus: '42% 50%',
      facts: [
        ['配色', '银朱 & 朱樱，红色渐变'],
        ['花型', '内五外七，共十二瓣'],
        ['尺寸', '花瓣约 2cm，每片形态各异；花朵直径约 6cm，手工误差 1～2cm'],
        ['用法', '花可取下，佩在新娘或宾客身上']
      ],
      summary:
        '绒花谐音“荣华”，向来寓意荣华如意、欣欣向荣。作者想让这层好意头回到今天的礼仪场合，于是把一朵喜花别在了礼金信封上。\n' +
        '最佳是放在自然阳光下，欣赏蚕丝和烧/金箔的光泽感。\n' +
        '【特别提醒】\n' +
        '烧箔存在自然氧化褪色，每次烧制呈现各样颜色变化，且需放置于干燥环境。\n' +
        '若保存不便，尤其南方天气潮湿，不建议贴烧箔，会影响花朵光泽。可以直接换铺金箔。\n' +
        '如果乐意亲自手工的话，店铺可随送烧/金箔纸。',
      images: ['works/envelope-1.jpg']
    },
    {
      id: 'feihuang', cat: 'ronghua', group: 'xingli',
      stage: 'works/feihuang-1-stage.jpg',
      series: '红喜事', title: '飞凰引', subtitle: '金凤钗',
      tags: ['彼岸花', '金钗', '婚礼'],
      glow: '#e2552a', feature: true,
      summary: '朱红与橙黄层层叠起，花蕊细长外放，簪在一柄金色发叉上。',
      images: ['works/feihuang-1.jpg', 'works/feihuang-2.jpg', 'archive/lycoris.jpg'],
      credit: '第 4 张为收藏者实拍'
    },
    {
      id: 'jiuxiao', cat: 'ronghua', group: 'xingli',
      stage: 'works/jiuxiao-1-stage.jpg',
      series: '红喜事 · 细绒条', title: '九霄凤翎', subtitle: '信物系列之九霄',
      tags: ['凤翎', '青金石', '淡水珍珠', '可订制'],
      glow: '#2f4fe0',
      facts: [
        ['尾羽', '群青、冷白蚕丝线'],
        ['点缀', '阿富汗青金石、淡水珍珠'],
        ['尺寸', '双尾凤翎，0.2mm 细绒条；单尾羽长 7～11cm，宽 3cm，羽杆可按需延伸'],
        ['订制', '量数、长短、颜色、点缀、主体']
      ],
      summary:
        '青金石和淡水珍珠，可以换成花啊朵啊串料啊之类的，其中，其他宝石（仅来料）/海水珍珠（可订）。不喜欢点缀也可以不要。\n' +
        '至于尾羽颜色，深绿还蛮贵气。\n' +
        '主体的话，看你想要啥。比如做书签？只要舍得就行。若是要个凤凰，可以商量商量。\n' +
        '信物系列以作珍藏和陈列，均视情况长期提供修复。其中所用材料比如珍珠，难免会有自然变化。',
      images: ['works/jiuxiao-1.jpg']
    },
    {
      id: 'lieyan', cat: 'ronghua', group: 'xingli',
      stage: 'works/lieyan-1-stage.jpg',
      series: '红喜事 · 细绒条', title: '烈焰红丝绒',
      tags: ['细绒条', '红花'],
      glow: '#d4202a',
      summary: '细绒条搓出的红花，瓣尖收得锐利，花心一簇金黄的蕊向外挑出。',
      images: ['works/lieyan-1.jpg']
    },
    {
      id: 'chazhen', cat: 'ronghua', group: 'xingli',
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
      credit: '第 2 张为收藏者实拍'
    },
    {
      id: 'zitieng', cat: 'ronghua', group: 'xingli',
      series: '宜室宜家', title: '落梅紫藤',
      tags: ['紫藤', '落梅'],
      glow: '#c97ab0',
      summary: '工作台上的落梅与紫藤，花枝垂挂在一排排丝线之间。',
      images: ['works/zitieng-1.jpg']
    },
    {
      id: 'aletai', cat: 'ronghua', group: 'xingli',
      stage: 'works/aletai-1-stage.jpg',
      series: '宜室宜家', title: '阿勒泰的秋',
      tags: ['秋叶', '渐变'],
      glow: '#d9a03a',
      facts: [['陈列', '位置待定']],
      summary: '一枝叶子从翠绿染到金黄、橙红，是秋天停在枝头的样子。',
      images: ['works/aletai-1.jpg']
    },

    /* ================= 织锦画 ================= */
    {
      id: 'mawen', cat: 'zhijin', group: 'zhijin',
      title: '炫彩马纹', subtitle: '小画幅',
      tags: ['马纹', '桑蚕丝', '框画'],
      glow: '#b0306a',
      facts: [
        ['画幅', '内径 10～15cm'],
        ['款式', '单马 / 双马'],
        ['锦料', '出口高定品牌 6A 满百熟桑蚕丝织锦']
      ],
      summary: '取料、炫彩、密度、光泽、织法、艺术效果都很出色，近些年来的锦中神作。',
      images: ['works/mawen-1.jpg', 'works/mawen-2.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },
    {
      id: 'shuimu', cat: 'zhijin', group: 'zhijin',
      title: '幽蓝水母', subtitle: '中画幅',
      tags: ['水母', '茶纤维', '框画'],
      glow: '#3a6ad8',
      facts: [
        ['画幅', '内径约 21cm'],
        ['颜色', '浅蓝 / 深蓝'],
        ['锦料', '织入茶纤维，自带香味']
      ],
      summary: '有浅蓝和深蓝两色。用了茶纤维，所以它自带香味。',
      images: ['works/shuimu-1.jpg', 'works/shuimu-2.jpg', 'works/shuimu-3.jpg', 'works/shuimu-4.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },
    {
      id: 'lushen', cat: 'zhijin', group: 'zhijin',
      stage: 'works/lushen-1-stage.jpg',
      title: '林深见鹿', subtitle: '大画幅',
      tags: ['鹿', '螺钿彩线', '挂画'],
      glow: '#d9a640', feature: true,
      facts: [
        ['画幅', '内径 30～45cm'],
        ['锦料', '桑蚕丝加织螺钿彩线']
      ],
      summary: '桑蚕丝加织螺钿彩线，白色背景墙效果拉满，很适合当挂画。',
      images: ['works/lushen-1.jpg', 'works/lushen-2.jpg'],
      source: 'https://www.goofish.com/item?id=1031706854752'
    },

    /* ================= 漆 · 钿 ================= */
    {
      id: 'luodian', cat: 'qidian', group: 'luodian',
      series: '螺钿画', title: '月夜吹笛少女',
      tags: ['星河璀璨', '螺钿手绘', '黑色真丝'],
      glow: '#7fd8cf', feature: true,
      facts: [
        ['工艺', '螺钿 & 手绘'],
        ['取料', '天然贝壳片、黑色蚕丝线、特调高闪颜料'],
        ['底面', '手工抽蚕缠覆黑色真丝画布'],
        ['尺寸', '内径 20×30cm，外框 30×40cm'],
        ['订制', '可来图订制，也可委托创作；一客一订，一幅一价，工期一月起']
      ],
      summary:
        '样品图为客订，源于《大宅门写意 · 卢沟晓月》音乐合奏，仅做观赏打样。\n' +
        '螺钿画很美很梦幻，实物效果是胜于拍摄的，比虚化聚焦那个闪度低一些。\n' +
        '【订制须知】\n' +
        '底面可以更换，除黑色真丝底布外，有黑丝绒布可以选择。黑色真丝自带高级光泽感，加上纯手工抽丝缠覆，价格相对会高一些。\n' +
        '画面内容可接来图订制，当然也可委托店铺创作。报价综合考虑画幅尺寸、复杂度、工时、艺术效果等因素，几百上千不等。',
      images: ['works/luodian-1.jpg', 'works/luodian-2.jpg', 'works/luodian-3.jpg', 'works/luodian-4.jpg',
               'works/luodian-5.jpg', 'works/luodian-6.jpg', 'works/luodian-7.jpg', 'works/luodian-8.jpg', 'works/luodian-9.jpg'],
      source: 'https://www.goofish.com/item?id=1000519164604'
    }
  ]
};
