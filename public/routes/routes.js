import Vue from 'vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import MainPage from '../components/MainPage.vue'
import About from '../components/About.vue'
import Error404 from '../components/Error404.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      meta: { onceLogged: true }
    },
		{
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
      meta: { onceLogged: true }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
      meta: { onceLogged: true }
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/logout',
      meta: { logout: true }
    },
    {
      path: '/404',
      name: 'Error404',
      component: Error404
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
/**
 * Function to check some things before redirect to a page
 * 
 */
router.beforeEach((to, from, next) => {
  // method to check if user needs to be logged to access a page
  if(to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(!authUser || !authUser.token) {
      next({name:'Welcome'})
    }
    else {
      isAuth(authUser)
      next()
    }
  }
  // method to not allow a user to go to certain pages once logged
  else if (to.meta.onceLogged) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser) {
      next({name:'MainPage'})
    }
    else {
      next()
    }
  }
  // method to not allow a user to go to certain pages once logged
  else if (to.meta.logout) {
    window.localStorage.removeItem('authUser')
    next({name:'Welcome'})
  }
  else {
    next()
  }
})
function isAuth(authUser) {
  let body = authUser.userId
  let headers = {
    'Authorization': authUser.token
  }
  let options = {
    body,
    headers
  }
  Vue.http.get('http://localhost:3000/api/private', options)
  .then(response => {
    if(response.status === 200) {
      console.log("Autorizado")
    }
  })
  .catch(error => {
    if (error.status === 403) {
      console.log("No estás autorizado");
    }
    else if (error.status === 401) {
      console.log("No estás autorizado");
    }
    else if (error.status === 500) {
      console.log("No estás autorizado");
    }
    router.push({ path: "/" })
  })
}
export default router