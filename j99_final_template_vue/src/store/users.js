import axios from "axios";

const defaultUser = {
    id: 123,
    name: "guillaume",
    lastname: "amg",
    email: "gui@ohm.com",
};

const defaultUsers = [
    {
        id: 13,
        name: "toto",
        lastname: "teteAzero",
        email: "toto@foo.com",
    },
    {
        id: 23,
        name: "titi",
        lastname: "parisien",
        email: "titi@bar.com",
    },
    {
        id: 66,
        name: "tata",
        lastname: "yoyo",
        email: "tata@baz.com",
    }
];

const userStore = {
    namespaced: true,
    state: {
        currentUser: defaultUser,
        allUsers: defaultUsers
    },
    getters: {
        current(state) {
            return state.currentUser;
        },
        all(state) {
            return state.allUsers;
        }
    },
    mutations: {},
    actions: {
        register(ctx) {

        },
        login(ctx) {

        },
        logout(ctx) {

        },
        getAllUsers(ctx) {

        },
        updateUser(ctx) {

        },
        deleteUser(ctx) {

        }
    },
};

export default userStore;