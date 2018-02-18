<template>
  <div class="app">
    <Navbar />
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './Navbar0.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  .app{
    min-height: 100%;
    height: 100%;
    position: relative;
  }
</style>