/*
* Composable encargado de sincronizar:
*
* URL -> Filtros
* Filtros -> URL
*
* De esta forma la ruta se convierte en la fuente
* de verdad del estado de búsqueda.
*/

import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePetsStore } from '@/stores/pets.store'

/*
* Expone la lógica reutilizable de filtrado para
* cualquier componente que necesite interactuar
* con los parámetros de búsqueda.
*/

export function usePetFilters() {

    /*
    * Router:
    *
    * route  -> lectura de parámetros actuales.
    * router -> navegación y actualización de URL.
    *
    * petsStore -> persistencia global de filtros.
    */

    const route = useRoute()

    const router = useRouter()

    const petsStore = usePetsStore()

    /*
    * Construye un objeto reactivo a partir de los
    * parámetros presentes en la URL.
    *
    * Si algún parámetro no existe se utiliza un
    * valor por defecto.
    */

    const filters = computed(() => {

        console.log('route.params', route.params)

        return {
            type: route.params.type || 'all',
            age: route.params.age || 'all',
            gender: route.params.gender || 'all',
            page: Number(route.params.page) || 1
        }

    })

    /*
    * Construye un objeto reactivo a partir de los
    * parámetros presentes en la URL.
    *
    * Si algún parámetro no existe se utiliza un
    * valor por defecto.
    */

    watch(filters, (newFilters) => {

        console.log('WATCH EJECUTADO', newFilters)

        petsStore.setFilters(newFilters)

    }, { immediate: true })

    /*
    * Actualiza los filtros navegando hacia una nueva
    * URL conservando los valores que no cambian.
    *
    * Esto permite compartir enlaces y mantener
    * sincronizado el estado de la aplicación.
    */

    const updateFilters = ({
        type,
        age,
        gender,
        page
    }) => {

        router.push({

            name: 'pets',

            params: {
                type: type || filters.value.type,
                age: age || filters.value.age,
                gender: gender || filters.value.gender,
                page: page || filters.value.page
            }

        })

    }

    /*
    * API pública del composable.
    */

    return {
        filters,
        updateFilters
    }

}