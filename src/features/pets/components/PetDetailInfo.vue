<template>

    <section :id="`detailInfoPet-${pet.id}`" v-if="pet">
        <div class="row justify-content-center g-3 g-lg-5">
            <div class="col-sm-8 col-lg-6">
                <div class="position-relative">

                    <div v-if="pet.featured">
                        <div class="position-absolute bg-primary text-dark py-1 px-2">
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                    </div>

                    <img :src="pet.thumb" class="w-100" :alt="pet.name">
                </div>
            </div>
            <div class="col-sm-8 col-lg-6">
                <small class="opacity-50">{{ pet.type }}</small>
                <h2>{{ pet.name }}</h2>
                <div class="row">
                    <div class="col-4">
                        <small class="opacity-50">Sexo:</small>
                        <p class="h5">{{ pet.gender }}</p>
                    </div>
                    <div class="col-4">
                        <small class="opacity-50">Edad:</small>
                        <p class="h5">{{ pet.age }} <sup>{{ pet.age_unit }}</sup></p>
                    </div>
                </div>
                <article class="opacity-75 mt-4 mb-5" v-html="pet.description"></article>

                <div v-if="authStore.isAuthenticated">
                    <div class="row">
                        <div class="col-8 col-sm-6 col-lg-5">
                            <button type="button" class="btn-adopt btn btn-primary btn-lg rounded-pill w-100" @click="adoptPet">
                                <i class="bi bi-check-circle-fill"></i> {{ pet.adopted ? 'Adoptado' : 'Adoptar' }}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div v-else>
                    <p class="lh-sm opacity-75 m-0">
                        <router-link class="h6 text-decoration-none text-dark" to="/login"><i class="bi bi-exclamation-circle me-1"></i> Ingresá acá</router-link> para adoptar una mascota</p>
                </div>
                
            </div>
        </div>
    </section>

</template>

<script setup>

    /*
    * Dependencias utilizadas:
    *
    * - useAuthStore: Habilita el boton Adoptar
    *
    */

    import { useAuthStore } from '@/features/auth/store/auth.store'

    const props = defineProps({
        pet: Object
    })

    /*
    * ******************************************************************************.
    */

    const authStore = useAuthStore()
    
    /*
    * Define los eventos personalizados que este componente
    * puede emitir hacia su componente padre.
    *
    * En este caso se utiliza para notificar que una mascota
    * fue seleccionada para adopción.
    */

    const emit = defineEmits(['adopt'])

    /*
    * Emite el evento "adopt" enviando el id de la mascota.
    *
    * La lógica de adopción no vive aquí.
    * Este componente sólo informa la acción y delega
    * la actualización del estado al componente padre.
    */

    const adoptPet = () => {
        emit('adopt', props.pet.id)
    }

</script>