import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import B from './views/B.vue'
import Achild from './views/Achild.vue'

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
    }
  ]
})
