---
layout: doc
title: すべてのタグ
description: 記事に付けられたタグの一覧
permalink: "https://aSumo-1xts.github.io/aSumoranda/tags/"
prev: false
next: false
editLink: false
lastUpdated: false
---

# {{ $frontmatter.title }}

<script lang="ts" setup>
import { data as tags } from "../.vitepress/tags.data"
import PostCounter from "../.vitepress/components/PostCounter.vue"
</script>

<ul>
    <li v-for="tagpage of tags">
        <a :href="`/aSumoranda${tagpage.url}`" class="font-semibold text-lg">{{ tagpage.frontmatter.title.replace('Tags/', '') }}
            <span class="text-sm"> (<PostCounter :tag="tagpage.url.replace('/tags/', '').replace('.html', '')" />)</span>
        </a>
    </li>
</ul>