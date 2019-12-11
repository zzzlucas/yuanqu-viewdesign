import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// import '../my-theme/index.less';
import './assets/zj.global.less';


Vue.use(ViewUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
