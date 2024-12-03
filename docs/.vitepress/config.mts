import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'ja',
  base: '/aSumoranda/',
  title: "aSumoranda",
  description: "ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ",

  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  },

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
        target: '_blank',
        rel: 'sponsored'
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/asumo_1xts' },
      { icon: 'youtube', link: 'https://www.youtube.com/@1xtelescope' },
      { icon: 'github', link: 'https://github.com/aSumo-1xts' },
    ],

    footer: {
      message: 'Some rights reserved.',
      copyright: 'ｱｽﾓ 2024 | CC BY-SA 4.0',
    }
  },

  lastUpdated: true,

  sitemap : {
    hostname: "https://asumo-1xts.github.io/aSumoranda/"
  },

  // メタタグの設定
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }],
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
    const FontFile = assets.find(file => /(HaranoAjiGothic-Regular|MoralerspaceNeonHW-Regular)\.\w+\.woff2$/);
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