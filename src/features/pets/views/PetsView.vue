<template>
    
    <section class="py-5">
        <div class="container">
            <h1>Refugio</h1>
            <hr class="mb-4">
            
            <AppBreadcrumbs/>

            <div class="row g-4">
                <div class="col-3">

                    <PetFilters/>
                    
                </div>
                <div class="col-9">

                    <PetList/>

                </div>
            </div>
        </div>
    </section>

</template>

<script setup>

    /*
    * PetFilters: navegación por filtros.
    *
    * PetList: renderizado de resultados.
    *
    * Esta vista actúa como layout principal
    * del refugio.
    */

    import { ref, onMounted } from 'vue'
    import AppBreadcrumbs from '@/shared/components/AppBreadcrumbs.vue'
    import PetList from '@/features/pets/components/PetList.vue'
    import PetFilters from '@/features/pets/components/filters/PetFilters.vue'

</script>