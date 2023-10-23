import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      fontFamily: {
        'abcdiatype': ['abcdiatype'],
        'abcsocialextended': ['abcsocialextended'],
        'abcfavorit': ['abcfavorit'],
        'times': ["Times New Roman"],
      },

      fontSize: {
        basefavorit: '.9rem',
        lgfavorit: '1.05rem',
        '5xlfavorit': '2.8rem',
      },

      colors: {
        'primary': {
          0: '#202930',
          100: "#353C42",
          200: "#6A6E73",
          300: '#75777B',
          400: '#929598',
          600: '#B6B9BA',
          700: '#CDCECF',
          800: '#DFDDDE',

        },

        'secondary': {
          0: '#F2F1F0',
        },

        'green': {
          0: '#1e4a3d', //titles
          100: '#295547', //filter
          200: '#325f51', //filter hover + content hover
          400: '#5d7e73', //filter + label
          600: '#73988c', //filter hover + tiny numbers
        },
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  fontWeight: {
    'hairline': '100',
    'thin': '200',
    light: '300',
    'book': '350',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  plugins: [],


}

export default config