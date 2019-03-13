import Vue from 'vue'
import Vuex from 'vuex'
import appEvents from "./appEvents"
import userStore from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    appEvents,
    users: userStore
  }
});
