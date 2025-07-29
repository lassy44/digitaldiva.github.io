import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ],
 
  build:{
      external:[
        "@fortawesome/react-fontawesome",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@emailjs/browser" 
      
      ]


    }
  })
