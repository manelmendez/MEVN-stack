<template>
  <div id="navbar">
    <b-navbar class="bar" toggleable="md" type="dark" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand><router-link :to="{path: '/'}" class="navbar-brand">NoteRoll</router-link></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item><router-link :to="{path: '/'}" class="nav-link linked">Home</router-link></b-nav-item>
        <b-nav-item v-show="!toggle"><router-link :to="{path: '/signup'}" class="nav-link linked">Sign Up</router-link></b-nav-item>
        <b-nav-item v-show="!toggle"><router-link :to="{path: '/signin'}" class="nav-link linked">Sign In</router-link></b-nav-item>
        <b-nav-item><router-link :to="{path: '/about'}" class="nav-link linked">About</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right v-show="toggle">
          <!-- Using button-content slot -->
          <template slot="button-content">
            <i class="fas fa-user fa-lg"></i>
          </template>
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="signOut()">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data(){
    return {
      toggle: this.checkIfIsLogged()
    }
  },
  methods: {
    checkIfIsLogged() {
      let authUser = JSON.parse(window.localStorage.getItem('authUser'))
      if (authUser) {
        return true
      }
      else {
        return false
      }
    },
    signOut() {
      this.$axios.defaults.headers.common['Authorization'] = null
      window.localStorage.removeItem('authUser')
      this.toggle = false
      this.$router.push('/')
    }
  },
  created() {
    //do something after creating vue instance
    this.$bus.$on('logged', () => {
      this.toggle = this.checkIfIsLogged()
    })
  }
}
</script>
<style>
.bar {
  background-color:  #7575a3
}

.navbar-brand {  
  font-family: 'Monoton', cursive;
}

.linked {
  font-family: "Raleway", sans-serif;
}
</style>