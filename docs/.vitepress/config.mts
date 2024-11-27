import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "aSumoranda",
  description: "ｱｽﾓのメモランダ、ｱｽﾓランダ",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  head: [
    ["link", { rel: "icon", href: "/public/favicon.ico" }],
    ["meta", { property: "og:image", content: "https://github.com/aSumo-1xts/aSumoranda/blob/main/docs/public/cover.png?raw=true" }],

    ["meta", { property: "og:locale", content: "ja_JP" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://asumoranda.vercel.app" }],
    ["meta", { property: "og:site_name", content: "aSumoranda" }],

    ["meta", { property: "og:title", content: "Home" }],
    ["meta", { property: "og:description", content: "ｱｽﾓランダへようこそ。" }],

    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@asumo_1xts" }],
  ]
  
})
