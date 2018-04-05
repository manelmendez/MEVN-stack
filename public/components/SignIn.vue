<template>
  <div class="signin-content">
    <div class="container-fluid">
      <div class="row justify-content-md-center">
        <div class="col signin-elements">
          <div id="flash_alert" ref="flash_alert" v-show="toggle" class="alert alert-success animated flipInX" role="alert">
            Te has logueado correctamente!
          </div>
          <div id="negative_flash_alert" ref="negative_flash_alert" v-show="toggle_negative" class="alert alert-danger animated flipInX" role="alert" v-html="negative_message">
          </div>
          <div class="signin-block rounded" :class="{'border border-danger': toggle_negative, 'border border-success': toggle}">
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
            <br></br>
            <button class="btn btn btn-block facebookButton" @click="authenticate('facebook')">
              <i class="fab fa-facebook-square"></i>
              Inicia sesión con Facebook
            </button>
            <!-- <button class="btn btn btn-block googleButton" @click="authenticate('google')">
              <i class="fab fa-google-plus-square"></i>
              Inicia sesión con Google
            </button> -->
            <template>
            <g-signin-button class="btn btn btn-block googleButton"
              :params="googleSignInParams"
              @success="onSignInSuccess"
              @error="onSignInError">
              <i class="fab fa-google-plus-square"></i>
              Inicia sesión con Google
            </g-signin-button>
          </template>
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
    email: '',
    password: '',
    toggle: false,
    toggle_negative: false,
    negative_message: "La contraseña es incorrecta.",
    googleSignInParams: {
        client_id: '386200234053-2agcjupnifhntml508a1ivfnetvm8o9i.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSignInSuccess (googleUser) {
      const authUser = {}
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      // Useful data for your client-side scripts:
      var profile = googleUser.getBasicProfile();
      // The ID token you need to pass to your backend:
      var id_token = googleUser.getAuthResponse().id_token;
      let headers = {
        'Authorization': 'Bearer '+id_token
      }
      this.$axios.get('oauth/google',{headers})
      .then(response => {
        if(response.status === 200) {
          this.toggle= true
          authUser.id = response.data.user._id
          authUser.token = response.data.token
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          setTimeout(() => {
            this.$bus.$emit('logged', 'User logged')
            this.$router.push({ 
              name: "MainPage" //si uso path: "/mainpage" el params (props) no funciona -- params: { user: response.data.user } --
            })
          }, 2000);
        }
      })
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },
    signIn() {
      const authUser = {}
      let body = {
        email: this.email,
        password: this.password
      }
      let headers = {
        'Content-Type': 'application/json'
      }
      this.$axios.post('signin', body, headers)
      .then(response => {
        if(response.status === 200) {
          this.toggle= true
          authUser.id = response.data.user._id
          authUser.token = response.data.token
          window.localStorage.setItem('authUser', JSON.stringify(authUser))
          setTimeout(() => {
            this.$bus.$emit('logged', 'User logged')
            this.$router.push({ 
              name: "MainPage" //si uso path: "/mainpage" el params (props) no funciona -- params: { user: response.data.user } --
            })
          }, 2000);
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
.signin-content {
  background:url(../assets/images/wallpaper.jpg);
  background-size:cover;
  width: 100%;
  min-height:100%;
  position: fixed;
  align-items: center;
  align-content: center;
}
.signin-block {
  background-color: rgba(355, 355, 355, 0.6);
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 15%;
  padding-bottom: 15%;
}
.signin-elements {
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 35%;
  margin-right: 35%;
}
.facebookButton {
  background-color: #4862a3;
  color: #ffffff;
}
.googleButton {
  background-color: #dd4c3a;
  color: #ffffff;
  cursor: pointer;
}
</style>
