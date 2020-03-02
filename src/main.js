import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/styles/border.css'
// 解决1像素边框问题
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './registerServiceWorker'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
