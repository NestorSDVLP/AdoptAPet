<template>

    <section>
    
        <section class="py-5">
            <div class="container">
                <h1>Refugio</h1>
                <hr class="mb-4">

                <div class="mb-4">
                    <AppBreadcrumbs :items="breadcrumbs"/>
                </div>

                <PetDetailInfo/>

            </div>
        </section>

    </section>

</template>

<script setup>

    /*
    * PetDetailInfo contiene toda la lógica y
    * representación de la mascota seleccionada.
    *
    * Esta vista funciona como contenedor de página.
    */

    import { ref, onMounted, computed } from 'vue'
    import { usePetsStore } from '@/stores/pets.store'
    import { useRoute } from 'vue-router'
    import PetDetailInfo from '@/features/pets/components/PetDetailInfo.vue'
    import AppBreadcrumbs from '@/shared/components/AppBreadcrumbs.vue'

    const route = useRoute()

    const petsStore = usePetsStore()

    /*
    * Estado reactivo que almacenará la mascota
    * obtenida desde el store.
    */

    const pet = ref(null)

    /*
    * Al cargar el componente se obtiene el id desde
    * la URL y se consulta la información completa
    * de la mascota en el store.
    */

    onMounted(async () => {
        pet.value = await petsStore.getPet(route.params.slug)
    })

    /*
    *
    *
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    *
    *
    */

    const breadcrumbs = computed(() => {

        const items = [

            {
                label: 'Home',
                to: '/'
            },

            {
                label: 'Refugio',
                to: '/pets/type/all/age/all/gender/all/page/1'
            }

        ]

        if (pet.value) {

            items.push({
                label: pet.value.name
            })

        }

        return items

    })

</script>