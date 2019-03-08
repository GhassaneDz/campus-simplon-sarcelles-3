<template>
  <table v-if="users.length" id="tabler">
    <thead>
      <tr>
        <th class="cell" v-for="(val, prop) in users[0]" :key="prop">{{ prop }}</th>
        <th class="cell">
          <button class="btn" @click="test">
            <i class="fa fa-trash fa-lg"></i>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="row" v-for="(user, n) in users" :key="n" :id="`user_${user.id}`">
        <td class="cell" v-for="(val, prop) in user" :key="prop">{{ val }}</td>
        <td class="cell">
          <input type="checkbox" class="clickable" :value="Number(`${user.id}`)" v-model="selected">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  beforeCreate() {},
  data() {
    return {
      selected: []
    };
  },
  computed: {
    users() {
      return this.$store.getters["users/all"];
    }
  },
  methods: {
    test() {
      console.log(this.selected);
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
    border-radius: .3rem;
    outline: none;
    padding: 10px;
    width: 48px;

    &:hover {
      background: darkorange;
      color: white;
    }
  }
  .row:nth-child(odd) {
    background: #c0c0c047;
  }
  .cell {
    border: 1px solid;
    padding: 10px;
  }
}
</style>
