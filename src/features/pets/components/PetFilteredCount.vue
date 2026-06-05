<template>

    <div class="opacity-75">
        Mostrando <strong>{{ count }}</strong> mascota/s
    </div>

</template>

<script setup>

    /*
    *
    *
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    *
    *
    */

    const props = defineProps({
        count: Number
    })

</script>