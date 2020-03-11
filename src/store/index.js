import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    // 存储token
    Authorization: sessionStorage.getItem('TOKEN') ? sessionStorage.getItem('TOKEN') : '',
    nickName: sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : '',
    userAvatar: sessionStorage.getItem('userAvatar') ? sessionStorage.getItem('userAvatar') : '',
    UID: sessionStorage.getItem('UID') ? sessionStorage.getItem('UID') : '',
    userInfo: {
      uid: '',
      roomnum: '',
      nickname: '',
      stream: '',
      equipment: '',
      token: ''
    },
    activeName: '1',
  },

  mutations: {
    // 修改token，并将token存入sessionStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      state.nickName = user.nickName;
      state.userAvatar = user.userAvatar;
      state.UID = user.UID;
      sessionStorage.setItem('TOKEN', user.Authorization);
      sessionStorage.setItem('userName', user.nickName);
      sessionStorage.setItem('userAvatar', user.userAvatar);
      sessionStorage.setItem('UID', user.UID);
    },

    socketConn(state, data) {
      state.userInfo.uid = data.userinfo.id;
      state.userInfo.roomnum = data.userinfo.roomnum;
      state.userInfo.nickname = data.userinfo.user_nicename;
      state.userInfo.stream = data.userinfo.stream;
      state.userInfo.equipment = 'pc';
      state.userInfo.token = data.userinfo.token;

    },
    changeActiveTab(state, data){
      state.activeName = data.activeName;
    }
  }
});

export default store;
