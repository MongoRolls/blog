<h2 align="center">
MongoRolls的个人博客
</h2><br>

<pre align="center">
 Build with 🦖<a href="https://docusaurus.io/">Docusaurus</a> 
</pre>

<p align="center">
<br>
<a href="https://mongorolls.cn">🖥 Online Preview</a>
<br><br> 
<a href="https://vercel.com/new/clone?repository-url=https://github.com/mongoRolls/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/mongoRolls/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/kuizuo/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introduction

如果你想要搭建一个类似的站点，可直接 [Fork](https://github.com/mongoRolls/blog/fork) 本仓库使用，或者通过 [StackBlitz](https://stackblitz.com/github/kuizuo/blog) 在线运行本项目，或通过 [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/mongoRolls/blog/tree/main&project-name=blog&repo-name=blog) 一键部署。

## ✨ Features

- ✍️ **Markdown** - 写作方便
- 🎨 **Beautiful** - 整洁，美观
- 🖥️ **PWA** - 支持 PWA，可安装，离线可用
- 🏞️ **i18n** - 支持国际化
- 💯 **SEO** - 搜索引擎优化，易于收录
- 📊 **谷歌分析** - 支持 Google Analytics
- 🔎 **全文搜索** - 支持 [Algolia DocSearch](https://github.com/algolia/docsearch)
- 🗃️ **博文视图** - 不同的博文视图，列表、宫格、卡片
- 🌈 **资源导航** - 收集并分享有用、有意思的资源
- 📦 **项目展示** - 展示你的项目，可用作于作品集

我的修改：[Docusaurus 主题魔改](https://mongorolls.cn/docs/docusaurus-guides)

## 📊 Catalogue

### Main

```bash
├── blog                           # 博客
│   ├── first-blog.md
├── docs                           # 文档/笔记
│   └── doc.md
├── data                           # 项目/导航/友链数据
│   ├── friend.ts                  # 友链
│   ├── project.ts                 # 项目
│   └── resource.ts                # 资源导航
├── i18n                           # 国际化
├── src
│   ├── components                 # 组件
│   ├── css                        # 自定义CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题组件
├── static                         # 静态资源文件
│   └── img                        # 静态图片
├── docusaurus.config.ts           # 站点的配置信息
├── sidebars.ts                    # 文档的侧边栏
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

### 自定义主题组件

```bash
src/theme
├── BlogArchivePage               # 博客归档页面
│   ├── index.tsx                 # 归档页面主组件
│   └── styles.module.css         # 归档页面样式
├── BlogLayout                    # 博客布局组件
│   └── index.tsx                 # 布局主组件
├── BlogListPage                 # 博客列表页面
│   ├── index.tsx                # 列表页面主组件
│   └── styles.module.scss        # 列表页面样式
├── BlogPostGridItems           # 博客网格视图组件
│   ├── index.tsx               # 网格视图主组件
│   └── styles.module.scss      # 网格视图样式
├── BlogPostItem               # 博客文章项组件
│   ├── Container             # 文章容器组件
│   ├── Content              # 文章内容组件
│   ├── Footer              # 文章底部组件
│   └── Header              # 文章头部组件
├── BlogPostItems           # 博客文章列表组件
│   └── index.tsx           # 文章列表主组件
└── BlogPostPage           # 博客文章页面
    ├── Metadata           # 文章元数据组件
    └── index.tsx          # 文章页面主组件
```

## 📥 Start

```bash
git clone https://github.com/mongoRolls/blog.git
cd blog
pnpm install
pnpm start
```

Build

```bash
pnpm build
```

## 📝License

[MIT](./LICENSE)
