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
      { text: 'Wiki', link: '/wiki' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '引子', link: '/wiki/intro' },
          { text: '街机常见问题', link: '/wiki/arcade' },
          { text: '手台常见问题', link: '/wiki/controller' },
          { text: '手台配件购买', link: '/wiki/controller_accessories' },
          { text: '街机服务器', link: '/wiki/arcade_server' },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
}, { locales: ['zhHans'] }))
