<template>
  <div class="about-content">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col-6 elements">
          <div class="block">
            <h1 class="display-3">About</h1>
            <p class="lead">Página creada por Manel Méndez</p>
            <hr class="my-4">
            <p>Este proyecto ha sido creado para probar el framework de front-end VueJS junto al back-end NodeJS.</p>
            <hr class="my-4">
            <p class="copyright row align-items-center justify-content-md-center h-100">
              Copyright (c) 2017 Manel Méndez. MIT License.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.about-content {
  background:url(../assets/images/wallpaper.jpg);
  background-size:cover;
  width: 100%;
  min-height:100%;
  position:fixed;
  align-items: center;
  align-content: center;
}
.block {
  background-color: rgba(355, 355, 355, 0.6);
  border-radius: 40px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.copyright {
  font-size: 10px;
}
.elements {
  margin-top: 5%;
}
</style>
