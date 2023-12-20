/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    colors:{
      red: '#FF0000',
      black: '#070707',
      white: '#FFFFFF',
    },
    fontFamily: {
      robuck: ['Robuck'],
      winter: ['Winter'],
      sfHeavy: ['SfHeavy'],
      sfLight: ['SfLight'],
      sfMedium: ['SfMedium']
    },
    extend: {},
  },
  plugins: [],
}
