import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
resolve:{
  alias:{
    '@':path.resolve(__dirname, 'src'),
    '@email.js/browser': path.resolve(__dirname , "node_modules/emailjs/browser"),
    '@fortawesome/react-fontawesome':path.resolve(__dirname , "node_modules/@fortawesome/react-fontawesome"),
    '@fortawesome/fontawesome-svg-core':path.resolve(__dirname , "node_modules/@fortawesome/fontawesome-svg-core"),
    '@fortawesome/free-brands-svg-icons':path.resolve(__dirname , "node_modules/@fortawesome/free-brands-svg-icons"),
    '@fortawesome/free-solid-svg-icons':path.resolve(__dirname , "node_modules/@fortawesome/free-solid-svg-icons")
  }
},

  build:{
    rollupOptions:{
      external:[
        "@fortawesome/react-fontawesome",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome" ,
        "@emailjs/browser" 
      
      ]


    }
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, 'node_modules'),
  //     "@": path.resolve(__dirname, 'node_modules')
  //   }
  // }
})
