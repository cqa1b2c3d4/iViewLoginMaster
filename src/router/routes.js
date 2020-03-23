import pageDownload from "../view/page-app-download/pageDownload";
import pageHome from "../view/page-home/pageHome";
import pageCharge from "../view/page-charge-in/pageCharge";
import pageSocket from "../view/page-socket-test/pageSocket";
import PagePersonalCenter from "../view/page-personal-center/PagePersonalCenter";
import PageMyNoble from "../view/page-my-noble/PageMyNoble";
import PageMyLive from "../view/PageMyLive/PageMyLive";
import PageMyMessage from "../view/PageMyMessage/PageMyMessage";
import PageLiveRoom from "../view/page-live-room/PageLiveRoom";
import error404 from '@/view/error-404.vue';
import testPage from '@/view/test-page.vue'

export const routes = [
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
    components: {
      default: pageCharge,
      test: testPage
    }


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
    meta: {
      requiresAuth: true,
      title: '花生直播-个人中心'
    }
  },
  {
    path: '/MyLive',
    name: 'PageMyLive',
    component: PageMyLive,
    meta: {
      requiresAuth: true,
      title: '花生直播-我的直播'
    }
  },
  {
    path: '/MyMessage',
    name: 'PageMyMessage',
    component: PageMyMessage,
    meta: {
      requiresAuth: true,
      title: '花生直播-我的消息'
    }
  },
  {
    path: '/MyNoble',
    name: 'PageMyNoble',
    component: PageMyNoble,
    meta: {
      requiresAuth: true,
      title: '花生直播-我的贵族'
    }
  },
  {
    path: '/live/:id',
    name: 'PageLiveRoom',
    component: PageLiveRoom,
    props: true,
  },
  {
    path: '*',
    name: '404',
    component: error404,
    meta: {
      title: '404 Not Found'
    }
  }
];
