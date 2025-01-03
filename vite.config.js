import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      common:"/src/common",
      images: ".public/images",
      locales :"/src/locales",
      utils :"/src/utils"
      // login : "/src/login"
    }
  }
});
