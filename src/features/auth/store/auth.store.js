import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/features/auth/services/auth.service'

export const useAuthStore = defineStore('auth', () => {

    /*
    * Usuario autenticado.
    */

    const user = ref(null)

    /*
    * Estado derivado de autenticación.
    */

    const isAuthenticated = computed(() => {

        return !!user.value

    })

    /*
    * Inicializa el listener de Firebase Auth.
    */

    const initAuth = () => {

        onAuthStateChanged(auth, (firebaseUser) => {

            user.value = firebaseUser

        })

    }

    /*
    * API pública.
    */

    return {
        user,
        isAuthenticated,
        initAuth
    }

})