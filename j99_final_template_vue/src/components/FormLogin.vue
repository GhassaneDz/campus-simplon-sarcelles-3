<template>
  <form id="login" 
  @submit="$event.preventDefault();checkForm();">

    <label for="email" class="label">Pick an email</label>
    <input id="email" type="text" class="input" v-model="user.email" required>
    
    <label for="password" class="label">Choose a password</label>

    <div class="wrap">
      <input ref="initial" id="password" type="password" class="input" v-model="user.password" required>
      <i class="icon clickable fa fa-eye-slash" @click="toggleEyeIcon($event, 'initial')"></i>
    </div>

    <button class="btn">ok !</button>

  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "gui@gui.com",
        password: "123Soleil"
      }
    };
  },
  methods: {
    checkForm() {
      console.log("user to login =>", this.user);
      let errors = 0;
      errors += this.checkPasswordConfirm() ? 0 : 1;
      console.log("how many errors ? => ", errors);

      if (!errors) {
        this.$store.commit("appEvents/setCurrentMessage", 
        {text: "login ok", level: "success"});
      } else {
        this.$store.commit("appEvents/setCurrentMessage", 
        {text: "Wrong infos sorry", level: "warning"});
      }
    },
    toggleEyeIcon(evt, mode) {
      const icon = evt.target;
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");
      const type = this.$refs[mode].type === "password" ? "text" : "password"; // if ... else
      this.$refs[mode].type = type;
    }
  }
};
</script>
<style scoped lang="scss">
#login {
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
