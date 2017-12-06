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
      component: Welcome
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
      path: '/404',
      name: 'Error404',
      component: Error404
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(!authUser || !authUser.token) {
      next({name:'Index'})
    }
    else {
      isAuth(authUser)
      next()
    }
  }else {
    next()
  }
})
function isAuth(authUser) {
  let body = authUser.data
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
      router.push({ path: "/" })
    }
    else if (error.status === 401) {
      console.log("No estás autorizado");
      router.push({ path: "/" })
    }
    else if (error.status === 500) {
      console.log("No estás autorizado");
      router.push({ path: "/" })
    }
  })
}
export default router