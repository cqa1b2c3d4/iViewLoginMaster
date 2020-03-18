import Vue from 'vue'
import Router from 'vue-router'
import pageDownload from "../view/page-app-download/pageDownload";
import pageCharge from "../view/page-charge-in/pageCharge";
import pageHome from "../view/page-home/pageHome";
import pageSocket from "../view/page-socket-test/pageSocket";
import PagePersonalCenter from "../view/page-personal-center/PagePersonalCenter";
import PageMyNoble from "../view/page-my-noble/PageMyNoble";
import PageMyLive from "../view/PageMyLive/PageMyLive";
import PageMyMessage from "../view/PageMyMessage/PageMyMessage";
import PageLiveRoom from "../view/page-live-room/PageLiveRoom";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'pageHome',
      component: pageHome
    },
    {
      path: '/socketTest',
      name: 'pageSocket',
      component: pageSocket
    },
    {
      path: '/chargeCenter',
      name: 'pageCharge',
      component: pageCharge
    },
    {
      path: '/APPDownload',
      name: 'pageDownload',
      component: pageDownload
    },
    {
      path: '/Personal',
      name: 'PagePersonalCenter',
      component: PagePersonalCenter,
      meta: { requiresAuth: true }
    },
    {
      path: '/MyLive',
      name: 'PageMyLive',
      component: PageMyLive,
      meta: { requiresAuth: true }
    },
    {
      path: '/MyMessage',
      name: 'PageMyMessage',
      component: PageMyMessage,
      meta: { requiresAuth: true }
    },
    {
      path: '/MyNoble',
      name: 'PageMyNoble',
      component: PageMyNoble,
      meta: { requiresAuth: true }
    },
    {
      path: '/:id',
      name: 'PageLiveRoom',
      component: PageLiveRoom,
      meta: { requiresAuth: true }
    }
  ],

});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  var token = sessionStorage.getItem('TOKEN');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token === null || token === '') {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
