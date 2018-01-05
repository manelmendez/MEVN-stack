import Vue from 'vue'
import App from './components/App.vue'
import vueResource from 'vue-resource'
import router from './routes/routes'

Vue.use(vueResource)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})

/* Saber las diferencias entre el metodo usado y los siguientes 2:

  ***************************
  
  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app')
  
  ***************************
  
  new Vue({
    el: '#app',
    router,
    components: { App }
  })
  
  ***************************
  
*/