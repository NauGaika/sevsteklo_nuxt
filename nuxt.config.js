module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: ['start']
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://sev-steklo.ru'
  },
  head: {
    title: 'Мир стекла и зеркал г. Севастополь',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: ['@nuxtjs/proxy', 'nuxt-fontawesome'],
  plugins: [{ src: '~/plugins/vue-my-photos' }],
  fontawesome: {
    component: 'fa',
    imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        },
    ],
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://127.0.0.1:5000/api/'
  },
  build: {
    vendor: ['axios'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
