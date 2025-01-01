import { createContentLoader } from 'vitepress';

export default createContentLoader('posts/*.md', {
    includeSrc: false,
    transform(rawData) {
        return rawData
        .filter(page => page.url != "/posts/")
        .map(page => {
            page.url = `/aSumoranda${page.url}`;
            return page;
        })
        .sort((a,b)=> +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date));
    }
});