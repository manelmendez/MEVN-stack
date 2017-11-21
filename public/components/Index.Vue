<template>
  <div id="app" class="app-content h-100">
      <div class="row align-items-center h-100">
        <div class="col text-center">
        <router-link :to="{path: '/signup'}"><button id="signup" class="btn btn-outline-primary">{{ signup }}</button></router-link>
        <router-link :to="{path: '/signin'}"><button id="signin" class="btn btn-outline-success">{{ signin }}</button></router-link>
        <p></p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        signup: 'Registrar',
        signin: 'Iniciar Sesión'
      }
    },
    methods: {},
    events: {}
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
#signup{
  margin-right: 10px
}
</style>