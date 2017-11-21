import Vue from 'vue'
import Index from './components/Index.vue'
import vueResource from 'vue-resource'
import router from './routes/routes'

Vue.use(vueResource)

new Vue({
  el: '#app',
  router,
  components: { Index },
  methods: {
    methodName() {
      
    }
  }
})