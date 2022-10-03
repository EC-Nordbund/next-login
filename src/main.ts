import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from "./vuetify";

if(import.meta.env.MODE === 'production') {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/login/sw.js', {
      scope: '/login'
    })
  }
}

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
