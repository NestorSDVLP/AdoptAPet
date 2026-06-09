/*
* Configuración principal de Vue Router.
*/

import { createRouter, createWebHistory } from 'vue-router'


/*
* Vistas asociadas a cada ruta de la aplicación.
*/

import HomeView from '@/features/home/views/HomeView.vue'
import PetsView from '@/features/pets/views/PetsView.vue'
import PetDetailView from '@/features/pets/views/PetDetailView.vue'
import LoginView from '@/features/auth/views/LoginView.vue'

/*
* Definición del mapa de navegación.
*
* La ruta principal de mascotas redirecciona
* a una URL completa con filtros explícitos.
*
* Esto garantiza que todos los filtros tengan
* siempre un valor definido.
*/

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/pets',
        redirect: '/pets/type/all/age/all/gender/all/page/1'
    },

    {
        path: '/pets/type/:type/age/:age/gender/:gender/page/:page',
        name: 'pets',
        component: PetsView
    },
    {
        path: '/pet/:slug',
        name: 'pet',
        component: PetDetailView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },

]

/*
* Instancia del router utilizando History API.
*
* Las URLs se muestran sin hash (#).
*/

const router = createRouter({
    history: createWebHistory(),
    routes
})

/*
* Importación del store de UI para controlar el loader de navegación.
*/

import { useUiStore } from '@/shared/stores/ui.store'

/*
* Navigation Guards para activar y desactivar el loader global.
*/

/*router.beforeEach((to, from) => {
    const uiStore = useUiStore()
    uiStore.setLoading(true)
})*/

router.beforeEach(async (to, from) => {
    const uiStore = useUiStore()
    uiStore.setLoading(true)
    
    // Simula una demora de 1500ms para poder ver el diseño del spinner
    await new Promise(resolve => setTimeout(resolve, 1500))
})

router.afterEach(() => {
    const uiStore = useUiStore()
    uiStore.setLoading(false)
})

router.onError(() => {
    const uiStore = useUiStore()
    uiStore.setLoading(false)
})

/*
* Exporta el router para ser registrado
* en la aplicación principal.
*/

export default router