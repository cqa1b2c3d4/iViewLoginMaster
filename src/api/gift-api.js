import axios from '@/utils/axios'

const api_gift = {
  // 获取所有博文列表
  get_gift_list() {
    return axios({
      url: 'http://www.00yuyin.com/api/public/?service=Live.GetGiftList',
      method: 'POST',
      data: '',
    })
  },

};

export default api_gift
