import axios from "axios";

const articleStore = {
  namespaced: true,
  state: {
    currentArticle: null,
    articles: []
  },
  getters: {
    all(state) {
      return state.articles;
    },
    byId(state) {
      return function(id) {
        return state.articles.filter(article => {
          return article.id === id;
        });
      };
    },
    current(state) {
      return state.currentArticle;
    }
  },
  mutations: {
    addArticle(state, article) {
      state.articles.push(article);
    },
    deleteArticles(state, ids) {
      state.articles = state.articles.filter(article => {
        if (!ids.includes(article.id)) {
          return article;
        }
      });
    },
    setArticles(state, articles) {
      state.articles = articles;
    },
    setCurrentArticle(state, article) {
      state.currentArticle = article;
    }
  },
  actions: {
    create(ctx, article) {
      return axios
        .post("/article", article)
        .then(res => {
          console.log("@post article response", res, ctx);
          ctx.commit("addArticle", article);
        })
        .catch(err => {
          console.error("error when creating article", err);
        });
    },
    get(ctx, id) {
      axios
        .get("/article/" + id)
        .then(res => {
          console.log("response server getting one article", res);
          ctx.commit("setCurrentArticle", res.data);
        })
        .catch(err => {
          console.error("error when get one category", err);
        });
    },
    getAll(ctx) {
      axios
        .get("/article")
        .then(res => {
          console.log(res.data);
          ctx.commit("setArticles", res.data);
        })
        .catch(err => {
          console.error("error when getting articles", err);
        });
    },
    deleteArticles(ctx, ids) {
      // return console.log(ids)
      axios
        .delete("/article", { params: { ids } })
        .then(res => {
          console.log(res, ids);
          ctx.commit("deleteArticles", ids);
        })
        .catch(err => {
          console.error("error when deleting articles", err);
        });
    },
    update(ctx, article) {
      axios
        .patch("/article/" + article.id, article)
        .then(res => {
          console.log("success editing article", res);
        })
        .catch(err => {
          console.error("error when getting all categories", err);
        });
    }
  }
};

export default articleStore;
