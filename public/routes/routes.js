import Vue from 'vue'
import Welcome from '../components/Welcome.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import MainPage from '../components/MainPage.vue'
import About from '../components/About.vue'
import Error404 from '../components/Error404.vue'
import UserList from '../components/UserList.vue';

import constants from '../assets/constants/constants'

import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

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
      path: '/userlist',
      name: 'UserList',
      component: UserList
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
  else {
    next()
  }
})
function isAuth(authUser) {
  axios.post(constants.LOCAL_ADDRESS+'private', null)
  .then(response => {
    if(response.status === 200) {
      console.log("Autorizado")
    }
    else if (response.status === 202) {
      console.log("Autenticado pero no autorizado")
      router.push({ path: "/userPage" })
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