import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// import store from './store/store'
import Lib from '@/plugins/lib';
import 'reset-css';
Vue.config.productionTip = false
import Api from '@/plugins/api';

Vue.use(Api);
Vue.use(new Lib());
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
