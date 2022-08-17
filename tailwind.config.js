/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lato': ['Lato', 'system-ui'],
      'Yeseva': ['"Yeseva One"'],
    },
    extend: {
      flex :{
        '2' : '2 2 0%',
        '3' : '3 3 0%',
        '5' : '5 5 0%',
        '7' : '7 7 0%',
        
       
      },
      screens: {
        'seconde' : '1304px'
      }
    },
  },
  plugins: [],
}
