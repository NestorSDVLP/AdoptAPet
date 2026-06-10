<template>

    <div class="offcanvas offcanvas-end fade box-shadow" tabindex="-1" id="offcanvasAdoptedPets">
        <div class="offcanvas-header bg-primary border-bottom">
            <h5 class="offcanvas-title">Adoptados</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">

            <div v-if="!petsStore.adoptedPets.length" class="empty-state text-center py-5 px-4">

                <div class="mb-2">
                    <i class="bi bi-emoji-wink-fill display-1 opacity-25"></i>
                </div>

                <h5 class="mb-3">Todavía no has adoptado a ninguna mascota</h5>

                <p class="opacity-75 mb-4">Comenzá a adoptar ahora ingresando a nuestro refugio:</p>

                <router-link class="btn btn-primary rounded-pill px-5" to="/pets">Ir al Refugio <i class="bi bi-chevron-right"></i></router-link>

            </div>

            <div v-else class="adopted-pets-list py-5 px-4">

                <h4 class="h4 mb-2">Este es tu listado de <br>mascotas adoptadas</h4>
                <p class="opacity-75 mb-4">Haciendo click en cualquier mascota de la lista <strong>vas a poder acceder a sus datos.</strong></p>

                <div class="list-group">
                    <div v-for="pet in petsStore.adoptedPets" :key="pet.id" class="list-group-item list-group-item-action p-0">
                        <router-link :to="{ name: 'pet', params: { slug: pet.name_slug } }" class="text-decoration-none text-dark">
                            <div class="row align-items-center">
                                <div class="col-5">
                                    <img :src="pet.thumb" class="w-100" :alt="pet.name">
                                </div>
                                <div class="col-7">
                                    <small class="opacity-50">{{ pet.type }}</small>
                                    <h4 class="h5 mb-0">{{ pet.name }}</h4>

                                    <div class="row">
                                        <div class="col-6">
                                            <small class="opacity-50">Sexo:</small>
                                            <p class="small">{{ pet.gender }}</p>
                                        </div>
                                        <div class="col-6">
                                            <small class="opacity-50">Edad:</small>
                                            <p class="small">{{ pet.age }} <sup>{{ pet.age_unit }}</sup></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>

            </div>

        </div>
    </div>  

</template>

<script setup>

    /*
    * Este offcanvas muestra la cantidad 
    * de mascotas adoptadas y su detalle.
    */

    import { usePetsStore } from '@/features/pets/stores/pets.store'

    const petsStore = usePetsStore()

</script>