import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  base: "/login/",
  server: {
    port: 3002,
  },
  plugins: [
    vue(),
    vuetify({
      styles: {
        configFile: './src/vuetify.config.scss'
      }
    })
  ],
  build: {
    target: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ],
    cssTarget: [
      'chrome89', 'edge89', 'safari15.4', 'firefox96', 'opera75', 'ios15.4'
    ]
  }
})
