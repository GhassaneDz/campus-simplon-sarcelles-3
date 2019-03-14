import axios from "axios";

const defaultUser = {
  id: 123,
  name: "guillaume",
  lastname: "amg",
  email: "gui@ohm.com"
};

const userStore = {
  namespaced: true,
  state: {
    currentUser: defaultUser,
    allUsers: []
  },
  getters: {
    current(state) {
      return state.currentUser;
    },
    all(state) {
      
      return state.allUsers;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.allUsers = users;
    }
  },
  actions: {
    register(ctx, user) {
      return axios
        .post("/user", user)
        .then(res => {
          console.log("response server", res);
        })
        .catch(err => {
          console.error("error server", err);
        });
    },
    // login(ctx) {},
    // logout(ctx) {},
    getAll(ctx) {
      axios
        .get("/user")
        .then(res => {
          ctx.commit("setUsers", res.data.users);
        })
        .catch(err => {
          console.error("baaad", err);
        });
    },
    // updateUser(ctx) {},
    deleteUser(ctx, ids) {
      axios.delete("/users")
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
};

export default userStore;
