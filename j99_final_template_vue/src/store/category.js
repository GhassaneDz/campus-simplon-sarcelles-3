import axios from "axios";

const userStore = {
  namespaced: true,
  state: {
    currentCategory: null,
    categories: []
  },
  getters: {
    all(state) {
      return state.categories;
    },
    byId(state) {
      return function(id) {
        return state.categories.filter(cat => {
          return cat.id === id;
        });
      };
    },
    current(state) {
      return state.currentCategory;
    }
  },
  mutations: {
    setCategories(state, cats) {
      state.categories = cats;
    },
    updateCategory(state, cat) {
      console.log("todo update cat", state, cat);
      // state
      // state.categories = cats;
    },
    deleteCategories(state, ids) {
      state.categories = state.categories.filter(category => {
        if (!ids.includes(category.id)) {
          return category;
        }
      });
    },
    setCurrentCategory(state, cat) {
      state.currentCategory = cat;
    }
  },
  actions: {
    update(ctx, category) {
      axios
        .patch("/category/" + category.id, category)
        .then(res => {
          console.log("success editing category", res);
          ctx.commit("updateCategory", category);
        })
        .catch(err => {
          console.error("error when getting all categories", err);
        });
    },
    create(ctx, name) {
      console.log("before post", name);
      return axios
        .post("/category", { category: name })
        .then(res => {
          console.log("response server", res, ctx);
        })
        .catch(err => {
          console.error("error at create category", err);
        });
    },
    get(ctx, id) {
      axios
        .get("/category/" + id)
        .then(res => {
          console.log("le server retourne une category", res);
          ctx.commit("setCurrentCategory", res.data);
        })
        .catch(err => {
          console.error("error when get one category", err);
        });
    },
    getAll(ctx) {
      axios
        .get("/category")
        .then(res => {
          ctx.commit("setCategories", res.data);
        })
        .catch(err => {
          console.error("error when getting all categories", err);
        });
    },
    deleteCategories(ctx, ids) {
      axios
        .delete("/category", { params: { ids } })
        .then(() => {
          console.log("server result when deleting categories", ctx);
          ctx.commit("deleteCategories", ids);
        })
        .catch(err => {
          console.error("error at delete categories", err);
        });
    }
  }
};

export default userStore;
