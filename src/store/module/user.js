const state = {
  appName: 'admin',
  appVersion: 'v2.0'
}

const actions = {}

const getters = {
  appNameWithVersion: (state) => {
    return state.appName + state.appVersion
  }

}

const mutations = {
  changeAppName(state,newName){
    state.appName = newName;
  }
};

export default {
  state,
  actions,
  mutations,
  getters,
  modules:{
    //
  }
}
