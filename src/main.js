// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'video.js/dist/video-js.css'
import VueYoutube from 'vue-youtube'
import VueVideoPlayer from 'vue-video-player'
import BootstrapVue from 'bootstrap-vue'
import VueXgplayer from 'vue-xgplayer'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

Vue.use(VueXgplayer, {
  // globalOptions
  enterLogo: {
    width: 50,
    height: 10
  },
  playsinline: true
})

Vue.config.productionTip = false
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
Vue.use(VueYoutube)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
