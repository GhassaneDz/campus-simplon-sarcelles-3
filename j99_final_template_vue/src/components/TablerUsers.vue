<template>
  <table v-if="users.length" id="tabler">
    <thead>
      <tr>
        <th class="cell" v-for="(val, prop) in users[0]" :key="prop">{{ prop }}</th>
        <th class="cell">
          <button class="btn" @click="deleteUsers">
            <i class="fa fa-trash fa-lg"></i>
          </button>
        </th>
        <th class="cell">
          <button class="btn" @click="setUsersAsAdmin">
            <i class="fas fa-unlock-alt fa-lg" title="set as admin"></i>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="row" v-for="(user, n) in users" :key="n" :id="`user_${user.id}`">
        <td class="cell" v-for="(val, prop) in user" :key="prop">{{ val }}</td>
        <td class="cell">
          <input type="checkbox" class="clickable" :value="Number(`${user.id}`)" v-model="userToDelete">
        </td>
        <td class="cell">
          <input type="checkbox" class="clickable" :value="Number(`${user.id}`)" v-model="userToAdmin">
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
      userToDelete: [],
      userToAdmin: [],
    };
  },
  computed: {
    users() {
      return this.$store.getters["users/all"];
    }
  },
  methods: {
    deleteUsers() {
      console.log("user to delete =>", this.userToDelete);
    },
    setUsersAsAdmin() {
      console.log("user to set as admin =>", this.userToAdmin);
    },
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
