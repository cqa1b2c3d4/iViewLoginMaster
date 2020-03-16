// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import apiAll from "./api";
import VueSocketIO from 'vue-socket.io';
import VueCookies from 'vue-cookies';

Vue.prototype.$api = apiAll;
Vue.use(ViewUI);
Vue.use(VueCookies);
Vue.config.productionTip = false;
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://im.00yuyin.com',
  vuex: {
    store,
    actionPrefix: 'socket_',
    mutationPrefix: 'SOCKET_'
  }
}));


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',

  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log('路由监控watch: '+ 'from ' + oldVal.path + ' to ' + val.path);
      },
      // 深度观察监听
      deep: true
    }
  },
});
