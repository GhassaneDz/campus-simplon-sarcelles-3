<template>
  <form id="form_user" class="form" @submit="handleSubmit">
    <h1 class="title">{{ title }}</h1>
    <div v-if="!user">sorry papy but we cannot find this user</div>
    <div v-else>
      <p class="msg" :class="msgCls">{{ msg }}</p>
      <label for="lastname" class="label">lastname</label>
      <input id="lastname" class="input" type="text" v-model="user.lastname" required>
      <label for="name" class="label">name</label>
      <input id="name" class="input" type="text" v-model="user.name" required>
      <button class="btn">ok</button>
    </div>
  </form>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$route.params.id
        ? this.$store.getters["user"](this.$route.params.id)
        : {
          id: null,
          lastname: "",
          name: ""
        };
    }
  },
  data() {
    return {
      msg: null,
      msgCls: null
    };
  },
  methods: {
    displayMessage(msg, status) {
      if (!msg) return console.error(`the message is required !`);
      const possibleStatuses = ["success", "warning", "error"];
      if (possibleStatuses.includes(status)) {
        this.msgCls = status;
        this.msg = msg;
      } else console.warning(`${status} is not a valid css class for messages`);
    },
    createUser() {
      // this.user.id = Date.now();
      // this.$store.commit("addUser", this.user);
      this.$store.dispatch("addUser", this.user)
      .then(res => {
        this.displayMessage("new user has been created", "success");
      })
      .catch(res => {
        this.displayMessage("error during user creation", "error");
      })
    },
    updateUser() {
      this.$store.commit("updateUser", this.user);
      this.displayMessage("user has been updated", "success");
    },
    handleSubmit(e) {
      e.preventDefault();
      if (!this.user.name || !this.user.lastname) {
        return this.displayMessage("Sorry, name AND lastname are required", "warning");
      }
      if (this.$route.params.id) this.updateUser();
      else this.createUser();
    }
  },
  props: ["title"]
};
</script>
<style lang="scss" scoped>
#form_user {
  display: flex;
  flex-direction: column;
  max-width: 540px;
  & > *:nth-last-child(2) {
    margin-bottom: 20px;
  }
}
p:empty {
  display: none;
}
.msg {
  margin: 10px 0;
  border-radius: 0.4rem;
  padding: 10px;
}
</style>
