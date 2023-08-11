/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo' : 'LOGO',
        'slogo' : 'LOGO-2',
        'heading' : 'HEADING',
        'body' : 'BODY'
      },

      colors: {
        'dblue' : '#05014a',
        'lgray' : '#d3d3d3'
      }
    },
  },
  plugins: [],
}

