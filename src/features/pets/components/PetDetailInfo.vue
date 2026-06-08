<style scoped>

/*
* Estilos exclusivos de la vista de detalle.
*/

</style>

<template>

    <section :id="`detailInfoPet-${pet.id}`" v-if="pet">
        <div class="row g-5">
            <div class="col-6">
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
            <div class="col-6">
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
                    <div class="col-sm-5">
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

/*
* Dependencias utilizadas:
*
* - ref: estado reactivo local.
* - onMounted: ejecuta lógica al montar el componente.
* - useRoute: acceso a parámetros de la URL.
* - usePetsStore: acceso al estado global de mascotas.
*/

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { usePetsStore } from '@/stores/pets.store'

const route = useRoute()

const petsStore = usePetsStore()

/*
* Estado reactivo que almacenará la mascota
* obtenida desde el store.
*/

const pet = ref(null)

/*
* Al cargar el componente se obtiene el id desde
* la URL y se consulta la información completa
* de la mascota en el store.
*/

onMounted(async () => {
    pet.value = await petsStore.getPet(route.params.slug)
})

/*
* Marca la mascota actual como adoptada.
*
* La actualización del estado se realiza
* centralmente desde Pinia.
*/

const adoptPet = () => {
    petsStore.adoptPet(pet.value.id)
}

</script>