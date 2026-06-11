<template>

    <div :id="`cardPet-${id}`" class="card-pet card position-relative border-0 box-shadow">

        <div v-if="petFeatured">
            <div class="position-absolute bg-primary text-dark py-1 px-2">
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill me-1"></i>
                <i class="bi bi-star-fill"></i>
            </div>
        </div>
        
        <router-link :to="{ name: 'pet', params: { slug: petNameSlug } }">
            <img :src="petThumb" class="card-img-top" :alt="petName">
        </router-link>

        <div class="card-body">
            <small class="opacity-50">{{ petType }}</small>
            
            <router-link :to="{ name: 'pet', params: { slug: petNameSlug } }" class="text-decoration-none text-dark">
                <h3 class="h2">{{ petName }}</h3>
            </router-link>

            <div class="row">
                <div class="col-6">
                    <small class="opacity-50">Sexo:</small>
                    <p class="h5">{{ petGender }}</p>
                </div>
                <div class="col-6">
                    <small class="opacity-50">Edad:</small>
                    <p class="h5">{{ petAge }} <sup>{{ petAgeUnit }}</sup></p>
                </div>
            </div>
            <article class="clamp-4 opacity-75" v-html="petDescription"></article>
        </div>
        <div class="card-footer bg-transparent border-top-0 pb-4">
            <div class="row g-sm-3 align-items-center">
                <div class="col-lg-6">
                    <router-link :to="{ name: 'pet', params: { slug: petNameSlug } }" class="btn-learnmore btn btn-outline-dark rounded-pill w-100">
                        Conocer más
                    </router-link>
                </div>
                <div class="col-lg-6">

                    <PetAdoptButton
                        :adopted="petAdopted"
                        :isAuthenticated="authStore.isAuthenticated"
                        @adopt="adoptPet"
                        @cancel-adoption="cancelAdoption"/>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

    import { useAuthStore } from '@/features/auth/store/auth.store'

    import PetAdoptButton from '@/features/pets/components/PetAdoptButton.vue'

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

    /*
    * Props recibidas desde PetList.
    *
    * Representan toda la información necesaria para
    * renderizar una tarjeta individual de mascota.
    */

    const props = defineProps({
        id: Number,
        petType: String,
        petTypeSlug: String,
        petThumb: String,
        petName: String,
        petNameSlug: String,
        petGender: String,
        petAge: Number,
        petAgeUnit: String,
        petDescription: String,
        petFeatured: Boolean,
        petAdopted: Boolean
    })

</script>