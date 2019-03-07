<template>
  <form id="register" @submit="$event.preventDefault();checkForm();">
    <label for="lastname" class="label">Your lastname</label>
    <input id="lastname" type="text" class="input" v-model="user.lastname" required>
    
    <label for="name" class="label">Your name</label>
    <input id="name" type="text" class="input" v-model="user.name" required>
    
    <label for="email" class="label">Pick an email</label>
    <input id="email" type="text" class="input" v-model="user.email" required>
    
    <label for="password" class="label">Choose a password</label>
    <div class="wrap">
      <input ref="initial" id="password" type="password" class="input" v-model="user.password" required>
      <i class="icon clickable fa fa-eye-slash" @click="toggleEyeIcon($event, 'initial')"></i>
    </div>

    <label for="pass_confirm" class="label">Please confirm password</label>
    <div class="wrap">
      <input ref="confirm" id="pass_confirm" type="password" class="input" required>
      <i class="icon clickable fa fa-eye-slash" @click="toggleEyeIcon($event, 'confirm')"></i>
    </div>

    <button class="btn">ok !</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        // name: null,
        // lastname: null,
        // email: null,
        // password: null
        name: "gui",
        lastname: null,
        email: "gui@gui.com",
        password: "123Soleil"
      }
    };
  },
  methods: {
    checkAllFields() {
        const tester = (accu, val) => { // parse each val
            accu += !val ? 1 : 0; // if val falsy => increment accu
            return accu; // returns new value of accu
        };
        // get all user val as an array
        const userInfos = Object.values(this.user);
        // reduc ethis array !!! accumulator starts at 0
        const errors = userInfos.reduce(tester, 0); 
        return errors === 0; // if 0 zero errors, we're good to go
    },
    checkIsEmail() {},
    checkPassword() {},
    checkPasswordConfirm() {
      return this.user.password === this.$refs.confirm.value;
    },
    checkForm() {
      console.log("user to register =>", this.user);
      let errors = 0;
    //   errors += this.checkAllFields() ? 0 : 1;
      errors += this.checkPasswordConfirm() ? 0 : 1;
      console.log(errors);
      if (!errors) {
        // this.$store.dispatch("users/register");
      } else {
        // afficher message d'erreur !!!
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
#register {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 540px;
  margin: 0 auto;
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
