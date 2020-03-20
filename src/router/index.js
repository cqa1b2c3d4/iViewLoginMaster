import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: routes,

});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  var token = sessionStorage.getItem('TOKEN');
  if (from.path.indexOf('live') !== -1 && to.path.indexOf('live') === -1){
    next();
location.reload();
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token === null || token === '') {
      console.log('没有拿到token');
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
