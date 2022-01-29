module.exports = {
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 站点配置
  lang: 'zh-CN',
  title: 'Opal',
  description: '一个帮助你确立短期目标的项目',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // 配置默认主题
    logo: '/1.png',
    navbar: [
      // NavbarItem
      {
        text: 'Github',
        link: 'https://github.com/starNGC2237/opal',
      }
    ],
  },
}