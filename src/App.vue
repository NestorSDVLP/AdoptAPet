<template>

  <header class="bg-primary bg-gradient">
    <div class="container">
      <nav class="navbar navbar-expand-lg px-0">
        <a class="navbar-brand text-dark" href="/">
          <h1 class="h2 m-0">Adopt a Pet</h1>
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
            <li class="nav-item ms-3">
              <div class="d-flex align-items-center">
                <!--<img src="@/media/images/cat_face.svg" class="me-1">-->
                <span class="badge text-bg-primary rounded-pill">{{ catsCount }}</span>
              </div>
            </li>              
          </ul>
        </div>
      </nav>
    </div>
  </header>

  <main>
        <router-view v-slot="{ Component, route }">
            <transition name="fade" mode="out-in">

                <component :is="Component" :key="route.path" />

            </transition>
        </router-view>

  </main>

</template>