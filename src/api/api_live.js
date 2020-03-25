import axios from '@/utils/axios'

const api_live = {
  // 获取所有博文列表
  get_hot_live() {
    return axios({
      url: 'http://www.00yuyin.com/api/public/?service=Home.GetHot',
      method: 'POST',
    })
  },

};

export default api_live
