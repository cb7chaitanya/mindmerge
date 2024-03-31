/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        main: '#308E8A',
        secondary: '#3AAFA9',
        
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}

