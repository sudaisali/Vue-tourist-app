import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';




createApp(App).use(router).use(bootstrap).mount('#app')
