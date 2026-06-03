<style scoped>

/*
* Estilos locales del panel de filtros.
*
* Actualmente el componente utiliza únicamente
* estilos globales de Bootstrap.
*/

</style>

<template>

    <h6>Categorías:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow mb-3">
        <router-link class="list-group-item list-group-item-action" to="/pets">Gatitos <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Perritos <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Ver todos <i class="bi bi-chevron-right"></i></router-link>
    </div>

    <h6>Sexo:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow mb-3">
        <router-link class="list-group-item list-group-item-action" to="/pets">Macho <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Hembra <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Ver todos <i class="bi bi-chevron-right"></i></router-link>
    </div>

    <h6>Edad:</h6>
    <div class="list-group list-group-flush list-has-chevron small box-shadow">
        <router-link class="list-group-item list-group-item-action" to="/pets">Menores de 1 <sup>año</sup>  <i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Mayores a 1 <sup>año</sup> y menores a 7 <sup>años</sup><i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Mayores de 7 <sup>años</sup><i class="bi bi-chevron-right"></i></router-link>
        <router-link class="list-group-item list-group-item-action" to="/pets">Ver todos <i class="bi bi-chevron-right"></i></router-link>
    </div>

</template>