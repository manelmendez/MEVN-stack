<template>
  <div class="app-content">
    <div class="container-fluid">  
      <div class="row justify-content-md-center">
        <div class="col-6 elements">
          <div class="block">
            <h1 class="display-3">Error 404</h1>
            <p class="lead">Página no encontrada</p>
            <hr class="my-4">
            <p>La página que has solicitado no existe.</p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="/" role="button">Ir al índice</a>
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
.app-content {
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
  padding-top: 15%;
  padding-bottom: 15%;
}
.elements {
  margin-top: 5%;
}
</style>
