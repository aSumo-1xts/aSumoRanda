import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja',
  title: "aSumoranda",
  description: "ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ",

  themeConfig: {
    logo: "/home.svg",
    siteTitle: false,

    nav: [
      {
        text: 'Products',
        items: [
          {
            items: [
              { text: 'View All', link: '/01/' },
              { text: 'Downpour', link: '/01/20241201' },
              { text: 'Factory Head Fuzz', link: '/01/20241202' }
            ]
          }
        ]
      },
      { text: 'Blog',
        items: [
          {
            items: [
              { text: 'View All', link: '/02/' },
              { text: '作ろう', link: '/02/20241203' },
              { text: '弾こう', link: '/02/20241204' }
            ]
          }
        ]
      },
      {
        text: '1x telescope',
        link: 'https://sites.google.com/view/1xtelescope',
        target: '_self',
        rel: 'sponsored'
      }
    ],

    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@1xtelescope' },
      { icon: 'twitter', link: 'https://x.com/asumo_1xts' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: 'Some rights reserved.',
      copyright: 'ｱｽﾓ 2024 | CC BY-SA 4.0',
    }
  },

  editLink: {
    pattern: 'https://github.com/aSumo-1xts/aSumoranda/tree/main/docs/:path',
    text: 'Edit on GitHub'
  },

  lastUpdated: {
    text: 'Last Updated:',
    formatOptions: {
      dateStyle: 'full',
      timeStyle: 'medium'
    }
  },

  search: {
    provider: 'local'
  },

  docFooter: {
    prev: false,
    next: false
  },

  darkModeSwitchLabel: '🌓',
  lightModeSwitchTitle: '光あれ！',
  darkModeSwitchTitle: '闇あれ！',

  // メタタグの設定
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { property: "og:image", content: "https://github.com/aSumo-1xts/aSumoranda/blob/main/docs/public/cover.png?raw=true" }],

    ["meta", { property: "og:locale", content: "ja_JP" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://asumoranda.vercel.app" }],
    ["meta", { property: "og:site_name", content: "aSumoranda" }],

    ["meta", { property: "og:title", content: "Home" }],
    ["meta", { property: "og:description", content: "ｱｽﾓﾗﾝﾀﾞへようこそ。" }],

    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@asumo_1xts" }],
  ],

  // フォントファイルのプリロード
  transformHead({ assets }) {
    const FontFile = assets.find(file => /(PlemolJPHS-Text|HaranoAjiGothic-Regular|MoralerspaceNeonHW-Regular)\.\w+\.woff2$/);
    if (FontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: FontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ];
    }
    return [];
  }
  
})