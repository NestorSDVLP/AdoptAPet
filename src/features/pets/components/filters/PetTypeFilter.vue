<template>

    <h6>Categorías:</h6>

    <div class="list-group list-group-flush list-has-chevron small box-shadow mb-3">
        <a href="#" class="list-group-item list-group-item-action" :class="{ active: filters.type === 'cats' }" @click.prevent="selectType('cats')">Gatitos <i class="bi bi-chevron-right"></i></a>
        <a href="#" class="list-group-item list-group-item-action" :class="{ active: filters.type === 'dogs' }" @click.prevent="selectType('dogs')">Perritos <i class="bi bi-chevron-right"></i></a>
        <a href="#" class="list-group-item list-group-item-action" :class="{ active: filters.type === 'all' }" @click.prevent="selectType('all')">Ver todos <i class="bi bi-chevron-right"></i></a>
    </div>

</template>

<script setup>

    const props = defineProps({
        filters: Object
    })

    const emit = defineEmits(['change'])

    const selectType = (type) => {
        emit('change', {
            type,
            page: 1
        })
    }

</script>