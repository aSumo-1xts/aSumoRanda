import { h } from 'vue'
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme as ThemeConfig } from 'vitepress'
import './style.css';
import Layout from "./Layout.vue";
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { 
    NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

const Theme: ThemeConfig = {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
        app.use(NolebaseGitChangelogPlugin)
    }
}

export default Theme