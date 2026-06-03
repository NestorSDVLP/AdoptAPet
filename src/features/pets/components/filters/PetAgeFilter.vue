<template>

    <h6>Edad:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow">
        
        <router-link class="list-group-item list-group-item-action" to="/pets">
            Cahorros <small class="opacity-75">min: 1 <sup>mes</sup> max: 1 <sup>año</sup></small>  <i class="bi bi-chevron-right"></i>
        </router-link>

        <router-link class="list-group-item list-group-item-action" to="/pets">
            Jóvenes <small class="opacity-75">min: 1 <sup>año</sup> y max: a 3 <sup>años</sup></small> <i class="bi bi-chevron-right"></i>
        </router-link>

        <router-link class="list-group-item list-group-item-action" to="/pets">
            Adultos <small class="opacity-75">min: 3 <sup>años</sup> y max: a 7 <sup>años</sup></small> <i class="bi bi-chevron-right"></i>
        </router-link>

        <router-link class="list-group-item list-group-item-action" to="/pets">
            Seniors <small class="opacity-75">min: 7 <sup>años</sup></small> <i class="bi bi-chevron-right"></i>
        </router-link>

        <router-link class="list-group-item list-group-item-action" to="/pets">
            Ver todos <i class="bi bi-chevron-right"></i>
        </router-link>

    </div>

</template>

<script setup>

    const props = defineProps({
        filters: Object
    })

    const emit = defineEmits(['change'])

</script>