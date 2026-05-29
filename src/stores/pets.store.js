import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePetsStore = defineStore('pets', () => {

    const pets = ref([])

    const getPets = async () => {

        const response = await fetch('/data/pets/pets.json')

        const data = await response.json()

        pets.value = data

    }

    const adoptPet = (id) => {

        const pet = pets.value.find(c => c.id === id)

        if (!pet) return

        if (pet.adopted) return

        pet.adopted = true

        console.log('Adoptado:', id)

    }

    const adoptedCount = computed(() => {
        return pets.value.filter(c => c.adopted).length
    })

    return {
        pets,
        getPets,
        adoptPet,
        adoptedCount
    }

})