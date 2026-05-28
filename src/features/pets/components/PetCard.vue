<template>

    <div :id="`cardPet-${id}`" class="card-pet card border-0 box-shadow">
        <img :src="petThumb" class="card-img-top" :alt="petName">
        <div class="card-body">
            <small class="opacity-50">{{ petType }}</small>
            <h3 class="h2">{{ petName }}</h3>
            <div class="row">
                <div class="col-6">
                    <p class="h5">{{ petGender }}</p>
                </div>
                <div class="col-6">
                    <p class="h5">{{ petAge }} <sup>{{ petAgeUnit }}</sup></p>
                </div>
            </div>
            <article class="clamp-4 opacity-75" v-html="petDescription"></article>
        </div>
        <div class="card-footer bg-transparent border-top-0">
            <div class="row g-3">
                <div class="col-6">
                    <button type="button" class="btn-learnmore btn btn-outline-dark rounded-pill w-100">
                        Conocer más <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
                <div class="col-6">
                    <button type="button" class="btn-adopt btn btn-primary rounded-pill w-100" @click="adoptPet">
                        {{ adopted ? 'Adoptado' : 'Adoptar' }}
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