<template>
    <Transition name="fade" mode="out-in">
    
        <section class="py-5">
            <div class="container">
                <div class="card text-bg-dark box-shadow">
                    <img src="@/assets/images/hero.webp" class="card-img" alt="...">
                    <div class="card-img-overlay d-flex align-items-end" style="background: rgba(0,0,0,.35);">
                        <div class="w-100 p-5">
                            <div class="row justify-content-center">
                                <div class="col-lg-7 text-center">
                                    <h1 class="lh-1 mb-2">Vos les dás tu casa <br>y ellos te dan su corazón</h1>
                                    <p class="mb-4">Ese perrito o gatito que hoy está en tránsito mañana puede ser tu sombra fiel. Te espera alguien que te va a querer sin condiciones, que va a estar en los días buenos y en los malos. <strong>Adoptá y dale la oportunidad de tener una vida juntos.</strong></p>
                                    <router-link class="btn btn-primary rounded-pill px-4" to="/pets">Ver Gatitos y Perritos</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Transition>
</template>