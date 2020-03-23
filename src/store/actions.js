import {getAppName} from '@/api/app'

const actions = {
  /*updateAppName({commit}) {
    getAppName().then(res => {
      console.log(res);
      let {info: {appName}} = res;
      commit('changeAppName', appName)
    }).catch(err => {
      console.log(err)
    })

  }*/
  async  updateAppName({commit}){
    //
    try {
      const {info: {appName}} = await getAppName()
      commit('changeAppName', appName)
    } catch (e) {
      console.log(e)
    }
  }

};

export default actions
