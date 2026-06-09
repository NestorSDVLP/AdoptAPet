import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { onAuthStateChanged } from 'firebase/auth'
import { auth, login, logout } from '@/features/auth/services/auth.service'

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
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    */

    onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        loadingAuth.value = false
    })

    /*
    * Inicializa el listener de Firebase Auth.
    */

    const initAuth = () => {

        onAuthStateChanged(auth, (firebaseUser) => {

            user.value = firebaseUser

        })

    }

    const loginUser = async (email, password) => {

        return await login(
            email,
            password
        )

    }

    const logoutUser = async () => {

        await logout()

    }

    /*
    * API pública.
    */

    return {
        user,
        isAuthenticated,
        initAuth,
        loginUser,
        logoutUser
    }

})