const state = {
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
  TokenStatus: '',
  routersNoAuthor: ['/','/APPDownload','/chargeCenter','/socketTest'],
};

export default state
