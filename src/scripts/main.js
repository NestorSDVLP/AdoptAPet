/*
* Dependencias base de Vue y Pinia.
*/

import { createApp } from 'vue'
import { createPinia } from 'pinia'

/*
* Hoja de estilos principal de la aplicación.
*/

import '@/assets/styles/main.scss'

/*
* Recursos visuales de Bootstrap.
*
* - Bootstrap Icons
* - Componentes JS de Bootstrap
*/

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

/*
* Componente raíz y configuración de rutas.
*/

import App from '@/App.vue'
import router from '@/router/index.js'

/*
* Inicialización de la aplicación.
*
* Registra:
*
* - Pinia
* - Vue Router
*
* Finalmente monta App.vue sobre #app.
*/

const app = createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')