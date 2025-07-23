/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  lightMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'box': '0 0 0 1px black',
        "box_2":"0 0 1px 1px white"
      },
      
  
 
      },
        animation: {
            love: ' love 2s ease-in-out forwards ',
         },
 
      
      
  
  },
  plugins: [],
  }
