export default {
    namespaced: true,
    state: {
        appMessage: "default message from store",
        isNavMobileOn: false
    },
    getters: {
        navMobileStatus(state) {
            return state.isNavMobileOn
        },
        currentAppMessage({ appMessage }) {
            return appMessage;
        }
    },
    mutations: {
        toggleNavMobile(state) {
            state.isNavMobileOn = !state.isNavMobileOn;
        },
        setCurrentMessage(state, msg) {
            state.appMessage = msg;
        }
    }
};