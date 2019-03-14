<template>
  <table id="tabler">
    <thead class="head" v-if="categories && categories.length">
      <tr class="row">
        <th class="cell" v-for="(val, prop) in categories[0]" :key="prop">{{prop}}</th>
        <th class="cell">
          <i class="fa fa-pen"/>
        </th>
        <th class="cell">
          <button
            class="btn"
            @click="$store.dispatch('category/deleteCategories', selectedCategories)"
          >
            <i class="fa fa-trash"/>
          </button>
        </th>
      </tr>
    </thead>
    <tbody class="body" v-if="categories.length">
      <tr class="row" v-for="(category, i) in categories" :key="i">
        <td class="cell" v-for="(val, prop) in category" :key="prop">{{ val }}</td>
        <th class="cell">
          <router-link
            tag="button"
            class="btn"
            :to="'/profile/admin/categories-manager/edit/' + category.id"
          >edit</router-link>
        </th>
        <th class="cell">
          <input
            class="clickable"
            type="checkbox"
            :value="category.id"
            v-model="selectedCategories"
          >
        </th>
      </tr>
    </tbody>
    <tbody v-else>
      <tr class="row">
        <td colspan="2" class="cell">no categories yet</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      selectedCategories: []
    };
  },
  beforeCreate() {
    this.$store.dispatch("category/getAll");
  },
  computed: {
    categories() {
      return this.$store.getters["category/all"];
    }
  }
};
</script>

<style lang="scss" scoped>
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
  .cell {
    border: 1px solid;
    padding: 10px;
  }
}
</style>
