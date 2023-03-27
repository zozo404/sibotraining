module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#5D750F'
        },
        gold: {
          25: '#F4E9CC',
          50: '#E4C87F'
        },
        black: {
          50: '#101010'
        },
        velour: {
          50: '#560039'
        }
      },
      height : {
        43 : '43rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'static/**/*.html',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ]
}