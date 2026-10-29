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
    { id: 'archive', name: '旧藏',   en: 'Archive',    status: 'open',
      intro: '绒花、虫蝶与发饰。早年流向各地的作品，由收藏者们拍下。' },
    { id: 'luodian', name: '螺钿',   en: 'Mother-of-pearl', status: 'soon' },
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
   *   facts    展签上的条目 [名称, 内容]
   *   summary  策展说明
   *   note     作者手记（原文）。留空则不显示，作者可直接把原文贴进来
   *   images   图片路径（相对 assets/）
   *   credit   图片来源说明（可选）
   *   source   闲鱼原帖链接（可选）
   */
  works: [
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

    /* ---------- 旧藏：早年作品，图片为收藏者实拍，作品名为暂名 ---------- */
    {
      id: 'dragonfly', hall: 'archive',
      series: '旧藏', title: '蜻蜓',
      tags: ['胸针', '异形翅', '手书落款'],
      glow: '#2f4fe0', feature: true,
      facts: [['门类', '胸针'], ['题名', '暂名，待作者题写']],
      summary: '群青与金橙晕开的翅，有的做成异形翅。每一只都随附一张手书落款，阳光底下会闪。',
      images: ['archive/dragonfly-3.jpg', 'archive/dragonfly-6.jpg', 'archive/dragonfly-4.jpg',
               'archive/dragonfly-5.jpg', 'archive/dragonfly-1.jpg', 'archive/dragonfly-2.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'lycoris', hall: 'archive',
      series: '旧藏', title: '彼岸花',
      tags: ['绒花', '发叉'],
      glow: '#e2552a',
      facts: [['门类', '发叉'], ['题名', '暂名，待作者题写']],
      summary: '朱红与橙黄层层叠起，花蕊细长外放，簪在一柄金色发叉上。',
      images: ['archive/lycoris.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'plum', hall: 'archive',
      series: '旧藏', title: '红梅',
      tags: ['绒花', '定制'],
      glow: '#c4142f',
      facts: [['门类', '绒花枝 / 框'], ['题名', '暂名，待作者题写']],
      summary: '花瓣毛茸，花蕊点金，枝头停着一团白。也有收进画框、按收藏者心意定制的版本。',
      images: ['archive/plum-1.jpg', 'archive/plum-2.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'gearwing', hall: 'archive',
      series: '旧藏', title: '机械蝶',
      tags: ['蝶', '齿轮'],
      glow: '#3fae6a',
      facts: [['题名', '暂名，待作者题写']],
      summary: '翡翠绿的蝶翼，翅脉之间嵌进齿轮与表芯零件。',
      images: ['archive/gearwing.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'greenpearl', hall: 'archive',
      series: '旧藏', title: '绿萼珠簪',
      tags: ['绒花', '珍珠', '发簪'],
      glow: '#5f8a5a',
      facts: [['门类', '发簪'], ['题名', '暂名，待作者题写']],
      summary: '墨绿到橄榄的小簇绒花，每朵花心缀一颗珍珠。',
      images: ['archive/greenpearl-2.jpg', 'archive/greenpearl-1.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'bluecomb', hall: 'archive',
      series: '旧藏', title: '蓝花发梳',
      tags: ['发梳', '婚礼'],
      glow: '#3d6cf0',
      facts: [['门类', '发梳'], ['题名', '暂名，待作者题写']],
      summary: '钴蓝小花排满一柄发梳，花心点着细碎的亮，多被选作婚礼的赠礼。',
      images: ['archive/bluecomb.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'butterfly', hall: 'archive',
      series: '旧藏', title: '绯蝶',
      tags: ['蝶', '框'],
      glow: '#c8202b',
      facts: [['门类', '框'], ['题名', '暂名，待作者题写']],
      summary: '一只绯红的蝶，收进白色画框里。',
      images: ['archive/butterfly.jpg'],
      credit: '图 · 收藏者实拍'
    },
    {
      id: 'redbloom', hall: 'archive',
      series: '旧藏', title: '绯花匣',
      tags: ['绒花', '透明匣'],
      glow: '#b0182a',
      facts: [['题名', '暂名，待作者题写']],
      summary: '成簇的红花封进透明匣，外面系一段白纱。',
      images: ['archive/redbloom.jpg'],
      credit: '图 · 收藏者实拍'
    }
  ]
};
