<template>

    <header id="mainHeader" class="bg-primary bg-gradient box-shadow fixed-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg px-0">
                <router-link class="navbar-brand text-dark" to="/">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/images/logo.svg" class="logo me-2">
                        <h1 class="h2 m-0">AdoptAPet&reg;</h1>
                    </div>
                </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNav">
                <ul class="navbar-nav align-items-center ms-auto me-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-dark active" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-dark" to="/pets">Refugio</router-link>
                    </li>

                    <li v-if="!authStore.isAuthenticated" class="nav-item">
                        <router-link class="nav-link text-dark" to="/login"><i class="bi bi-person-fill opacity-50"></i> Ingresar</router-link>
                    </li>

                    <li v-if="authStore.isAuthenticated" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"><i class="bi bi-person-fill opacity-50"></i> Hola, {{ authStore.user.email.split('@')[0] }} <i class="bi bi-chevron-down ms-1"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end border-0 box-shadow">
                            <li>
                                <button class="dropdown-item" @click="handleLogout">Salir</button>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAdoptedPets">
                            <span class="d-flex-inline align-items-center">
                                Adoptados <span class="badge text-bg-dark rounded-pill ms-1">{{ petsCount }}</span>
                                <i class="bi bi-chevron-down ms-2"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    </header>

    <AppHeaderAdoptedOffcanvas/>

</template>

<script setup>

    /*
    * Utilidades reactivas utilizadas por el layout.
    */

    import { computed } from 'vue'
    import { useAuthStore } from '@/features/auth/store/auth.store'

    import AppHeaderAdoptedOffcanvas from '@/shared/components/AppHeaderAdoptedOffcanvas.vue'

    const authStore = useAuthStore()

    /*
    * Acceso al estado global de mascotas.
    */

    import { usePetsStore } from '@/features/pets/stores/pets.store'

    /*
    * Computed que expone el total de mascotas
    * adoptadas para el contador del header.
    */

    const petsStore = usePetsStore()

    const petsCount = computed(() => petsStore.adoptedCount)

    const handleLogout = async () => {
        await authStore.logoutUser()
    }

</script>