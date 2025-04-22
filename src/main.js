import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 👈 import the router
import './style.css'

const app = createApp(App)

app.use(router) // 👈 tell Vue to use the router
app.mount('#app')