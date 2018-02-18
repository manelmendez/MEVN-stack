<template>
  <div id="navbar">
    <b-navbar toggleable="md" type="dark" variant="dark" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand><router-link :to="{path: '/'}" class="navbar-brand">Demo de Vue</router-link></b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item><router-link :to="{path: '/'}" class="nav-link linked">Home</router-link></b-nav-item>
        <b-nav-item><router-link :to="{path: '/signup'}" class="nav-link linked">Sign Up</router-link></b-nav-item>
        <b-nav-item><router-link :to="{path: '/signin'}" class="nav-link linked">Sign In</router-link></b-nav-item>
        <b-nav-item><router-link :to="{path: '/about'}" class="nav-link linked">About</router-link></b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right v-show="toggle">
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <router-link :to="{path: '/logout'}"><b-dropdown-item>Profile</b-dropdown-item></router-link>
          <router-link :to="{path: '/logout'}"><b-dropdown-item>Signout</b-dropdown-item></router-link>
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
      authUser: JSON.parse(window.localStorage.getItem('authUser')),
      toggle: false
    }
  },
  methods: {
    getUser: function() {
      if (this.authUser) {
        this.toggle = true;
      }
    }
  },
  created() {
    //do something after creating vue instance
    this.getUser();
  }
}
</script>
<style>
.navbar-brand {  
  font-family: 'Monoton', cursive;
}

.linked {
  font-family: "Raleway", sans-serif;
}
</style>