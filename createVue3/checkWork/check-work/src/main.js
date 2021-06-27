import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'static/img/lilanz.png',
    loading:'static/img/loading.jpg'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
