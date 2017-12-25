<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="assets/images/favicon.ico" width="30" height="30">
      <a class="navbar-brand" href="/">Demo de Vue</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">Home <!--span class="sr-only">(current)</span--></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signin">Sign In</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
        </ul>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Opciones
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/logout">Ajustes</a>
            <a class="dropdown-item" href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data: () => ({

  })
}
</script>
<style>
</style>