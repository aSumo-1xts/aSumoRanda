import { createContentLoader, defineConfig, HeadConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream} from 'node:fs'
import { resolve } from 'node:path'
import lightbox from "vitepress-plugin-lightbox"
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: { 
    plugins: [ 
      GitChangelog({ 
        // Fill in your repository URL here
        repoURL: () => 'https://github.com/aSumo-1xts/aSumoranda', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  },

  lang: 'ja',
  base: '/aSumoranda/',
  title: "aSumoranda",
  description: "ｱｽﾓのﾒﾓﾗﾝﾀﾞ、ｱｽﾓﾗﾝﾀﾞ",

  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    },
    config: (md) => {
      md.use(lightbox, {});
      md.use(tabsMarkdownPlugin)
    }
  },

  themeConfig: {
    logo: "/home.svg",
    siteTitle: "Home",

    sidebar: [
      { text: 'エフェクター',
        collapsed: true,
        items: [
          { text: 'Item A', link: '/item-a' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
      { text: 'その他の工作',
        collapsed: true,
        items: [
          { text: 'ArduinoでDAWからBPMを取得する', link: '/02/20241203' },
          { text: 'Arduinoで理想のMIDIコントローラーを作る', link: '/02/20241204' },
        ]
      }
    ],

    nav: [
      { text: 'エフェクター', link: '/01/' },
      { text: 'その他の工作', link: '/02/' },
      { text: 'プログラミング', link: '/03/' },
      { text: 'レビュー・雑記', link: '/04/' },
      { text: '1x telescope',
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

  lastUpdated: false,

  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://asumo-1xts.github.io/aSumoranda/' })
    const pages = await createContentLoader('*.md').load()
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) => sitemap.write(
      page.url
        // Strip `index.html` from URL
        .replace(/index.html$/g, '')
        // Optional: if Markdown files are located in a subfolder
        .replace(/^\/docs/, '')
      ))
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
  },

  // メタタグの設定
  // ページごとに設定したいものは、ここに書かないこと！（なぜかオーバーライドされない）
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }],
    ["meta", { property: "og:image", content: "https://github.com/aSumo-1xts/aSumoranda/blob/main/docs/public/cover02.png?raw=true" }],
    ["meta", { property: "og:locale", content: "ja_JP" }],
    ["meta", { property: "og:type", content: "website" }],
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
    const url = pageData.frontmatter.permalink || 'https://asumo-1xts.github.io/aSumoranda/';
    const author = pageData.frontmatter.author || 'aSumo';
    head.push(['meta', { property: 'og:title', content: title }]);
    head.push(['meta', { property: 'og:description', content: description }]);
    head.push(['meta', { property: 'og:url', content: url }]);
    head.push(['meta', { property: 'og:author', content: author }]);
    
    // まとめて返す
    return head;
  }
  
})