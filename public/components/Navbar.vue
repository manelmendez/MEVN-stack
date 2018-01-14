<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src="assets/images/favicon.ico" width="30" height="30">
      <router-link :to="{path: '/'}" class="navbar-brand">Demo de Vue</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{path: '/'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path: '/signup'}" class="nav-link">Sign Up</router-link>
        <!--    <a class="nav-link" href="/signup">Sign Up</a>    -->
          </li>
          <li class="nav-item">
            <router-link :to="{path: '/signin'}" class="nav-link">Sign In</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{path: '/about'}" class="nav-link">About</router-link>
          </li>
        </ul>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Opciones
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <router-link :to="{path: '/logout'}" class="dropdown-item">Ajustes</router-link>
            <router-link :to="{path: '/logout'}" class="dropdown-item">Logout</router-link>
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

  }),
  methods: {
    logout() {
      console.log("FUNCTION TO LOGOUT")
    }
  }
}
</script>
<style>
</style>