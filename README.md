# 光盐居 · 线上博物馆

纯静态网站：不需要数据库，也不需要构建工具。把整个文件夹放到任何静态托管上就能访问。

```
光盐居/
├─ index.html          页面结构（主页 / 作品节选 / 前奏曲四大门类 / 来访，外加门类页）
├─ css/style.css       样式
├─ js/works.js         ★ 展品数据。日常更新只改这一个文件
├─ js/app.js           页面逻辑，一般不用动
├─ assets/works/       作者自己拍的作品图（闲鱼商品页、作者发来的照片）
├─ assets/archive/     旧藏图片（闲鱼评价区的买家晒图）
├─ assets/thumbs/      展墙用的缩略图（可选）
├─ assets/brand/       头像那一笔群青，做成了 logo
└─ fonts/brush.woff    书法字体（只含网站固定文案用到的字）
```

## 本地预览

```bash
cd 光盐居 && python3 -m http.server 8000
```

然后打开 http://127.0.0.1:8000 。直接双击 index.html 也能看，但 logo 遮罩和字体在 file:// 下可能不显示。

## 新增一件作品

1. 把照片放进 `assets/works/`，文件名用英文或拼音，例如 `luodian-1.jpg`。长边 1100px 左右就够了。
2. 打开 `js/works.js`，在 `works: [ ... ]` 里对应门类、陈列的位置，复制一个已有的 `{ ... }` 块，改这几个字段：
   - `id`：英文短名，不能和其他作品重复。它也是分享链接，例如 `你的网址/#/w/luodian`。
   - `cat`：所属门类：`ronghua`（绒花）、`zhijin`（织锦画）、`ranfang`（草木染坊）、`qidian`（漆 · 钿）。
   - `group`：门类下的陈列，例如绒花下的 `mengwu` 绒绒萌物、`huanyu` 幻羽蝶变、`fanhua` 繁花世界、`xingli` 行礼如仪、`xianhua` 鲜花着锦、`banlan` 斑斓油画。
   - `series` / `title` / `subtitle`：系列小字、作品名、副名（如“信物系列”“蓝苍”“深幽蓝菊”）。
   - `tags`、`facts`、`summary`：关键词、展签条目、正文。正文里整行写成 `【碎碎念】` 或 `#共创节选#` 会显示为小标题。
   - `images`：图片路径，第一张是封面。
   - `glow`：这件作品的“光色”，取作品主色即可。
   - `feature: true`：在门类页占双倍大小（可选）。`focus`：横图封面裁切的重心（可选）。
   - `stage` / `cut`：展台图和透明底主体层（可选）。有 `cut` 时，首页轮播和详情第一张会用分层展台，带随鼠标 / 自动摆动的立体效果；`stage` 只需要放在 `assets/thumbs/` 里做封面缩略图。所有作品的卡片封面都用展台图，保证展墙背景一致。
   - `frame: true`：背景太乱、抠不出主体的作品，展台图是把原照片装进细黑框放上展台，只做封面，不进详情图集。
   - `poems`：收藏者题诗（可选），写法 `[{ date: '2026.05.05', title: '', text: '……', by: '' }]`。详情页里一篇一行（日期 + 标题或首句），点开看全文；`text` 里换一行是分行，空一行是分节；`by` 写出处，例如引用的古诗；诗里引用了别人的文字时写 `quote: { text: '……', from: '作者' }`，会在诗末单独显示并注明出处。
3. 保存，刷新页面。

编号（No.001…）按门类和陈列的顺序自动生成。缩略图可以不做：`assets/thumbs/` 里没有同名文件时，会自动用原图。

## 作品节选、门类和陈列

- **作品节选**：改 `featured` 里的作品 id，第一件占大图。
- **开放草木染坊**：把 `categories` 里草木染坊的 `status` 改成 `'open'`，在 `groups` 里加一个陈列，作品的 `cat` 填 `ranfang`，再把 `feature` 填成一件代表作的 id（前奏曲门面上就会换掉染布条，放这件作品）。
- **换门面代表作**：改门类的 `feature`（作品 id）。有抠图（`cut`）的作品在门面上有立体效果。
- **工作室栏目**：改 `studio`（介绍、参观须知、票价、预约说明）。照片放进 `assets/studio/`，在 `studio.photos` 里写 `{ src: 'studio/xxx.jpg', caption: '说明' }`。
- **联系方式**：改 `contact` 的 `wechat`、`wechatQR`、`email`。留空的那一项网页上不显示。
- **新增陈列**：在对应门类的 `groups` 里照格式加一行，门类页会自动出现新的一节和跳转按钮。

## 上线前请留意

- **买家晒图**：`assets/archive/` 里的图来自闲鱼评价区，展签上标着“第 N 张为收藏者实拍”。
- **文字**：作品正文来自作者的四份绒花陈列文档和闲鱼商品页；作者没写文字的作品，是按照片写的一句简短描述，可以直接替换。
- **珠宝篇**：暂时撤下，只在主页保留若尘花冠的图片（`cat` 留空的作品只出现在主页和作品节选）。
- **交易**：网站只陈列，不售卖。所有“去闲鱼”按钮都链接回闲鱼主页或原帖，交易在闲鱼内完成。

## 部署

| 方式 | 备案 | 说明 |
| --- | --- | --- |
| 国内云服务器 / 国内 OSS + CDN | 需要 ICP 备案 | 国内访问最快最稳，适合长期使用 |
| GitHub Pages、Cloudflare Pages、Vercel 等境外托管 | 不需要 | 免费，上传文件夹即可。国内访问速度一般，偶尔不稳定 |

可以先用境外托管跑起来，在微信公众号菜单或文章里放链接。等备案完成后再迁到国内。

## 字体

- 正文用系统宋体。能访问 Google Fonts 时，会自动换成思源宋体。
- 书法字体（“光盐居”、展厅名、“万古长空 一朝风月”等）用的是开源字体 Zhi Mang Xing（OFL 协议）。为了加载快，只保留了这些固定文案用到的字。如果改了带 `brush` 样式的文字，新字会显示成宋体。需要时可以重新生成：

```bash
pip3 install fonttools
python3 -m fontTools.subset ZhiMangXing-Regular.ttf --text="这里填所有书法字" --flavor=woff --output-file=fonts/brush.woff
```

（原字体下载：https://github.com/google/fonts/raw/main/ofl/zhimangxing/ZhiMangXing-Regular.ttf ）
