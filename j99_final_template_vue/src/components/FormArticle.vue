<template>
  <form id="ressource" @submit="$event.preventDefault();submit();">
    <label for="name" class="clickable label">Title</label>
    <input id="name" class="input" type="text" v-model="article.title">
    <label for="category" class="clickable label">Category</label>
    <select id="category" class="input" v-model="article.id_cat" required>
      <option v-for="(cat, i) in categories" :key="i" :value="cat.id">{{cat.name}}</option>
    </select>
    <label for="date" class="clickable label">Date</label>
    <input id="date" class="input" type="date" v-model="article.date">
    <label for="content" class="clickable label">Content</label>
    <textarea id="content" class="textarea" v-model="article.content"></textarea>
    <button class="btn">ok</button>
  </form>
</template>
<script>
export default {
  created() {
    if (this.isEditing()) {
      this.$store.dispatch("article/get", this.$route.params.id);
    }
  },
  beforeCreate() {
    this.$store.dispatch("category/getAll");
  },
  computed: {
    categories() {
      return this.$store.getters["category/all"];
    },
    article() {
      const currentArticle = this.$store.getters["article/current"];
      if (currentArticle && this.isEditing()) {
        return currentArticle;
      } else
        return {
          title: "",
          date: "",
          content: "",
          id_cat: ""
        };
    }
  },
  methods: {
    isEditing() {
      return this.$route.path.match("edit"); // si l'url de la page contient 'edit'
    },
    submit() {
      console.log("ressource à " + this.isEditing() ? "editer" : "poster", this.article);
      if (this.isEditing()) {
        this.$store.dispatch("article/update", this.article);
      } else {
        this.$store.dispatch("article/create", this.article);
      }
    }
  }
};
</script>

<style scoped lang="scss">
#ressource {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 540px;
  margin: 20px auto 0;
  padding: 10px;
  border: 1px solid;
  border-radius: 0.3rem;
  & .wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .label {
    margin: 5px 0;
  }
  & .input {
    margin: 10px 0;
    height: 32px;
    padding: 3px 0 3px 20px;
    border: 1px solid;
    width: 90%;
    border-radius: 0.3rem;
  }
  & .textarea {
    padding: 3px 0 3px 20px;
    border: 1px solid;
    width: 90%;
    border-radius: 0.3rem;
    min-height: 150px;
  }
  & .btn {
    height: 32px;
    max-width: 120px;
    width: 100%;
    outline: none;
    border: 1px solid;
    margin-top: 20px;
    align-self: center;
    border-radius: 0.3rem;
  }
}
</style>
