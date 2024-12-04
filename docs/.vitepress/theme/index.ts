import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css';
import Layout from "./Layout.vue";
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { 
    NolebaseEnhancedReadabilitiesMenu, 
    NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
          // A enhanced readabilities menu for wider screens
        'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
          // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
        'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
        })
    },
    enhanceApp({ app }) {
        enhanceAppWithTabs(app)
    }
} satisfies Theme