import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import path from 'node:path'
import { themes } from 'prism-react-renderer'
import { GiscusConfig } from './src/components/Comment'
import { Social } from './src/components/SocialLinks'

const beian = '没背'
const beian1 = '没背'

const config: Config = {
  title: 'MongoRolls的小站',
  url: 'https://mongorolls.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'mongoRolls',
  projectName: 'blog',
  tagline: '选择大于努力',
  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar-3',
    //   content: ``,
    // },
    metadata: [
      {
        name: 'keywords',
        content: 'MongoRolls',
      },
      {
        name: 'keywords',
        content: 'blog, javascript, typescript, node, react, web',
      },
      {
        name: 'keywords',
        content: '编程爱好者, Web开发者',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },

    navbar: {
      logo: {
        alt: 'MongoRolls',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      hideOnScroll: true,
      items: [
        {
          label: '博客',
          position: 'right',
          to: 'blog',
        },
        {
          label: '项目',
          position: 'right',
          to: 'project',
        },
        {
          label: '更多',
          position: 'right',
          items: [
            { label: '归档', to: 'blog/archive' },
            { label: '笔记', to: 'docs/skill' },
            { label: '资源', to: 'resource' },
            { label: '友链', to: 'friends' },
            { label: '工具推荐', to: 'docs/tools' },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            { label: '博客', to: 'blog' },
            { label: '归档', to: 'blog/archive' },
            { label: '技术笔记', to: 'docs/skill' },
            { label: '实战项目', to: 'project' },
          ],
        },
        {
          title: '社交媒体',
          items: [
            { label: '关于我', to: '/about' },
            { label: 'GitHub', href: 'https://github.com/mongoRolls' },
            { label: 'Twitter', href: 'https://twitter.com/MongoRolls' },
            {
              label: '掘金',
              href: 'https://juejin.cn/user/2377593299678135',
            },
            { label: 'Discord', href: 'https://discord.com' },
          ],
        },
        {
          title: '更多',
          items: [
            { label: '友链', position: 'right', to: 'friends' },
            { label: '导航', position: 'right', to: 'resource' },
            {
              html: `
                <a href="https://docusaurus.io/zh-CN/" target="_blank" rel="noreferrer noopener">
                  <img src="/img/buildwith.png" alt="build with docusaurus" width="120" height="50"/>
                <a/>
                `,
            },
          ],
        },
      ],
      copyright: `
        <p style="margin-bottom: 0;"><a href="http://beian.miit.gov.cn/">${beian}</a></p>
        <p style="display: inline-flex; align-items: center;"><img style="height:20px;margin-right: 0.5rem;" src="/img/police.png" alt="police" height="20"/><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${beian1.match(
          /\d+/,
        )?.[0]}" >${beian1}</a></p>
        <p>Copyright © 2020 - PRESENT MongoRolls Built with Docusaurus.</p>
        `,
    },
    algolia: {
      appId: 'MH9B5Y1SFF',
      apiKey: '1b6acf0239c53e702562e691b39d2848',
      indexName: 'mongorolls',
    },
    prism: {
      theme: themes.oneLight,
      darkTheme: themes.oneDark,
      additionalLanguages: [
        'bash',
        'json',
        'java',
        'python',
        'php',
        'graphql',
        'rust',
        'toml',
        'protobuf',
      ],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    giscus: {
      repo: 'mongorolls/blog',
      repoId: 'R_kgDOK-1ZaA',
      category: 'Announcements',
      categoryId: 'DIC_kwDOK-1ZaM4CcFrt',
      theme: 'light',
      darkTheme: 'dark_dimmed',
    } satisfies Partial<GiscusConfig>,
    socials: {
      github: 'https://github.com/mongoRolls',
      twitter: 'https://twitter.com/MongoRolls',
      juejin: 'https://juejin.cn/user/2377593299678135',
      csdn: 'https://blog.csdn.net/kuizuo12',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=1467513807&amp;site=qq',
      zhihu: 'https://www.zhihu.com/people/MongoRolls',
      cloudmusic: 'https://music.163.com/#/artist?id=1007170',
      email: 'mailto:xuzhichao1618@qq.com',
    } satisfies Social,
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    liveCodeBlock: { playgroundPosition: 'top' },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.scss'],
        },
        sitemap: {
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), // 为了实现全局 blog 数据，必须改写 plugin-content-blog 插件
      {
        path: 'blog',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/mongoRolls/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: '代码人生：编织技术与生活的博客之旅',
        blogSidebarCount: 10,
        blogSidebarTitle: 'Blogs',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'MongoRolls',
          copyright: `Copyright © ${new Date().getFullYear()} MongoRolls Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    ['@docusaurus/plugin-ideal-image', { disableInDev: false }],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#12affa' },
        ],
      },
    ],
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'MongoRolls的个人博客',
      },
    },
  ],
  stylesheets: ['https://cdn.jsdelivr.net/npm/misans@4.0.0/lib/Normal/MiSans-Normal.min.css'],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
}

export default config
