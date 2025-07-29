import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
 
  build:{
    assetsPublicPath:'./',
    rollupOptions:{
      external:[
        "@fortawesome/react-fontawesome",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@emailjs/browser",
        'D:\\me _port\\my-project\\src\\assets\\image _4.jpg'
      
      ]
    }
      

    }
  })
