import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    // récupérer des valeurs du store
    users(state) {
      return state.users;
    },
    user(state) {
      return id => state.users.find(user => user.id === Number(id));
    }
  },
  mutations: {
    // changer le store de manière synchrone
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    updateUser(state, user) {
      // user vient du v-model du formulaire !!!
      // d'abord on récupère l'index de l'user à update ...
      const index = state.users.findIndex(u => u.id === Number(user.id));
      // vue.set() permet de remplacer des valeurs d'objets structurés (array, objects...map, weakmaps)
      Vue.set(state.users, index, user);
      // en français => prend state.users et remplace l'objet contenu à l'indice "index" par l'objet mis à jour (user)
    },
    deleteUser({ users }, id) {
      // trouver la position (index) de l'user à delete
      const index = users.findIndex(user => user.id === Number(id));
      // puis supprimer 1 case du tableau d'users en partant d'index
      users.splice(index, 1);
    }
  },
  actions: {
    // changer le store de manière asynchrone
    getAllUsers(ctx) {
      // console.log(ctx);
      return new Promise((resolve, reject) => {
        axios.get("fakedatabase.json")
          .then(res => {
            ctx.commit("setUsers", res.data);
            resolve({ msg: "ok", data: res.data});
          })
          .catch(err => {
            reject({msg: "pas ok", error: err});
          })
      })
    },
    addUser(ctx) {
      // return console.log(ctx);
      return new Promise((resolve, reject) => {
        axios.get("url-vers-ton-api-pour-post-user")
          .then(res => {
            ctx.commit("addUser", res.data);
            resolve({ msg: "ok", data: res.data });
          })
          .catch(err => {
            reject({ msg: "pas ok", error: err });
          })
      })
    }
  }
});
