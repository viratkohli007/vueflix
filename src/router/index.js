import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Local from '@/components/localvideo'
import Movies from '@/components/movies'
import Abc from '@/components/abc'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/abcd',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/movies/:video',
      name: 'Local',
      component: Local
    },
    {
      path: '/abc',
      name: 'Abc',
      component: Abc
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    }
    
  ]
})
