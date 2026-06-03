<style scoped>

/*
* Estilos locales de la vista de detalle.
*/

</style>

<template>
    
    <section class="py-5">
        <div class="container">
            <h1>Refugio</h1>
            <hr class="mb-4">

            <AppBreadcrumbs/>

            <PetDetailInfo/>

        </div>
    </section>

</template>

<script setup>

    /*
    * PetDetailInfo contiene toda la lógica y
    * representación de la mascota seleccionada.
    *
    * Esta vista funciona como contenedor de página.
    */

    import { ref, onMounted } from 'vue'
    import { usePetsStore } from '@/stores/pets.store'
    import PetDetailInfo from '@/features/pets/components/PetDetailInfo.vue'
    import AppBreadcrumbs from '@/shared/components/AppBreadcrumbs.vue'

</script>