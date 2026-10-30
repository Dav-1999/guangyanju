/*
 * 光盐居 · 线上博物馆 —— 展品数据
 * ------------------------------------------------------------
 * 新增一件作品：复制下方任意一个 { ... } 块，改字段，保存即可。
 * 图片放到 assets/works/（或 assets/archive/），在 images 里按顺序列出，
 * 第一张就是展墙上的封面。详见 README.md。
 */
window.MUSEUM = {
  // 闲鱼主页：所有咨询与交易都回到闲鱼内完成
  shop: 'https://www.goofish.com/personal?userId=2218677361208',

  // 展厅（筛选标签）。status: 'open' 开放 / 'soon' 筹备中
  halls: [
    { id: 'jewel',   name: '珠宝篇', en: 'Jewellery',  status: 'open',
      intro: '典礼、花冠、蓝戒与鸢尾。光盐居的珠宝篇从一则预告开场。' },
    { id: 'ronghua', name: '绒花篇', en: 'Velvet Flowers', status: 'open',
      intro: '绒花在唐代以头饰闻名。光盐居想做的绒花，不只活在历史里，也不只属于女性：新鲜、价格合理，谁都可以戴。' },
    { id: 'bowu',    name: '博物篇', en: 'Natural History', status: 'open',
      intro: '蝴蝶、毒花与想象中的生物。拟态造景，按标本的方式陈列。' },
    { id: 'luodian', name: '螺钿篇', en: 'Mother-of-pearl', status: 'open',
      intro: '螺钿起于新石器时代，是髹漆工艺的一支。贝壳的光铺在黑色真丝上，接受来图订制。' },
    { id: 'zhijin',  name: '织锦',   en: 'Brocade',    status: 'soon' },
    { id: 'ranyi',   name: '染衣',   en: 'Dyed Garments', status: 'soon' }
  ],

  /*
   * 字段说明
   *   id       英文短名，用于链接（#/w/id），不要重复
   *   hall     所属展厅 id
   *   series   系列前缀（闲鱼标题里 || 前面的部分）
   *   title    作品名
   *   tags     关键词
   *   glow     这件作品的“光色”，展墙悬停与详情页会用到
   *   feature  true 时在展墙上占双倍大小（可选）
 *   focus    展墙封面裁切的重心，如 '25% 50%'（左右 上下），横图主体不在中间时用（可选）
   *   facts    展签上的条目 [名称, 内容]
   *   summary  策展说明
   *   note     作者手记（原文）。留空则不显示，作者可直接把原文贴进来
   *   images   图片路径（相对 assets/）
   *   credit   图片来源说明（可选）
   *   source   闲鱼原帖链接（可选）
   */
  works: [
    /* ---------- 珠宝篇 ---------- */
    {
      id: 'overture', hall: 'jewel',
      series: '序曲', title: '珠宝预告',
      tags: ['爱与权力', '珠宝篇', '盛宴', '序'],
      glow: '#e2b13f',
      facts: [['主题', '爱与权力 · 盛宴'], ['性质', '珠宝篇开篇预告']],
      summary:
        '珠宝篇的开场白。作者把典礼视作人间最隆重的设计，珠宝与盛宴同源，在其中自然现身，无需解说，只待定格。\n' +
        '白色展台上，一只振翅的鸟垂下一滴金黄，算是幕布拉开前的第一束光。',
      note: '',
      images: ['works/overture-1.jpg'],
      source: 'https://www.goofish.com/item?id=1073742287297'
    },
    {
      id: 'dust', hall: 'jewel',
      series: '光盐居', title: '若尘',
      tags: ['珠宝篇', '碎钻满天星', '传世花冠', '仙境'],
      glow: '#7fb7d9', feature: true,
      facts: [
        ['材质', '蚕丝 · 碎钻'],
        ['佩戴', '侧翼插戴 / 合为环形冠冕'],
        ['状态', '样品作为礼器归档'],
        ['复刻', '按个人尺寸订制，工期半年起'],
        ['版权', '自用与二创不设限']
      ],
      summary:
        '万缕蚕丝染出数十种渐变，花围密缀碎钻，野花与繁星落在同一顶冠上。\n' +
        '作者挂出它，只为说明世上确有此冠；若有人想收藏，也算留了一条路：赠予心上人，传给下一代，或者自己戴。\n' +
        '但它从来不是商品，也证明不了感情。它只供欣赏，也供借鉴。',
      note: '',
      images: ['works/dust-4.jpg', 'works/dust-5.jpg', 'works/dust-1.jpg', 'works/dust-7.jpg',
               'works/dust-2.jpg', 'works/dust-3.jpg', 'works/dust-6.jpg', 'works/dust-8.jpg', 'works/dust-9.jpg'],
      source: 'https://www.goofish.com/item?id=1082003397527'
    },
    {
      id: 'abyss', hall: 'jewel',
      series: '好物分享', title: '深蓝渊薮',
      tags: ['将军百战', '寒光凛', '蓝戒'],
      glow: '#3550d8',
      facts: [['门类', '蓝戒'], ['意象', '剑与甲 · 百战']],
      summary:
        '一枚蓝戒，借的是沙场意象：剑与甲，都为所敬之人备下。\n' +
        '深蓝主石沉如渊薮，周身碎光冷若寒霜。百战之后，只求对方开怀一笑，余下的都不必计较。',
      note: '',
      images: ['works/abyss-4.jpg', 'works/abyss-1.jpg', 'works/abyss-2.jpg', 'works/abyss-3.jpg', 'works/abyss-5.jpg'],
      source: 'https://www.goofish.com/item?id=1093415338713'
    },
    {
      id: 'iris', hall: 'jewel',
      series: '好物分享', title: '鸢尾来信',
      tags: ['自然生命', 'Drawing From Nature', '鸢尾'],
      glow: '#d63c86',
      facts: [['主题', '自然生命'], ['意义', '线上博物馆的第一朵花']],
      summary:
        '这封信写的是光盐居的底色。故宫的绒花、古希腊的桂冠、三星堆的神树，在作者眼里都是珠宝换了形态；高低、天然人工、金银石玉，都不足以定义它。\n' +
        '好的创作应当以尽可能低的价格抵达尽可能多的人，所以这里不接高溢价的宝石来料，也不做那一类设计。\n' +
        '这朵粉色鸢尾，是博物馆开门之前先摆出来的一朵花。',
      note: '',
      images: ['works/iris-2.jpg', 'works/iris-1.jpg', 'works/iris-3.jpg', 'works/iris-5.jpg', 'works/iris-4.jpg'],
      source: 'https://www.goofish.com/item?id=1060848890296'
    },

    /* ---------- 绒花篇 ---------- */
    {
      id: 'lancang', hall: 'ronghua',
      series: '信物系列', title: '蓝苍',
      tags: ['陈列品', '信物', '珍藏', '赠礼'],
      glow: '#2a43c8', focus: '42% 50%',
      facts: [
        ['系列', '信物系列 · 光盐居陈列品'],
        ['用途', '珍藏或赠礼'],
        ['售卖', '只给一位买家，所见即所得'],
        ['修复', '视情况长期提供']
      ],
      summary:
        '深蓝花瓣一层层向外翻卷，花心簇着一团米白的蕊。\n' +
        '信物系列只做珍藏与赠礼。这一朵只给一位买家，拿到手的就是照片里这一朵；日后若有损伤，作者视情况长期修复。',
      note: '',
      images: ['works/lancang-1.jpg']
    },
    {
      id: 'envelope', hall: 'ronghua',
      series: '绒花', title: '红喜事礼金信封',
      tags: ['荣华', '喜花', '婚礼', '礼金'],
      glow: '#cf1d2f', focus: '24% 50%',
      facts: [
        ['花型', '内五外七，共十二瓣'],
        ['点缀', '金箔'],
        ['用法', '花可取下，佩在新娘或宾客身上']
      ],
      summary:
        '绒花谐音“荣华”，向来寓意荣华如意、欣欣向荣。作者想让这层好意头回到今天的礼仪场合，于是把一朵喜花别在了礼金信封上。\n' +
        '花瓣内五外七，合起来十二瓣，对应一年十二个月。烧箔的颜色留不住，流转出去的版本都改撒金箔。花是活扣固定的，拆下来就能戴在新娘或其他人身上。',
      note: '',
      images: ['works/envelope-1.jpg']
    },
    {
      id: 'dragonfly', hall: 'ronghua',
      series: '旧藏', title: '蓝蜻蜓',
      tags: ['绒花', '青金石', '光盐居代表色', '胸针'],
      glow: '#2f4fe0', feature: true,
      facts: [
        ['门类', '胸针'],
        ['色源', '阿富汗青金石'],
        ['定色', '比对多块原石与染色蚕丝后，定为深蓝'],
        ['附件', '手书落款']
      ],
      summary:
        '在光盐居看来，绒花不只是史书里的非遗，也不只属于女性。蓝蜻蜓就是为所有人做的绒花：新鲜，价格合理，谁都可以戴。\n' +
        '它的颜色取自阿富汗青金石。作者专门比对了一批蓝度不同的原石，在染色蚕丝里试过群青和天蓝，最后定下深蓝。这抹蓝后来又出现在繁星月牙梳、深幽蓝菊、如露睡荷里，成了光盐居的代表色。\n' +
        '每只蜻蜓都随附一张手书落款。',
      note: '',
      images: ['archive/dragonfly-3.jpg', 'archive/dragonfly-6.jpg', 'archive/dragonfly-4.jpg',
               'archive/dragonfly-5.jpg', 'archive/dragonfly-1.jpg', 'archive/dragonfly-2.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'lycoris', hall: 'ronghua',
      series: '旧藏', title: '彼岸花',
      tags: ['绒花', '发叉'],
      glow: '#e2552a',
      facts: [['门类', '发叉'], ['题名', '暂名，待作者题写']],
      summary: '朱红与橙黄层层叠起，花蕊细长外放，簪在一柄金色发叉上。',
      images: ['archive/lycoris.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'plum', hall: 'ronghua',
      series: '旧藏', title: '红梅',
      tags: ['绒花', '定制'],
      glow: '#c4142f',
      facts: [['门类', '绒花枝 / 框'], ['题名', '暂名，待作者题写']],
      summary: '花瓣毛茸，花蕊点金，枝头停着一团白。也有收进画框、按收藏者心意定制的版本。',
      images: ['archive/plum-1.jpg', 'archive/plum-2.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'greenpearl', hall: 'ronghua',
      series: '旧藏', title: '绿萼珠簪',
      tags: ['绒花', '珍珠', '发簪'],
      glow: '#5f8a5a',
      facts: [['门类', '发簪'], ['题名', '暂名，待作者题写']],
      summary: '墨绿到橄榄的小簇绒花，每朵花心缀一颗珍珠。',
      images: ['archive/greenpearl-2.jpg', 'archive/greenpearl-1.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'bluecomb', hall: 'ronghua',
      series: '旧藏', title: '繁星月牙梳',
      tags: ['绒花', '发梳', '光盐居代表色', '婚礼'],
      glow: '#3d6cf0',
      facts: [['门类', '发梳'], ['色彩', '蓝蜻蜓定下的深蓝']],
      summary: '一柄月牙形的发梳，排满深蓝小花，花心点着细碎的亮，像一弯缀满星子的夜。用的正是蓝蜻蜓定下的那抹深蓝。多被选作婚礼的赠礼。',
      images: ['archive/bluecomb.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'redbloom', hall: 'ronghua',
      series: '旧藏', title: '如血',
      tags: ['绒花', '透明匣'],
      glow: '#b0182a',
      facts: [['门类', '绒花 · 透明匣']],
      summary: '成簇的红花封进透明匣，外面系一段白纱。',
      images: ['archive/redbloom.jpg'],
      credit: '图 · 收藏者实拍'
    },

    /* ---------- 博物篇 ---------- */
    {
      id: 'answers', hall: 'bowu',
      series: '博物系列', title: 'Answers on Her Way',
      tags: ['拟态造景', '双面蝶', '精微毒花', '君主斑蝶', '夹竹桃'],
      glow: '#e0782c', feature: true,
      facts: [
        ['构成', '拟态造景 + 双面蝶 + 精微毒花'],
        ['题记', 'In storms folded, In silence gold.']
      ],
      summary:
        '设计对话的第一句就定下了主题：君主斑蝶与夹竹桃毒花之间的共生。\n' +
        '之后反复推敲的是灵感与意境：花要少做几朵，不必铺满；整体再缩到一半甚至三分之一；叶片要拉长，比例才对。\n' +
        '玻璃罩下，一只双面蝶停在红色毒花上。光从侧面照进来，蝶与花的影子一起落在墙上。',
      note: '',
      images: ['works/answers-1.jpg', 'works/answers-2.jpg']
    },
    {
      id: 'frozen', hall: 'bowu',
      series: '博物', title: '冷冻蝴蝶',
      tags: ['黑蝶', '绝对黑色', '凝聚态'],
      glow: '#9fb4c8',
      facts: [['门类', '框'], ['题名', '暂名，待作者题写']],
      summary:
        '起点是一句对话：想要什么蝴蝶？冷冻的，做成黑色就行。\n' +
        '作者为它写了一份像异常生物档案的说明：光落到它身上就停住，整只蝶是纯粹的黑，四周浮着光子慢慢逃逸留下的雾影；它的温度永远升不上去，碰到什么就冻住什么，连光也不例外。\n' +
        '画框里，这只黑蝶停在一片揉皱的银箔上。',
      note: '',
      images: ['works/frozen-1.jpg']
    },
    {
      id: 'butterfly', hall: 'bowu',
      series: '旧藏', title: '血蝶',
      tags: ['蝶', '框'],
      glow: '#c8202b',
      facts: [['门类', '框']],
      summary: '一只绯红的蝶，收进白色画框里。',
      images: ['archive/butterfly.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'gearwing', hall: 'bowu',
      series: '旧藏', title: '机械蝶',
      tags: ['蝶', '齿轮'],
      glow: '#3fae6a',
      facts: [['题名', '暂名，待作者题写']],
      summary: '翡翠绿的蝶翼，翅脉之间嵌进齿轮与表芯零件。',
      images: ['archive/gearwing.jpg'],
      credit: '图 · 收藏者实拍'
    },

    /* ---------- 螺钿篇 ---------- */
    {
      id: 'luodian', hall: 'luodian',
      series: '螺钿画', title: '起舞',
      tags: ['螺钿', '黑色真丝', '可订制'],
      glow: '#7fd8cf', feature: true,
      facts: [
        ['工艺', '螺钿，髹漆工艺的一支，起于新石器时代'],
        ['底布', '黑色真丝（也可选黑丝绒）'],
        ['装裱', '有框'],
        ['订制', '可来图订制，也可委托作者创作'],
        ['报价', '按尺寸、繁简、工时，一幅一价'],
        ['工期', '一个月起'],
        ['题名', '暂名，待作者题写']
      ],
      summary:
        '贝壳薄片一点点嵌出一位起舞的女子：手臂扬起，裙摆铺开，身上散着细碎的彩光。\n' +
        '底布是黑色真丝，本身带着暗光；螺钿在上面闪明光，换个角度，颜色就跟着流动。真丝底要手工抽丝缠覆，所以比丝绒底贵一些。\n' +
        '螺钿画可以挂在家里，也适合送礼。画面可以拿自己的图来订制，也可以交给作者创作，一客一订。',
      note: '',
      images: ['works/luodian-1.jpg', 'works/luodian-2.jpg']
    }
  ]
};
