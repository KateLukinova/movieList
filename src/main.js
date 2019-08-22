import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import Header from './components/Header.vue'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    mobile: 760,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
});
Vue.component('my-header', Header);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
