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
import { usePetsStore } from '@/features/pets/stores/pets.store'

import { PET_FILTERS } from '@/features/pets/constants/constantsPetsFilters'

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

        petsStore.setFilters(newFilters)

    }, { immediate: true })

    /*
    *
    *
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    *
    *
    */

    const updateFilters = ({
        type,
        age,
        gender,
        page
    }) => {

        const nextType = type || filters.value.type
        const nextAge = age || filters.value.age
        const nextGender = gender || filters.value.gender

        const filtersChanged =
            nextType !== filters.value.type ||
            nextAge !== filters.value.age ||
            nextGender !== filters.value.gender

        router.push({

            name: 'pets',

            params: {
                type: nextType,
                age: nextAge,
                gender: nextGender,
                page: filtersChanged
                    ? 1
                    : page || filters.value.page
            }

        })

    }

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

        if (filters.value.type !== 'all') {

            items.push({

                label: `Tipo: ${
                    PET_FILTERS.type[
                        filters.value.type
                    ].label
                }`

            })

        }

        if (filters.value.gender !== 'all') {

            items.push({

                label: `Género: ${
                    PET_FILTERS.gender[
                        filters.value.gender
                    ].label
                }`

            })

        }

        if (filters.value.age !== 'all') {

            items.push({

                label: `Edad: ${
                    PET_FILTERS.age[
                        filters.value.age
                    ].label
                }`

            })

        }

        return items

    })

    /*
    * Paginación:
    *
    * A partir del listado filtrado se calcula:
    *
    * - cantidad total de resultados
    * - cantidad total de páginas
    * - subconjunto correspondiente a la página actual
    *
    * La página activa se obtiene desde la URL,
    * manteniendo una única fuente de verdad.
    */

    const PETS_PER_PAGE = 4

    /*
    *
    *
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    *
    *
    */

    const totalPages = computed(() => {

        return Math.ceil(
            petsStore.filteredPets.length /
            PETS_PER_PAGE
        )

    })

    /*
    *
    *
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    *
    *
    */

    const paginatedPets = computed(() => {

        const start = (
            filters.value.page - 1
        ) * PETS_PER_PAGE

        const end = start + PETS_PER_PAGE

        return petsStore.filteredPets.slice(
            start,
            end
        )

    })

    /*
    *
    *
    * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    *
    *
    */

    const totalResults = computed(() => {
        return petsStore.filteredPets.length
    })

    /*
    * API pública del composable.
    */

    return {
        filters,
        updateFilters,
        breadcrumbs,
        paginatedPets,
        totalPages,
        totalResults
    }

}