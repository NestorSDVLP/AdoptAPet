<template>

    <h6>Sexo:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow mb-3">
        <router-link class="list-group-item list-group-item-action" to="/pets">Machos <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Hembras <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Ver todos <i class="bi bi-chevron-right"></i></router-link>
    </div>

</template>

<script setup>

    const props = defineProps({
        filters: Object
    })

    const emit = defineEmits(['change'])

</script>