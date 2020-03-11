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

Vue.prototype.$api = apiAll;
Vue.use(ViewUI);
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

Vue.component('myComponent',{
  data: function(){
    return{
      count: 0,
    }
  },
  template: '<h2>this is the title fo my-component</h2><button v-on:click="count++">点击计算点击次数：{{count}}次</button> '

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
});
