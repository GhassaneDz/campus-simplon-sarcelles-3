<template>
  <table id="tabler">
    <thead class="head" v-if="articles && articles.length">
      <tr class="row">
        <th class="cell" v-for="(val, prop) in articles[0]" :key="prop">{{prop}}</th>
        <th class="cell">
          <i class="fa fa-pen"/>
        </th>
        <th class="cell">
          <button class="btn" @click="$store.dispatch('article/deleteArticles', selectedArticles)">
            <i class="fa fa-trash"/>
          </button>
        </th>
      </tr>
    </thead>
    <tbody class="body" v-if="articles.length">
      <tr class="row" v-for="(article, i) in articles" :key="i">
        <td class="cell" v-for="(val, prop) in article" :key="prop">{{ val }}</td>
        <th class="cell">
          <router-link
            tag="button"
            class="btn"
            :to="'/profile/admin/articles-manager/edit/' + article.id"
          >edit</router-link>
        </th>
        <th class="cell">
          <input class="clickable" type="checkbox" :value="article.id" v-model="selectedArticles">
        </th>
      </tr>
    </tbody>
    <tbody v-else>
      <tr class="row">
        <td colspan="2" class="cell">no articles yet</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      selectedArticles: []
    }
  },
  beforeCreate() {
    this.$store.dispatch("article/getAll");
  },
  computed: {
    articles() {
      return this.$store.getters["article/all"];
    }
  }
};
</script>

<style scoped lang="scss">
#tabler {
  border-collapse: collapse;
  margin: 20px auto;
  width: 100%;
  .btn {
    border-radius: 0.3rem;
    outline: none;
    padding: 10px;
    width: 48px;

    &:hover {
      background: darkorange;
      color: white;
    }
  }
  .head .row {
    background: #aeb6b6;
  }
  .body .row:nth-child(odd) {
    background: #c0c0c047;
  }
  .body .row:nth-child(odd) {
    background: #c0c0c047;
  }
  .cell {
    border: 1px solid;
    padding: 10px;
  }
}
</style>

