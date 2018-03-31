<template>
  <div class="about-content">
    <div class="container-fluid">
      <b-row class="justify-content-md-center">
        <b-col class="about-elements">
          <div class="about-block">
            <h1 class="display-3">About</h1>
            <p class="lead">Página creada por Manel Méndez</p>
            <hr class="my-4">
            <p>Este proyecto ha sido creado para probar el framework de front-end VueJS junto al back-end NodeJS.</p>
            <hr class="my-4">
            <p class="copyright row align-items-center justify-content-md-center h-100">
              Copyright (c) 2017 Manel Méndez. MIT License.
            </p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

</script>

<style>
.about-content {
  background:url(../assets/images/dimension.png);
  background-size: auto,cover;
  width: 100%;
  min-height:100%;
  position: relative;
  align-items: center;
  align-content: center;
}
.about-block {
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
.about-elements {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 25%;
  margin-right: 25%;
}
</style>
