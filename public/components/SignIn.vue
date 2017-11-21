<template>
  <div id="app" class="app-content">
    <div class="row align-items-center justify-content-md-center h-100">
      <div class="col-4">
        <div id="flash_alert" ref="flash_alert" v-show="toggle" class="alert alert-success animated flipInX" role="alert">
          Te has logueado correctamente!
        </div>
        <div id="negative_flash_alert" ref="negative_flash_alert" v-show="toggle_negative" class="alert alert-danger animated flipInX" role="alert" v-html="negative_message">
        </div>
        <div class="jumbotron">
          <div class="form-group">
            <label for="email">Introduce tu email</label>
            <input type="email" class="form-control" v-model="email" aria-describedby="email" placeholder="Email">
            <small id="emailHelp" class="form-text text-muted">No compartiremos tu email con nadie.</small>
          </div>
          <div class="form-group">
            <label for="password">Introduce tu contraseña</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-info btn-lg btn-block" v-on:click="signIn()">Iniciar sesión</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
    email: '',
    password: '',
    toggle: false,
    toggle_negative: false,
    negative_message: "La contraseña es incorrecta."
    }
  },
  methods: {
    signIn() {
      let body = {
        email: this.email,
        password: this.password
      }
      let headers = {
        'Content-Type': 'application/json'
      }
      this.$http.post('http://localhost:3000/api/signin', body, headers)
      .then(response => {
        if(response.status === 200) {
          this.toggle= true
          setTimeout(() => {
          this.$router.push({ path: "/404" })
          }, 2000);
        }
      })
      .catch(error => {
        console.log(error.status);
        if (error.status === 404) {
          this.negative_message = "El usuario no existe."
          this.toggle_negative = true
          setTimeout(() => {
            this.toggle_negative = false
          }, 4000);
        }
        else if (error.status === 403) {
          this.negative_message = "La contraseña es incorrecta."
          this.toggle_negative = true
          setTimeout(() => {
            this.toggle_negative = false
          }, 4000);
        }
        else if (error.status === 500) {
          this.negative_message = "El servidor no responde."
          this.toggle_negative = true
          setTimeout(() => {
            this.toggle_negative = false
          }, 4000);
        }
        else {
          this.negative_message = "Error en el inicio de sesión."
          this.toggle_negative = true
          setTimeout(() => {
            this.toggle_negative = false
          }, 4000);
        }
      })
    }
  }
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
