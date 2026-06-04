<template>

    <!-- Empty State: Si el resultado de mascotas filtradas es igual a cero muestro mensaje -->

    <PetListEmpty v-if="!petsStore.filteredPets.length"/>

    <div v-else>

        <div class="row g-4">

            <div v-for="pet in petsStore.filteredPets" :key="pet.id" :id="pet.id" class="col-sm-6">
                
                <PetCard
                    :id="pet.id"
                    :petThumb="pet.thumb"
                    :petType="pet.type"
                    :petTypeSlug="pet.type_slug"
                    :petName="pet.name"
                    :petNameSlug="pet.name_slug"
                    :petGender="pet.gender"
                    :petGenderSlug="pet.gender_slug"
                    :petAge="pet.age"
                    :petAgeUnit="pet.age_unit"
                    :petAgeSlug="pet.age_slug"
                    :petDescription="pet.description"
                    :featured="pet.featured"
                    :adopted="pet.adopted"
                    @adopt="onAdopt"
                />

            </div>

        </div>

        <AppPagination/>

    </div>

</template>

<script setup>

    /*
    * Dependencias:
    *
    * - PetCard: representación visual de cada mascota.
    * - usePetFilters: sincronización URL <-> filtros.
    * - usePetsStore: acceso al estado global.
    */

    import { ref, onMounted } from 'vue'
    import PetCard from '@/features/pets/components/PetCard.vue'
    import AppPagination from '@/shared/components/AppPagination.vue'
    import { usePetFilters } from '@/features/pets/composables/usePetsFilters.js'
    import { usePetsStore } from '@/stores/pets.store'
    import PetListEmpty from '@/features/pets/components/PetListEmpty.vue'

    /*
    * Instancia del store global de mascotas.
    */

    const petsStore = usePetsStore()

    /*
    * Inicializa la sincronización entre parámetros
    * de la ruta y filtros almacenados en Pinia.
    */

    usePetFilters()

    /*
    * Obtiene el listado de mascotas cuando el
    * componente es renderizado por primera vez.
    */

    onMounted(async () => {

        await petsStore.getPets()

    })

    /*
    * Recibe el evento emitido por PetCard y delega
    * la actualización de estado al store.
    */

    const onAdopt = (id) => {
        petsStore.adoptPet(id)
    }

</script>