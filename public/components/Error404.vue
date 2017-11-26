<template>
  <div class="app-content">
    <div class="container">  
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
  export default {
    name: 'app',
    data(){
      return {
      username: '',
      email: '',
      password: '',
      toggle: false
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
        })
        .catch(error => {
          console.log(error)
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
