import Vue from 'vue'
import Index from '../components/Index.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import About from '../components/About.vue'
import Error404 from '../components/Error404.vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
		{
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'Error404',
      component: Error404
    }
  ]
})
export default router