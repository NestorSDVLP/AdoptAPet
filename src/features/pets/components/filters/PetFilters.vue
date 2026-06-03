<template>

    <PetTypeFilter
        :filters="filters"
        @change="updateFilters"
    />

    <PetGenderFilter
        :filters="filters"
        @change="updateFilters"
    />

    <PetAgeFilter
        :filters="filters"
        @change="updateFilters"
    />

</template>

<script setup>

    /*
    * Dependencias:
    */

    import { usePetFilters } from '@/features/pets/composables/usePetsFilters.js'

    import PetTypeFilter from '@/features/pets/components/filters/PetTypeFilter.vue'
    import PetGenderFilter from '@/features/pets/components/filters/PetGenderFilter.vue'
    import PetAgeFilter from '@/features/pets/components/filters/PetAgeFilter.vue'

    const { filters, updateFilters } = usePetFilters()

</script>