/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './public/index.html',
   './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      height: {
        '1/8': '450px'
      },
      width: {
        '2/15': '23%'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

