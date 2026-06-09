<template>

    <section>

        <section class="py-5">
            <div class="container">
                <h1>Ingresar</h1>
                <hr class="mb-4">
                <div class="row justify-content-center">
                    <div class="col-sm-8 col-lg-4">
                        <div class="bg-primary box-shadow px-4 py-5 p-sm-5">
                            <form @submit.prevent="handleLogin">
                                <div class="row justify-content-center">
                                    <div class="col-5 col-sm-4">
                                        <img src="@/assets/images/logo.svg" class="w-100 mb-4">
                                    </div>
                                </div>
                                <h4 class="h4 text-center mb-1">Ingresá a AdoptAPet&reg; para adoptar tu nuevo amigo</h4>
                                <p class="text-center opacity-75 mb-4">Completá tus datos de ingreso</p>
                                <div class="form-floating mb-3">
                                    <input v-model="email" type="email" class="form-control" id="inputEmail" placeholder="name@example.com">
                                    <label for="inputEmail">E-mail</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input v-model="password" type="password" class="form-control" id="inputPassword" placeholder="Contraseña">
                                    <label for="inputPassword">Contraseña</label>
                                </div>
                                <p>¿No tenés cuenta? <a href="#" class="btn-link text-dark text-decoration-none h6">Registrate ahora <i class="bi bi-chevron-right"></i></a></p>
                                <button class="btn btn-dark w-100 py-2" type="submit">Ingresar</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>

</template>

<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/features/auth/store/auth.store'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = async () => {

  try {
    const result = await authStore.loginUser(email.value, password.value)

    console.log('LOGIN OK:', result.user)

    router.push('/')

  } catch (error) {

    console.error('LOGIN ERROR:', error.code, error.message)

  }

}

</script>