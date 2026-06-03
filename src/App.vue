<template>

  <header class="bg-primary bg-gradient box-shadow fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg px-0">
        <a class="navbar-brand text-dark" href="/">
          <h1 class="h2 m-0">Adopt a Pet&reg;</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav align-items-center ms-auto me-0">
            <li class="nav-item">
              <router-link class="nav-link text-dark active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-dark" to="/pets">Refugio</router-link>
            </li>
            <li class="nav-item h6 ms-3 mb-0">
              <div class="d-flex align-items-center">
                Adoptados
                <span class="badge text-bg-dark rounded-pill ms-1">{{ petsCount }}</span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <main class="pt-5">

        <!--
          Área principal donde Vue Router renderiza
          las vistas activas.
        -->
    
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">

                <!--
                Transición utilizada al cambiar de ruta.
                -->

                <component :is="Component" :key="route.path" />

            </transition>
        </router-view>

  </main>

  <footer class="text-center pb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <p class="small opacity-50 m-0">Este es un proyecto web de simulación con fines educativos. No se recolectan, almacenan ni comparten datos personales. Tu privacidad está protegida y toda la información es ficticia.</p>
        </div>
      </div>      
    </div>
  </footer>

</template>

<script setup>

  /*
  * Utilidades reactivas utilizadas por el layout.
  */

  import { computed } from 'vue'

  /*
  * Acceso al estado global de mascotas.
  */

  import { usePetsStore } from '@/stores/pets.store'

  /*
  * Computed que expone el total de mascotas
  * adoptadas para el contador del header.
  */

  const petsStore = usePetsStore()

  const petsCount = computed(() => petsStore.adoptedCount)

</script>