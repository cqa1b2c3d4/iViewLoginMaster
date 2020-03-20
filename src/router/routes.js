import pageDownload from "../view/page-app-download/pageDownload";
import pageCharge from "../view/page-charge-in/pageCharge";
import pageHome from "../view/page-home/pageHome";
import pageSocket from "../view/page-socket-test/pageSocket";
import PagePersonalCenter from "../view/page-personal-center/PagePersonalCenter";
import PageMyNoble from "../view/page-my-noble/PageMyNoble";
import PageMyLive from "../view/PageMyLive/PageMyLive";
import PageMyMessage from "../view/PageMyMessage/PageMyMessage";
import PageLiveRoom from "../view/page-live-room/PageLiveRoom";

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
    path: '/live/:id',
    name: 'PageLiveRoom',
    component: PageLiveRoom,
  }
];
