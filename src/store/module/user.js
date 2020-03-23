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

const mutations = {}

export default {
  state,
  actions,
  mutations,
  getters
}
