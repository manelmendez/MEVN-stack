<template>
  <div id="app" class="app-content">
    <div class="row align-items-center justify-content-md-center h-100">
      <div class="jumbotron col-3">
        <form>
          <div class="form-group">
            <label for="email">Introduce tu email</label>
            <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">No compartiremos tu email con nadie.</small>
          </div>
          <div class="form-group">
            <label for="password">Introduce tu contraseña</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-info btn-lg btn-block">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
.app-content {
  background:url(../assets/images/wallpaper.jpg);
  background-size:cover;
  width: 100%;
  height:100%;
  position:fixed;
  align-items: center;
  align-content: center;
}
.jumbotron {
  background-color: rgba(355, 355, 355, 0.6);
}
</style>
