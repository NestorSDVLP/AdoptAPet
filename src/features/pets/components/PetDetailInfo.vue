<template>

    <section :id="`detailInfoPet-${pet.id}`" v-if="pet">
        <div class="row g-4">
            <div class="col-6">
                <img :src="pet.thumb" class="w-100" :alt="pet.name">                        
            </div>
            <div class="col-6">
                <small class="opacity-50">{{ pet.type }}</small>
                <h2>{{ pet.name }}</h2>
                <div class="row">
                    <div class="col-6">
                        <small class="opacity-50">Sexo:</small>
                        <p class="h5">{{ pet.gender }}</p>
                    </div>
                    <div class="col-6">
                        <small class="opacity-50">Edad:</small>
                        <p class="h5">{{ pet.age }} <sup>{{ pet.age_unit }}</sup></p>
                    </div>
                </div>
                <article class="opacity-75 mt-4 mb-5" v-html="pet.description"></article>

                <div class="row">
                    <div class="col-4">
                        <button type="button" class="btn-adopt btn btn-primary btn-lg rounded-pill w-100" @click="adoptPet">
                            <i class="bi bi-check-circle-fill"></i> {{ adopted ? 'Adoptado' : 'Adoptar' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePetsStore } from '@/stores/pets.store'

const route = useRoute()

const petsStore = usePetsStore()

const pet = ref(null)

onMounted(async () => {
    pet.value = await petsStore.getPet(route.params.id)
})

const adoptPet = () => {
    petsStore.adoptPet(pet.value.id)
}

</script>