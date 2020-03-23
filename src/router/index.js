import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes'
import {setTitle, checkTokenStatus} from "@/lib/util";
import store from "../store";


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes,

});


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {

  var token = sessionStorage.getItem('TOKEN');
  if (from.path.indexOf('live') !== -1) {
    next();
    location.reload();
  } else {
    next()
  }
  to.meta && setTitle(to.meta.title);

  if (token === null || token === '') {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next('/');
    } else {
      next()
    }
  } else {
     checkTokenStatus();
    if (store.state.TokenStatus === true) {
      next();
    } else if (store.state.TokenStatus === false) {
      sessionStorage.clear();
      if (to.matched.some(record => record.meta.requiresAuth)){
        next('/');
      } else {
        next();
      }
    }
  }
});

export default router;
