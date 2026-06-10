<template>

    <div v-if="props.isAuthenticated">

        <button
            v-if="!props.adopted"
            class="btn btn-primary rounded-pill w-100"
            @click="emit('adopt')">
                Adoptar
        </button>

        <button
            v-else
            class="btn btn-outline-danger rounded-pill w-100"
            @click="emit('cancel-adoption')">
                Cancelar adopción
        </button>

    </div>

    <div v-else>

        <router-link to="/login">
            Ingresá para adoptar
        </router-link>

    </div>

</template>

<script setup>

    /*
    * Props recibidas desde PetList.
    *
    * Representan toda la información necesaria para
    * renderizar una tarjeta individual de mascota.
    */

    const props = defineProps({
        adopted: Boolean,
        isAuthenticated: Boolean

    })


    /*
    * Define los eventos personalizados que este componente
    * puede emitir hacia su componente padre.
    *
    * En este caso se utiliza para notificar que una mascota
    * fue seleccionada para adopción.
    */

    const emit = defineEmits([
        'adopt',
        'cancel-adoption'    
    ])

    /*
    * Emite el evento "adopt" enviando el id de la mascota.
    *
    * La lógica de adopción no vive aquí.
    * Este componente sólo informa la acción y delega
    * la actualización del estado al componente padre.
    */

    /*const adoptPet = () => {
        emit('adopt')
    }*/

</script>