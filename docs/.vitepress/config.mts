import { defineConfig, HeadConfig } from 'vitepress'

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
      { icon: 'discord', link: 'https://discord.gg/DPArTErbtv' },
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
  // ページごとに設定したいものは、ここに書かないこと！（なぜかオーバーライドされない）
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }],
    ["meta", { property: "og:image", content: "https://github.com/aSumo-1xts/aSumoranda/blob/main/docs/public/cover01.png?raw=true" }],

    ["meta", { property: "og:locale", content: "ja_JP" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://asumo-1xts.github.io/aSumoranda/" }],
    ["meta", { property: "og:site_name", content: "aSumoranda" }],

    ["meta", { property: "twitter:card", content: "summary" }],
    ["meta", { property: "twitter:site", content: "@asumo_1xts" }],
  ],

  transformHead({ assets, pageData }) {
    const head: HeadConfig[] = []

    // フォントのプリロード
    const FontFile = assets.find(file => /(HaranoAjiGothic-Regular|MoralerspaceNeonHW-Regular)\.\w+\.woff2$/);
    if (FontFile) {
      head.push (
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
      );
    }

    // 動的なメタタグの設定
    const title = pageData.frontmatter.title || 'aSumoranda';
    const description = pageData.frontmatter.description || 'ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ';
    head.push(['meta', { property: 'og:title', content: title }]);
    head.push(['meta', { property: 'og:description', content: description }]);
    
    return head;
  }
  
})