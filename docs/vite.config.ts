import { join } from 'node:path'
import { defineConfig } from 'vite'
import { 
    GitChangelog, 
    GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig(() => {
    return {
        plugins: [ 
            GitChangelog({ 
                // Fill in your repository URL here
                repoURL: () => 'https://github.com/nolebase/integrations',
                mapAuthors: [ 
                    { 
                        name: 'aSumo', 
                        username: 'aSumo-1xts', 
                        mapByEmailAliases: ['1xtelescope@gmail.com'] 
                    } 
                ] 
            }), 
            GitChangelogMarkdownSection({ 
                exclude: (id) => id.endsWith('md'), 
            }), 
        ]
    }
})