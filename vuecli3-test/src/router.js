import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import C from './views/C.vue'
import Achild from './views/Achild.vue'
import cChild1 from './views/cChild1.vue'
import cChild2 from './views/cChild2.vue'
import Error from './views/Error.vue'
import count from './views/count.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/A',
      component: A,
      children: [
        {
          path: '/A/Achild',
          component: Achild
        }
      ]
    },
    {
      path: "/B",
      component: B
    },
    {
      path: "/C",
      component: C,
      children: [
        {
          path: '/C/cChild1',
          name: 'C/cChild1',
          component: cChild1
        },
        {
          path: '/C/cChild2/:id',
          component: cChild2
        }
      ]
    },
    {
      path: "/D",
      redirect: "/"
    },
    {
      path: "/",
      component: A,
      alias: "/home_othername"
    },
    {
      path: "*",
      component: Error
    },
    {
      path: "/count",
      component: count
    }
  ]
})
