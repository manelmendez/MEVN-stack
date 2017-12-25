import Vue from 'vue'
import Welcome from './components/Welcome.vue'
import Navbar from './components/Navbar.vue'
import vueResource from 'vue-resource'
import router from './routes/routes'

Vue.use(vueResource)

new Vue({
  el: '#navbar',
  router,
  template: '<Navbar/>',
  components: { Navbar }
})

new Vue({
  el: '#app',
  router,
  components: { Welcome }
})