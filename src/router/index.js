import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page from "@/components/page";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/socketTest',
      name: 'page',
      component: socketTest
    },
    {
      path: '/chargeCenter',
      name: 'chargeCenter',
      component: chargeCenter
    },
    {
      path: '/APPDownload',
      name: 'APPDownload',
      component: APPDownload
    }
  ]
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  var token = sessionStorage.getItem('TOKEN');
  console.log(token);
  if (to.path === '/login') {
    if (token === null || token === '') {
      next();
    } else {
      next('/');
    }
  } else {
    if (token === null || token === '') {
      next();
    } else {
      next();
    }
  }
});

export default router;
