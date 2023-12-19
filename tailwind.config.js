module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html', // sesuaikan dengan file yang akan di proses
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
        'darkSlateGrey': 'hsl(234, 29%, 20%)',
        'charcoalGrey': 'hsl(235, 18%, 26%)',
        'abu': 'hsl(231, 7%, 60%)',
        'putih': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
       'basic': ['Roboto','sans']
            },
      fontSize: {
        'basis': ['16px', '24px'],
            },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
