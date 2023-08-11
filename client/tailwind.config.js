/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont' : 'mont',
        'rob' : 'rob',
        'brob' : 'brob',
        'bmont' : 'bmont'
      },

      colors: {
        'dblue' : '#05014a',
        'lgray' : '#d3d3d3',
        'dwhite' : '#f9f9f9',
        'dblack' : '#2d2e32',
        'dgold' : '#daa520'
      }
    },
  },
  plugins: [],
}

