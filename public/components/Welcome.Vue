<template>
  <div class="welcome-content">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col text-center">
          <div class="welcome-block">
            <router-link :to="{path: '/signup'}"><button id="signup" class="btn btn-outline-primary">{{ signup }}</button></router-link>
            <router-link :to="{path: '/signin'}"><button id="signin" class="btn btn-outline-success">{{ signin }}</button></router-link>
            <p></p>
          </div>
        </div>
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
.welcome-content {
  background:url(../assets/images/wallpaper.jpg);
  background-size:cover;
  width: 100%;
  min-height:100%;
  height: 100%;
  position: fixed;
  align-items: center;
  align-content: center;
}
.welcome-block {
  margin-top: 20%;
}
#signup{
  margin-right: 10px;
}
</style>