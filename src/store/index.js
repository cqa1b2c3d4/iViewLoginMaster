import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import state from "./state";
import actions from "./actions";
import user  from "./module/user";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  mutations,
  state,
  modules: {
   user,
  },
  getters,

});

export default store;
