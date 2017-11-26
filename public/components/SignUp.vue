<template>
  <div class="app-content">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-4 elements">
          <div id="flash_alert" ref="flash_alert" v-show="toggle" class="alert alert-success animated flipInX" role="alert">
            Te has registrado correctamente!
          </div>
          <div id="negative_flash_alert" ref="negative_flash_alert" v-show="toggle_negative" class="alert alert-danger animated flipInX" role="alert" v-html="negative_message">
          </div>
          <div class="block" :class="{'border border-danger': toggle_negative, 'border border-success': toggle}">
            <div class="form-group">
              <label for="username">Introduce tu nombre de usuario</label>
              <input type="text" class="form-control" v-model="username" aria-describedby="text" placeholder="Username">
            </div>
            <div class="form-group">
              <label for="email">Introduce tu email</label>
              <input type="email" class="form-control" v-model="email" aria-describedby="email" placeholder="Email">
              <small id="emailHelp" class="form-text text-muted">No compartiremos tu email con nadie.</small>
            </div>
            <div class="form-group">
              <label for="password">Introduce tu contraseña</label>
              <input type="password" class="form-control" v-model="password" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-info btn-lg btn-block" v-on:click="signUp()">Registrarse</button>
          </div>
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
      username: '',
      email: '',
      password: '',
      toggle: false,
      toggle_negative: false,
      negative_message: "La contraseña es incorrecta."
      }
    },
    methods: {
      signUp() {
        let body = {
          name: this.username,
          email: this.email,
          password: this.password
        }
        let headers = {
          'Content-Type': 'application/json'
        }
        this.$http.post('http://localhost:3000/api/signup', body, headers)
        .then(response => {
          if(response.status === 200) {
            this.toggle= true
            setTimeout(() => {
            this.$router.push({ path: "/" })
            }, 2000);
          }
          else if(response.status === 202) {
            this.negative_message = "Este email ya está registrado."
            this.toggle_negative = true            
            setTimeout(() => {
              this.toggle_negative = false            
            }, 4000);
          }
        })
        .catch(error => {
          console.log(error.status);
          if (error.status === 401) {
            this.negative_message = "Algunos de los datos introducidos no son correctos."
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
            this.negative_message = "Error en el registro."
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
.block {
  background-color: rgba(355, 355, 355, 0.6);
  border-radius: 5%;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 15%;
  padding-bottom: 15%;
}
.elements {
  margin-top: 5%;
}
</style>
