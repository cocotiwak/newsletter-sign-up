module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html', // sesuaikan dengan file yang akan di proses
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      color: {
        'Tomato': 'hsl(4, 100%, 67%)',
        'DarkSlateGrey': 'hsl(234, 29%, 20%)',
        'CharcoalGrey': 'hsl(235, 18%, 26%)',
        'Abu': 'hsl(231, 7%, 60%)',
        'Putih': 'hsl(0, 0%, 100%)'
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
