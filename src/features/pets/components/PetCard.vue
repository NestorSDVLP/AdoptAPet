<template>

    <div :id="`cardPet-${id}`" class="card-pet card border-0 box-shadow">
        
        <router-link :to="{ name: 'pet', params: { id: id } }">
            <img :src="petThumb" class="card-img-top" :alt="petName">
        </router-link>

        <div class="card-body">
            <small class="opacity-50">{{ petType }}</small>
            
            <router-link :to="{ name: 'pet', params: { id: id } }" class="text-decoration-none text-dark">
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
        <div class="card-footer bg-transparent border-top-0">
            <div class="row g-3">
                <div class="col-6">
                    <router-link :to="{ name: 'pet', params: { id: id } }" class="btn-learnmore btn btn-outline-dark rounded-pill w-100">
                        Conocer más <i class="bi bi-chevron-right"></i>
                    </router-link>
                </div>
                <div class="col-6">
                    <button type="button" class="btn-adopt btn btn-primary rounded-pill w-100" @click="adoptPet">
                        <i class="bi bi-check-circle-fill"></i>  {{ adopted ? 'Adoptado' : 'Adoptar' }}
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>

    const emit = defineEmits(['adopt'])

    const adoptPet = () => {
        emit('adopt', props.id)
    }

    const props = defineProps({
        id: Number,
        petType: String,
        petThumb: String,
        petName: String,
        petGender: String,
        petAge: Number,
        petAgeUnit: String,
        petDescription: String,
        adopted: Boolean
    })

</script>