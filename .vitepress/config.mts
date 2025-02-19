import { defineConfig } from 'vitepress'
import { generateI18n, withI18n } from 'vitepress-i18n';

// https://vitepress.dev/reference/site-config
export default defineConfig(withI18n({
  title: "音游Wiki",
  description: "音游Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/intro' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: '引子', link: '/wiki/intro' },
          { text: '街机常见问题', link: '/wiki/arcade' },
          { text: '手台常见问题', link: '/wiki/controller' },
          { text: '手台配件购买', link: '/wiki/controller_accessories' },
          { text: '街机服务器', link: '/wiki/arcade_server' },
          { text: '街机音游介绍', link: '/wiki/rhythm_present_mobile' },
          { text: '移动端音游介绍', link: '/wiki/rhythm_present_mobile' },
          { text: 'PC端音游介绍', link: '/wiki/rhythm_present_mobile' },
          { text: '音游梗百科', link: '/wiki/rhythm_present_mobile' },
          { text: '曲师介绍', link: '/wiki/rhythm_present_mobile' },
          { text: '收录曲介绍', link: '/wiki/rhythm_present_mobile' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TingYuNya/yinyou_wiki' }
    ],

    editLink: {
      pattern: 'https://github.com/TingYuNya/yinyou_wiki/blob/master/:path'
    }
  }
}, { locales: ['zhHans'] }))
