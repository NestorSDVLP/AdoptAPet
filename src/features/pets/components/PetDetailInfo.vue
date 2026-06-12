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

                <div class="row">
                    <div class="col-sm-6 col-lg-5">
                        
                        <PetAdoptButton
                            :adopted="pet.adopted"
                            :isAuthenticated="authStore.isAuthenticated"
                            :customClass="'btn-lg'"
                            @adopt="adoptPet"
                            @cancel-adoption="cancelAdoption"/>

                    </div>
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

    import PetAdoptButton from '@/features/pets/components/PetAdoptButton.vue'

    const props = defineProps({
        pet: Object
    })

    /*
    * ******************************************************************************.
    */

    const authStore = useAuthStore()
    
     /*
    * Emitir eventos al padre de:
    *
    * - Adopción
    * - Cancelación de adopción
    */

    const emit = defineEmits([
        'adopt',
        'cancel-adoption'
    ])

    const adoptPet = () => {
        emit('adopt', props.id)
    }

    const cancelAdoption = () => {
        emit('cancel-adoption', props.id)
    }

</script>