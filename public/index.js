import Vue from 'vue'
import Welcome from './components/Welcome.vue'
import vueResource from 'vue-resource'
import router from './routes/routes'

Vue.use(vueResource)

new Vue({
  el: '#app',
  router,
  components: { Welcome },
  methods: {
    logout: function() {
      console.log("LOGOUT")
    }
  }
})

function logout() {
  console.log("LOGOUT")
}