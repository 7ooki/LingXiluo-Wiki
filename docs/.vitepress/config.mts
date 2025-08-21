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
        text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LingXiluo-Wiki' }
    ]
  }
})