<template>

    <section>
    
        <section class="py-5">
            <div class="container">
                <div class="card text-bg-dark box-shadow">
                    <img src="@/assets/images/hero.webp" class="card-img" alt="...">
                    <div class="card-img-overlay d-flex align-items-end" style="background: rgba(0,0,0,.4);">
                        <div class="w-100 p-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-7 text-center">
                                    <h1 class="lh-1 mb-2">Vos les das tu casa <br>y ellos te dan su corazón</h1>
                                    <p class="mb-4">Alguien te espera para quererte sin condiciones. <br>Abrí tu casa, abrí tu corazón. <strong>Adoptá.</strong></p>
                                    <router-link class="btn btn-primary rounded-pill px-5" to="/pets">Ver Refugio <i class="bi bi-chevron-right"></i></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pb-5">
            <div class="container">
                <h2>Mascotas destacadas</h2>
                <hr class="mb-4">

                <PetsFeaturedCarousel :pets="petsStore.featuredPets"/>

            </div>
        </section>

    </section>

</template>

<script setup>

    import { onMounted } from 'vue'
    import { usePetsStore } from '@/stores/pets.store'
    import PetsFeaturedCarousel from '@/features/pets/components/PetsCarousel.vue'

    const petsStore = usePetsStore()

    onMounted(async () => {

        await petsStore.getPets()

    })

</script>