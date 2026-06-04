<template>

    <h6>Edad:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow mb-3">
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.age === 'puppy' }" 
            @click.prevent="selectAge('puppy')">
                Cahorros <small class="opacity-75">min: 1 <sup>mes</sup> max: 1 <sup>año</sup></small>  <i class="bi bi-chevron-right"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.age === 'young' }" 
            @click.prevent="selectAge('young')">
                Jóvenes <small class="opacity-75">min: 1 <sup>año</sup> y max: a 3 <sup>años</sup></small> <i class="bi bi-chevron-right"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.age === 'adult' }" 
            @click.prevent="selectAge('adult')">
                Adultos <small class="opacity-75">min: 3 <sup>años</sup> y max: a 7 <sup>años</sup></small> <i class="bi bi-chevron-right"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.age === 'senior' }" 
            @click.prevent="selectAge('senior')">
                Seniors <small class="opacity-75">min: 7 <sup>años</sup></small> <i class="bi bi-chevron-right"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.age === 'all' }" 
            @click.prevent="selectAge('all')">
                Ver todos <i class="bi bi-chevron-right"></i>
        </a>
    </div>
    
</template>

<script setup>

    const props = defineProps({
        filters: Object
    })

    const emit = defineEmits(['change'])

    const selectAge = (age) => {
        emit('change', {
            age,
            page: 1
        })
    }

</script>