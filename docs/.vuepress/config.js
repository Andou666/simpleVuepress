module.exports = {
    themeConfig: {
      navbar: true,
      nav: [
        {text: 'ホーム', link: '/'},
        {text: 'アバウト', link: '/about'},
      ],
      sidebar: [
          '/',
          ['/about', 'アバウト']
      ]
    },
    title: 'はじめてのVuePress', // タイトル名
    description: 'VuePressのお試し', // metaタグ
    head: [

    ],
    port: 8080, // devのデフォルト値
    dest: ".vuepress/dist", // 出力先
  }