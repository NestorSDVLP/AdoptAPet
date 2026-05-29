<template>
    
    <section class="py-5">
        <div class="container">
            <h1>Refugio</h1>
            <hr class="mb-4">

            <PetDetailInfo/>

        </div>
    </section>

</template>

<script setup>

    import { ref, onMounted } from 'vue'
    import PetDetailInfo from '@/features/pets/components/PetDetailInfo.vue'

</script>