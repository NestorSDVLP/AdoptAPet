<template>
    
    <section class="py-5">
        <div class="container">
            <h1>Refugio</h1>
            <hr class="mb-4">
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

    import { ref, onMounted } from 'vue'
    import PetList from '@/features/pets/components/PetList.vue'
    import PetFilters from '@/features/pets/components/PetFilters.vue'

</script>