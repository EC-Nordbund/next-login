import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  base: "/verwaltung/",
  server: {
    port: 3001,
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: './src/vuetify.config.scss'
      }
    })
  ]
})
