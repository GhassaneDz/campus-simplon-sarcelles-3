// import Vuex from "vuex";

export default {
    namespaced: true,
    state: {
        isNavMobileOn: false
    },
    getters: {
        navMobileStatus(state) {
            return state.isNavMobileOn
        }
    },
    mutations: {
        toggleNavMobile(state) {
            state.isNavMobileOn = !state.isNavMobileOn;
        }
    }
};