import Vue from 'vue'
import App from './components/App.vue'
import router from './routes/routes'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex';
import EventBus from './components/events/EventBus'
import axios from 'axios'
import constants from './assets/constants/constants'
import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton)
Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.prototype.$bus = EventBus
Vue.prototype.$axios = axios.create()
Vue.prototype.$axios.defaults.baseURL = constants.LOCAL_ADDRESS
// add token to Auth header if onceLogged
if (JSON.parse(window.localStorage.getItem('authUser'))!= null)
{
  Vue.prototype.$axios.defaults.headers.common['Authorization'] = 'Bearer '+JSON.parse(window.localStorage.getItem('authUser')).token
}

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