import smConfig from "./sm.json";
export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sibotraining',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap", rel: "stylesheet"},
      { href: "https://fonts.cdnfonts.com/css/satoshi?styles=135002", rel: "stylesheet"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  script: [
    {
      src: 'https://static.cdn.prismic.io/prismic.js?new=true&repo=sibotraining',
      async: true,
    }
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // font-awesome
    {
      src: '~/plugins/fontawesome.js',
      ssr: false
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxt/image'
  ],
  image: {
    provider: "prismic",
    prismic: {}
  },
  prismic: {
    endpoint: 'https://sibotraining.cdn.prismic.io/api/v2',
    modern: true
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/prismic", {
      endpoint: smConfig.apiEndpoint || ""
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["@prismicio/vue"]
  }
}
