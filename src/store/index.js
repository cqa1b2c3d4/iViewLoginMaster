import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import state from "./state";
import actions from "./actions";
import user  from "./module/user";
import getters from "./getters";
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  actions,
  mutations,
  state,
  modules: {
   user,
  },
  getters,
  plugins:[
    saveInLocal
  ]

});

export default store;
