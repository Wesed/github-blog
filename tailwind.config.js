module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow_light: '#F1E9C9',
        yellow: '#DBAC2C',
        yellow_dark: '#C47F17',

        purple_light: '#EBE5F9',
        purple: '#8047F8',
        purple_dark: '#4B2995',

        base_title: '#272221',
        base_subtitle: '#403937',
        base_text: '#574F4D',
        base_label: '#8D8686',
        base_hover: '#D7D5D5',
        base_button: '#E6E5E5',
        base_input: '#EDEDED',
        base_card: '#F3F2F2',

        background: '#FAFAFA',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['"Baloo 2"', 'cursive'],
      },
    },
  },
  plugins: [],
}
