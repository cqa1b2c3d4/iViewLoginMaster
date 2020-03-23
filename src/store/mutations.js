import vue from 'vue'
const mutations = {
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
    state.activeName = data;
  },
  setAppAuthor(state,data) {
    vue.set(state,'appAuthor',data);
  }
};

export default mutations
