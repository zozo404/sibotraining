module.exports = {
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          olive: {
            50: '#5D750F'
          },
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