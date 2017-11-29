<template>
  <div class="app-content">
    <div class="container">        
      <div class="row justify-content-center h-100">
        <div class="col-4">
          <div class="card profile" style="width: 20rem;">
            <img class="card-img-top" :src=user.avatar alt="Card image cap">
            <div class="card-body">
              <h4 class="card-title"> {{ user.name }} </h4>
              <p class="card-text">Email: {{ user.email }} </p>
              <a href="#" class="btn btn-primary">Editar usuario</a>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="card profile" style="width: 30rem;">
            <div class="card-body">
              <h4 class="card-title"> {{ user.name }} </h4>
              <p class="card-text">Email: {{ user.email }} </p>
              <a href="#" class="btn btn-primary">Editar usuario</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //props: ['user'],      if using props
  data(){
    return {
      user: JSON.parse(window.localStorage.getItem('authUser')).data
    }
  },
  methods: {}
}
</script>

<style>
.app-content {
  background:url(../assets/images/gplaypattern.png);
  background-size: auto,cover;
  height: 100%;
  width: 100%;
  position:fixed;
}
.profile {
  margin-top: 5%;
}
</style>
