传奇发布网 · 静态站点使用说明
=====================================

一、站点定位
  网站标题：每日新开传奇_传奇发布网_今天新开的传奇网站_传奇版本开服表-传奇发布网
  首页关键词：每日新开传奇,传奇发布网,今天新开的传奇网站,新开传奇网站,传奇开服表,传奇版本,单职业传奇,合击传奇,1.76复古传奇
  首页描述：传奇发布网每日更新新开传奇开区信息，汇集1.76复古、1.80合击、单职业、冰雪火龙等热门版本，
            提供开区时间、版本特色、开荒路线与装备攻略，帮玩家快速找到今天新开的传奇网站。
  目标域名：https://playcq.github.io

二、目录结构（所有文件均与 index.html 平级，无子目录）
  index.html          首页（开区表 + 20 张 126×126 图标墙 + 栏目区块）
  xk.html             栏目：每日新开传奇
  fb.html             栏目：传奇发布网
  fg.html             栏目：1.76复古传奇
  hj.html             栏目：合击打金
  dj.html             栏目：单职业传奇
  gl.html             栏目：传奇攻略
  xk-01.html ~ xk-20.html   文章（其余栏目同理：fb/fg/hj/dj/gl 各 20 篇，共 120 篇）
  about.html          关于本站
  search.html         站内搜索（读取 search-data.js）
  sitemap.html        网站地图页
  404.html            404 页
  style.css           全站样式
  main.js             导航、返回顶部、搜索逻辑
  search-data.js      搜索索引（由程序生成，无需手工修改）
  img01.jpg ~ img20.jpg   20 张 126×126 图标（占位图）
  favicon.ico         站点图标
  sitemap.xml         站点地图（130 条 URL）
  robots.txt          爬虫协议
  .nojekyll           关闭 GitHub Pages 的 Jekyll 处理

三、如何打开浏览
  直接双击 index.html 即可，所有链接都是相对路径，无需服务器。
  也可以在本机执行：python3 -m http.server 8000，再访问 http://127.0.0.1:8000/

四、图片替换（重要）
  全站使用 20 张 126×126 的图片，文件名固定为 img01.jpg ~ img20.jpg。
  把你的图片命名为同样的文件名，直接覆盖根目录下的同名文件即可，无需改任何代码。
  建议格式：JPG，尺寸 126×126 像素，单张 20KB 以内，加载更快。
  出现位置：
    1) 首页“每日新开传奇版本推荐”图标墙（20 个）
    2) 栏目列表页、首页文章卡片、文章页标题左侧缩略图（复用同一批 20 张图）

五、部署到 playcq.github.io
  1. 在 GitHub 新建公开仓库，仓库名必须是 playcq.github.io
  2. 把本目录下“所有文件”（含 .nojekyll）上传到仓库根目录
  3. 仓库 Settings → Pages → Source 选择 Deploy from a branch → main / (root) → Save
  4. 等 1 分钟左右，访问 https://playcq.github.io
  注意：canonical、sitemap.xml、robots.txt 里的域名已写死为 https://playcq.github.io，
        若以后换域名，需全站批量替换该字符串。

六、搜索引擎优化已做的部分
  1. 每个页面独立的 title、keywords、description（131 个页面全部唯一）
  2. 每页唯一 H1，正文按 H2/H3 分节；面包屑导航；文章间上一篇/下一篇与相关阅读
  3. 结构化数据 JSON-LD：WebSite、Article、BreadcrumbList、CollectionPage
  4. 静态 HTML 直接输出正文，不依赖 JS 渲染，百度/360/必应收录友好
  5. 伪静态短路径：/xk-01.html、/fb-02.html，栏目页 /xk.html
  6. sitemap.xml（首页 + 6 栏目 + 120 文章 + 关于/搜索/地图）
  7. robots.txt 放行全站并声明 sitemap 地址
  8. meta robots、googlebot、baiduspider、360spider 均为 index,follow
  9. 无外部 CDN 依赖，纯本地 CSS/JS，首屏快
  提交入口：
    百度搜索资源平台 https://ziyuan.baidu.com → 普通收录 → 提交 sitemap
    360 站长平台 https://zhanzhang.so.com → 提交 sitemap
    必应站长工具 https://www.bing.com/webmasters → 提交 sitemap

七、内容规模
  6 个栏目 × 20 篇 = 120 篇文章，每篇正文约 1000 字（实际 940~1030 汉字），
  单页约 20KB，整站打包后体积很小，适合静态托管。

八、修改内容
  文章为静态 HTML，直接用编辑器改文字即可；改完记得同步更新 sitemap.xml 的 lastmod
  （可选）。新增文章时，复制任意一篇的 HTML，改标题、描述、正文、链接即可。

九、声明
  本站为信息整理类静态站，不提供游戏客户端下载，不参与充值、返利、账号交易。
  站内版本名称与开区时间仅作信息展示，具体情况以游戏内公告为准。
