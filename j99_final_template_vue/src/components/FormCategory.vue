<template>
  <form
    id="ressource"
    @submit="$event.preventDefault();submit();"
  >
    <label for="name" class="clickable label">Category</label>
    <input id="name" class="input" type="text" v-model="category.name" required>
    <button class="btn">ok</button>
  </form>
</template>
<script>
export default {
  created() {
    if (this.isEditing()) {
      this.$store.dispatch("category/get", this.$route.params.id);
    }
  },
  computed: {
    category() {
      const currentCategory = this.$store.getters["category/current"];
      if (currentCategory && this.isEditing()) {
        return currentCategory;
      } else {
        return {name: ""};
      }
    }
  },
  methods: {
    isEditing() {
      return this.$route.path.match("edit"); // si l'url de la page contient 'edit'
    },
    submit() {
      if (this.isEditing()) {
        this.$store.dispatch('category/update', this.category)
      } else {
        this.$store.dispatch('category/create', this.category)
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
