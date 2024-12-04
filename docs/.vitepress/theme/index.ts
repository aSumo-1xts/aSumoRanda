// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css';
import Layout from "./Layout.vue";

export default {
    extends: DefaultTheme,
    Layout,
};