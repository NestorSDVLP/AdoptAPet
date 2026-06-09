<template>

    <section>

        <section class="py-5">
            <div class="container">
                <h1>Ingresar</h1>
                <hr class="mb-4">
                <div class="row justify-content-center">
                    <div class="col-4">
                        <div class="bg-primary box-shadow p-5">
                            <form action="#">
                                <div class="row justify-content-center">
                                    <div class="col-4">
                                        <img src="@/assets/images/logo.svg" class="w-100 mb-4">
                                    </div>
                                </div>
                                <h4 class="h4 text-center mb-4">Completá tus <br>datos de ingreso</h4>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                    <label for="floatingInput">E-mail</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
                                    <label for="floatingPassword">Contraseña</label>
                                </div>
                                <p>¿No tenés cuenta? <a href="#" class="btn-link text-dark">Registrate ahora</a></p>
                                <button class="btn btn-dark w-100 py-2" type="submit">Ingresar</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </section>

</template>