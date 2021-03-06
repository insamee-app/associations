export default {
  server: {
    port: 5000,
    host: '0.0.0.0',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Du temps libre après les cours ?',
    titleTemplate: 'Associations - %s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'La plateforme de mise en relation des associations',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Associations',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://associations.insamee.fr/img/social/associations.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Bannière du site Associations',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '' },
      {
        hid: 'twitter:image',
        property: 'og:image',
        content: 'https://associations.insamee.fr/img/social/associations.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: ['relative bg-white-dark text-black'],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/getProfile.server.js',
    '~/plugins/axios',
    '~/plugins/vue-scroll-lock.js',
    '~/plugins/vuelidate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/atoms/graphics',
    '~/components/atoms/icons',
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
    '~/components/templates',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@insamee-app/components/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content)
    '@nuxt/content',
    'vue-screen/nuxt',
    // https://image.nuxtjs.org/
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    '/api/**': process.env.API_URL,
    '/auth/**': process.env.API_URL,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {
    insameeURL: process.env.INSAMEE_URL,
    tutoratURL: process.env.TUTORAT_URL,
    evenementsURL: process.env.EVENEMENTS_URL,
  },
}
