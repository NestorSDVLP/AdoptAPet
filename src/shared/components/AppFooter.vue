<template>

    <a class="fab-adopted-count" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAdoptedPets">
        <img src="@/assets/images/logo.svg" class="logo">
        <span class="badge text-bg-dark rounded-pill ms-1">{{ petsCount }}</span>
    </a>

    <footer class="text-center pb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <p class="small opacity-50 mb-5">Este es un proyecto web de simulación con fines educativos. No se recolectan, almacenan ni comparten datos personales. Tu privacidad está protegida y toda la información es ficticia.</p>
                </div>
            </div>      
        </div>
    </footer>

</template>

<script setup>

    /*
    * Utilidades reactivas utilizadas por el layout.
    */

    import { computed } from 'vue'

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

</script>