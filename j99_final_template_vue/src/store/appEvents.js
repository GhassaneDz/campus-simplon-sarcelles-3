export default {
    namespaced: true,
    state: {
        appMessage: {
            text: "",
            level: ""
        },
        isNavMobileOn: false
    },
    getters: {
        navMobileStatus(state) {
            return state.isNavMobileOn
        },
        currentAppMessage({ appMessage }) {
            return appMessage.text;
        },
        currentAppMessageLevel({ appMessage }) {
            return appMessage.level;
        }
    },
    mutations: {
        toggleNavMobile(state) {
            state.isNavMobileOn = !state.isNavMobileOn;
        },
        resetMessage(state) {
            state.appMessage.text = "";
            state.appMessage.level = "";
        },
        setCurrentMessage(state, msg) {
            const validCSS = ["success", "warning", "error"];
            if (!validCSS.includes(msg.level)) {
                return console.error("The provided CSS Class is not Valid !");
            }
            state.appMessage.text = msg.text;
            state.appMessage.level = msg.level;
        }
    }
};