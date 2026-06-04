<template>

    <h6>Sexo:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow mb-3">
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.gender === 'males' }" 
            @click.prevent="selectGender('males')">
                Machos <i class="bi bi-chevron-right"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.gender === 'females' }" 
            @click.prevent="selectGender('females')">
                Hembras <i class="bi bi-chevron-right"></i>
        </a>
        <a href="#" class="list-group-item list-group-item-action" 
            :class="{ active: filters.gender === 'all' }" 
            @click.prevent="selectGender('all')">
                Ver todos <i class="bi bi-chevron-right"></i>
        </a>
    </div>

</template>

<script setup>

    const props = defineProps({
        filters: Object
    })

    const emit = defineEmits(['change'])

    const selectGender = (gender) => {
        emit('change', {
            gender,
            page: 1
        })
    }

</script>