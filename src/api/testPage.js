import axios from '@/utils/axios'

const socket_api = {
  // 获取所有博文列表

  socket_conn(showId, stream){
    var data = {
      showId: showId,
      stream: stream,
    };
    showId = "34029";
    stream = "34029_1563438344";
    console.log(data);
    return axios({
      url: 'http://www.00yuyin.com/index.php/?g=home&m=show&a=setNodeInfo',
      method: 'get',
      data: data,
      dataType:'jsonp'
    })
  },

};

export default socket_api
