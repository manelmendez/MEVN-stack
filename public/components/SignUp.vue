<template>
  <div class="signup-content">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col signup-elements">
          <div id="flash_alert" ref="flash_alert" v-show="toggle" class="alert alert-success animated flipInX" role="alert">
            Te has registrado correctamente!
          </div>
          <div id="negative_flash_alert" ref="negative_flash_alert" v-show="toggle_negative" class="alert alert-danger animated flipInX" role="alert" v-html="negative_message">
          </div>
          <div class="signup-block rounded" :class="{'border border-danger': toggle_negative, 'border border-success': toggle}">
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
        this.$axios.post('signup', body, headers)
        .then(response => {
          if(response.status === 200) {
            this.toggle= true
            setTimeout(() => {
            this.$router.push({ name: "Welcome" })
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
.signup-content {
  background:url(../assets/images/wallpaper.jpg);
  background-size:cover;
  width: 100%;
  min-height:100%;
  position: fixed;
  align-items: center;
  align-content: center;
}
.signup-block {
  background-color: rgba(355, 355, 355, 0.6);
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 15%;
  padding-bottom: 15%;
}
.signup-elements {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 35%;
  margin-right: 35%;
}
</style>
