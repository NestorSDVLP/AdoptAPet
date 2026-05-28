<template>

    <div class="row g-4">

        <div v-for="pet in petsStore.pets" :key="pet.id" class="col-sm-6">
            
            <PetCard
                :id="pet.id"
                :petThumb="pet.thumb"
                :petType="pet.type"
                :petName="pet.name"
                :petGender="pet.gender"
                :petAge="pet.age"
                :petAgeUnit="pet.age_unit"
                :petDescription="pet.description"
                :adopted="pet.adopted"
                @adopt="onAdopt"
            />

        </div>

    </div>

</template>

<script setup>

    import { ref, onMounted } from 'vue'
    import PetCard from '@/features/pets/components/PetCard.vue'
    import { usePetsStore } from '@/stores/pets.store'

    const petsStore = usePetsStore()

    onMounted(() => {
        petsStore.getPets()
    })

    const onAdopt = (id) => {
        petsStore.adoptPet(id)
    }

</script>