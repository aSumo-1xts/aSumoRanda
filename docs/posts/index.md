---
layout: doc
title: すべての記事
description: これまでに書いた記事の一覧です
prev: false
next: false
editLink: false
lastUpdated: false
permalink: "https://aSumo-1xts.github.io/aSumoranda/posts/"
---

# {{ $frontmatter.title }}

<script lang="ts" setup>
    import { data as posts } from "../.vitepress/posts.data";
    import moment from 'moment';
</script>

<ul>
    <li v-for="post of posts">
        <a :href="`/aSumoranda${post.url}`" class="font-semibold text-lg">{{ post.frontmatter.title }}</a>
        <span class="text-sm"> - {{ moment(post.frontmatter.date).format('YYYY-MM-DD') }}</span>
    </li>
</ul>