<template>
  
    <swiper v-bind="swiperOpts" class="pb-5">
        <swiper-slide v-for="pet in props.pets" :key="pet.id">

                <PetCard
                    :id="pet.id"
                    :petThumb="pet.thumb"
                    :petType="pet.type"
                    :petTypeSlug="pet.type_slug"
                    :petName="pet.name"
                    :petNameSlug="pet.name_slug"
                    :petGender="pet.gender"
                    :petGenderSlug="pet.gender_slug"
                    :petAge="pet.age"
                    :petAgeUnit="pet.age_unit"
                    :petAgeSlug="pet.age_slug"
                    :petDescription="pet.description"
                    :petFeatured="pet.featured"
                    :petAdopted="pet.adopted"
                    @adopt="onAdopt"
                />
            
        </swiper-slide>
    </swiper>

</template>

<script setup>

    /*
    * Este carousel muestra las mascotas 
    * y es reutilizado dependiendo si muestras
    * mascotas relacionadas por Type (PetDetailView) o las mascotas destacadas (Home)
    */
    import { usePetsStore } from '@/features/pets/stores/pets.store'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, Pagination, Navigation } from 'swiper/modules'
    import PetCard from '@/features/pets/components/PetCard.vue'

    /*
    * Swiperjs Carousel
    */

    import 'swiper/css';
    import 'swiper/css/pagination'
    import 'swiper/css/navigation'

    const swiperOpts = {
        modules: [Autoplay, Pagination, Navigation],
        navigation: true,
        loop: true,
        autoplay: {
            delay: 6000,            
            disableOnInteraction: true,
            pauseOnMouseEnter: true,   
        },
        pagination: {
            clickable: true,        
            dynamicBullets: true,    
        },
        breakpoints: {
            400: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
        },
    }

    const props = defineProps({
        pets: {
            type: Array,
            default: () => []
        }
    })

    /*
    * Instancia del store global de mascotas.
    */

    const petsStore = usePetsStore()

    /*
    * Recibe el evento emitido por PetCard y delega
    * la actualización de estado al store.
    */

    const onAdopt = (id) => {
        petsStore.adoptPet(id)
    }

</script>