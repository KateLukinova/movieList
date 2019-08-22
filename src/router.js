import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'filmList',
      component: () => import(/* webpackChunkName: "about" */ './components/FilmList.vue')
    },
    {
      path: '/film',
      name: 'film',
      component: () => import(/* webpackChunkName: "about" */ './components/Film.vue'),
      props: true
    }
  ],
  mode: 'history'
})
