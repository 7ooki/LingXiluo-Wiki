import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "凌兮洛 Wiki",
  description: "凌兮洛",
  
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/@waline/client@v3/dist/waline.css' }],
    // 可以在这里添加其他 head 配置
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'QQ群', link: 'https://qm.qq.com/q/3KgPG5vrR' }
    ],

    sidebar: [
      {
        text: '简介', link: '/docs/zh/description'
      },
      {
        text: '如何进入',
        items: [
          { text: '下载客户端', link: '/docs/zh/client' },
          { text: '下载Java', link: '/docs/zh/java' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingXiluo-Wiki' }
    ]
  }
})