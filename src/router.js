import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Projects from './views/Projects.vue'
// import '../public/projects.json'

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
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/AboutPage.vue')
    },
    {
        // path: '/work/:clientSlug', if later need a work page
        path: '/:clientSlug',
        name: 'client',
        // component: Projects
        component: () => import(/* webpackChunkName: "about" */ './views/WorkPage.vue')
    }
  ]
})
