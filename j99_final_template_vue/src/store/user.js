import axios from "axios";
import auth from "./../utils/auth";

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
    },
    deleteUsers(state, ids) {
      state.allUsers = state.allUsers.filter(user => {
        if (!ids.includes(user.id)) {
          return user;
        }
      });
    },
  },
  actions: {
    register(ctx, user) {
      return axios
        .post("/user", user)
        .then(res => {
          console.log("response server", res);
        })
        .catch(err => {
          console.warn("error server", err);
        });
    },
    login(ctx, user) {
      // return console.log(user);
      axios.post("/login", user, { errorHandle: false })
      .then(res => {
        console.log(res);
        auth.setLocalToken(res.data);
      })
      .catch(err => {
        console.error(err); 
      })
    },
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
    deleteUsers(ctx, ids) {
      axios.delete("/user", { params: { ids } })
      .then(res => {
        console.log("server result deleting users", res, ctx);
        ctx.commit("deleteUsers", ids);
      }).catch(err => {
        console.log("@store", err);
      })
    }
  }
};

export default userStore;
