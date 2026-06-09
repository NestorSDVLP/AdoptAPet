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
            <div class="row g-3 align-items-center">
                <div class="col-lg-6">
                    <router-link :to="{ name: 'pet', params: { slug: petNameSlug } }" class="btn-learnmore btn btn-outline-dark rounded-pill w-100">
                        Conocer más <i class="bi bi-chevron-right"></i>
                    </router-link>
                </div>
                <div class="col-lg-6">
                    <div v-if="authStore.isAuthenticated"">
                        <button type="button" class="btn-adopt btn btn-primary rounded-pill w-100" @click="adoptPet">
                            <i class="bi bi-check-circle-fill"></i>  {{ petAdopted ? 'Adoptado' : 'Adoptar' }}
                        </button>
                    </div>
                    <div v-else>
                        <p class="small lh-sm text-center text-lg-start opacity-50 m-0">Ingresá para <h6 class="d-inline m-0">adoptar <br class="d-none d-lg-block">una mascota</h6></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

    import { useAuthStore } from '@/features/auth/store/auth.store'

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
        emit('adopt', props.id)
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