module.exports = {
  purge: {
    content: ['node_modules/@insamee-app/components/src/components/**'],
  },
  mode: 'jit',
  theme: {
    transparent: 'transparent',
    colors: {
      primary: {
        base: '#007C77',
        dark: '#004F4B',
        light: '#4AACA6',
      },
      secondary: {
        base: '#F05D5E',
        dark: '#B82834',
        light: '#FF8F8B',
      },
      grey: {
        base: '#839990',
        dark: '#090909',
        light: '#DCE4E1',
      },
      'grey-secondary': {
        base: '#948888',
        dark: '#2C1818',
        light: '#E2DEDE',
      },
      white: {
        base: '#FCFDFD',
        dark: '#F7F7F7',
      },
      black: '#000517',
      negative: '#F33C3C',
      positive: '#63ED92',
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
