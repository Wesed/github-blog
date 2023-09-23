module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        blue: '#3294F8',

        base_title: '#E7EDF4',
        base_subtitle: '#C4D4E3',
        base_text: '#AFC2D4',
        base_span: '#7B96B2',
        base_label: '#3A536B',
        base_border: '#1C2F41',
        base_post: '#112131',
        base_profile: '#0B1B2B',
        base_background: ' #071422',
        base_input: '#040F1A',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },

      width: {
        icon: '18px',
      },

      height: {
        icon: '18px',
      },

      maxWidth: {
        maxWidthProject: '1000px',
      },
    },
  },
  plugins: [],
}
