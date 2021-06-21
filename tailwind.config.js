module.exports = {
  purge: {
    content: ['node_modules/insamee-components/src/components/**'],
  },
  theme: {
    colors: {
      primary: {
        base: '#0073E6',
        dark: '#0049B3',
        light: '#63A1FF',
      },
      secondary: {
        base: '#4FBE8E',
        dark: '#088D60',
        light: '#83F1BE',
      },
      grey: {
        base: '#839199',
        dark: '#142130',
        light: '#DCDEE4',
      },
      'grey-secondary': {
        base: '#889490',
        dark: '#182C25',
        light: '#DEE2E1',
      },
      white: '#FCFDFD',
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
}
