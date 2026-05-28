import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/assets/styles/main.scss'

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

import App from '@/App.vue'
import router from '@/router/index.js'

const app = createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')