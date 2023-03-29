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
        },
        gray: {
          25: '#434649'
        },
      },
      height: {
        43: '44rem',
        'littleMidScreen': '40vh',
        'midScreen': '44vh'
      },
      padding: {
        '17-top': '4.5rem'
      },
      fontFamily: {
        interBold: ['InterBold', 'sans-serif'],
        interRegular: ['InterRegular', 'serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },

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