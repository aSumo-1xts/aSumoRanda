// .vitepress/theme/index.js
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css';
import Layout from "./Layout.vue";
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
    }
} satisfies Theme