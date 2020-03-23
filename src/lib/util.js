import api_login from '@/api/login-api';
import store from "../store";


export const setTitle = (title) => {
  window.document.title = title || '花生直播'
};

export const checkTokenStatus = () => {

  let data = {
    uid: sessionStorage.getItem('UID') ? sessionStorage.getItem('UID') : '',
    token: sessionStorage.getItem('TOKEN') ? sessionStorage.getItem('TOKEN') : ''
  };
  api_login.checkToken(data).then((response) => {
    let {ret:ret, data:data} = response.data;
    if (ret === 200 && data.code === 0) {
      console.log('token检查链接ok');
      store.commit('setTokenStatus',true);
      console.log(store.state.TokenStatus)
    } else {
      console.log('token检查链接失败');
      store.commit('setTokenStatus',false);
      console.log(store.state.TokenStatus)
    }
  }).catch((err) => {
    console.log(err);
    return false;
  })
};
