import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue'),
    meta: {
      guest: true
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForAuthUsers.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Error.vue'),
    meta: {
      title: '404',
      description: 'Страница не найдена'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
router.beforeEach((to, from, next) => {
  console.log(to, 'to')
  // todo нет запроса на проверку токена а так на глаз вроде пашет
  if (to.matched.some(record => record.meta.requiresAuth && record.path !== '/login')) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      console.log(localStorage.getItem('user'))
      const user = localStorage.getItem('user')
      if (to.matched.some(record => record.meta.isAdmin)) {
        if (user.isAdmin == 1) {
          next()
        } else {
          next({ name: 'Test' })//name of component route
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    } else {
      next({ name: 'Test' })
    }
  } else {
    next()
  }
})
