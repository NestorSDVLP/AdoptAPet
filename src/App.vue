<template>

  <AppHeader/>

  <main class="pt-5">

        <!--
          Área principal donde Vue Router renderiza
          las vistas activas.
        -->
    
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">

                <!--Transición utilizada al cambiar de ruta.-->

                <component :is="Component" :key="route.path" />

            </transition>
        </router-view>

  </main>

  <AppFooter/>

</template>

<script setup>

  import AppHeader from '@/shared/components/AppHeader.vue'
  import AppFooter from '@/shared/components/AppFooter.vue'

</script>