import axios from '@/utils/axios'

const api_login = {
  // 获取所有博文列表
  post_user_login_api(username,password) {
    let data = {
      user_login: username,
      user_pass: password,
    };
    return axios({
      url: 'http://www.00yuyin.com/api/public/?service=Login.UserLogin',
      method: 'POST',
      data: data,
    })
  },

  token_test(){
    var data = {
      uid: '737985',
      token: sessionStorage.getItem('TOKEN') ? sessionStorage.getItem('TOKEN') : '',
    };

    console.log(data);
    return axios({
      url: 'http://www.00yuyin.com/api/public/appapi/?service=User.GetBaseInfo',
      method: 'POST',
      data: data,
    })
  },

};

export default api_login
