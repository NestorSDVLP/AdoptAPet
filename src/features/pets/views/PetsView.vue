<template>

    <section>
    
        <section class="py-5">
            
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-6">
                        <h1 class="mb-0">Refugio</h1>
                    </div>
                    <div class="col-6 d-block d-lg-none text-end">
                        <button type="button" class="btn btn-outline-dark rounded-pill px-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasPetsListFilters">
                            <i class="bi bi-funnel-fill opacity-50 me-1"></i> Filtros
                        </button>
                    </div>
                </div>
                <hr class="mb-4">
                
                <div class="d-flex align-items-center justify-content-between mb-4">
                    
                    <div class="d-none d-sm-block">
                        <AppBreadcrumbs :items="breadcrumbs"/>
                    </div>

                    <PetFilteredCount :count="petsStore.filteredPets.length"/>

                </div>

                <div class="row g-lg-4">
                    <div class="col-lg-3 d-none d-lg-block">

                        <PetFilters/>
                        
                    </div>
                    <div class="col-lg-9">

                        <PetList/>

                    </div>
                </div>
            </div>
        </section>

        <section id="offcanvasPetsListFilters" class="offcanvas offcanvas-start" tabindex="-1">
            <div class="offcanvas-header bg-primary border-bottom">
                <h5 class="offcanvas-title">Filtros</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body flex-grow-0">
                
                <PetFilters/>

            </div>
        </section>

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
    import PetFilteredCount from '@/features/pets/components/PetFilteredCount.vue'
    import PetList from '@/features/pets/components/PetList.vue'
    import PetFilters from '@/features/pets/components/filters/PetFilters.vue'
    import { usePetFilters } from '@/features/pets/composables/usePetsFilters'
    import { usePetsStore } from '@/features/pets/stores/pets.store'

    const petsStore = usePetsStore()

    const { breadcrumbs } = usePetFilters()

    onMounted(async () => {

        await petsStore.getPets()

    })

</script>