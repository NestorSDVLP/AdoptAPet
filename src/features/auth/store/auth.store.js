import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { onAuthStateChanged } from 'firebase/auth'
import { auth, login as loginService, logout as logoutService } from '@/features/auth/services/auth.service'

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
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    */

    const loadingAuth = ref(true)

    /*
    * Inicializa el listener de Firebase Auth.
    */

    const initAuth = () => {
        onAuthStateChanged(auth, (firebaseUser) => {
            user.value = firebaseUser
            loadingAuth.value = false
        })
    }

    const loginUser = async (email, password) => {
        return await loginService(email, password)
    }

    const logoutUser = async () => {
        return await logoutService()
    }

    /*
    * API pública.
    */

    return {
        user,
        isAuthenticated,
        loadingAuth,
        initAuth,
        loginUser,
        logoutUser
    }

})