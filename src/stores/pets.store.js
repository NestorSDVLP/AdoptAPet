/*
* Dependencias para construir el store global.
*/

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/*
* Store principal del refugio.
*
* Centraliza:
*
* - mascotas
* - filtros
* - adopciones
* - consultas
*/

export const usePetsStore = defineStore('pets', () => {

    /*
    * Colección reactiva de mascotas.
    */

    const pets = ref([])

    /*
    * Estado global de filtros utilizado por
    * la vista de listado.
    */

    const filters = ref({
        type: 'all',
        age: 'all',
        gender: 'all',
        page: 1
    })

    /*
    * Obtiene las mascotas desde el archivo JSON.
    *
    * Implementa una carga simple en memoria para
    * evitar solicitudes repetidas.
    */

    const getPets = async () => {

        /*
        * Si los datos ya fueron cargados,
        * evita volver a solicitar el archivo.
        */

        if (pets.value.length) return

        /*
        * Obtiene y almacena los datos de mascotas.
        */

        const response = await fetch('/data/pets/pets.json')

        const data = await response.json()

        pets.value = data

    }

    /*
    * Actualiza el estado global de filtros.
    */

    const setFilters = (newFilters) => {

        filters.value.type = newFilters.type

        filters.value.age = newFilters.age

        filters.value.gender = newFilters.gender

        filters.value.page = newFilters.page

    }

    /*
    * Lista derivada que aplica todos los filtros
    * activos sobre la colección principal.
    *
    * Se recalcula automáticamente cuando cambian
    * mascotas o filtros.
    */

    const filteredPets = computed(() => {

        return pets.value.filter((pet) => {

            const matchType =
                filters.value.type === 'all'
                ||
                pet.type_slug === filters.value.type

            const matchAge =
                filters.value.age === 'all'
                ||
                pet.age_slug === filters.value.age

            const matchGender =
                filters.value.gender === 'all'
                ||
                pet.gender_slug === filters.value.gender

            return (
                matchType
                &&
                matchAge
                &&
                matchGender
            )

        })

    })

    /*
    * Obtiene una mascota específica según su id.
    *
    * Actualmente realiza una nueva lectura del JSON.
    *
    * Futuramente podría reutilizar los datos ya
    * presentes en memoria.
    */

    const getPet = async (slug) => {

        const response = await fetch('/data/pets/pets.json')

        const data = await response.json()

        pets.value = data

        return pets.value.find(item => item.name_slug === String(slug));

    }

    /*
    * Marca una mascota como adoptada.
    */

    const adoptPet = (id) => {

        /*
        * Busca la mascota dentro de la colección.
        */

        const pet = pets.value.find((item) => {

            return item.id === id

        })

        /*
        * Evita modificaciones inválidas:
        *
        * - mascota inexistente
        * - mascota ya adoptada
        */

        if (!pet) return

        if (pet.adopted) return

        /*
        * Actualiza el estado de adopción.
        */

        pet.adopted = true

    }

    /*
    * Colección de mascotas destacadas.
    *
    * Utilizada por carousel del Home.
    */

    const featuredPets = computed(() => {

        return pets.value.filter((pet) => {

            return pet.featured

        })

    })

    /*
    * Colección de mascotas adoptadas.
    *
    * Utilizada por el offcanvas del header.
    */

    const adoptedPets = computed(() => {

        return pets.value.filter((pet) => {

            return pet.adopted

        })

    })

    /*
    * Cantidad total de mascotas adoptadas.
    *
    * Utilizado por el contador del header.
    */

    const adoptedCount = computed(() => {

        return adoptedPets.value.length

    })

    /*
    * API pública expuesta por el store.
    */

    return {
        pets,
        filters,
        filteredPets,
        getPets,
        getPet,
        setFilters,
        adoptPet,
        featuredPets,
        adoptedPets,
        adoptedCount
    }

})