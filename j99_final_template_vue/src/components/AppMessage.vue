<template>
  <div id="app_message" class="msg">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
    //   msg: "default message"
    };
  },
  computed: {
      msg() {
          return this.$store.getters["appEvents/currentAppMessage"];
      }
  }
};
</script>

<style lang="scss" scoped>
.msg {
  align-items: center;
  border: 1px solid;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 540px;
  padding: 10px;
}
.success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
}
.warning {
  background-color: #fff3cd;
  border-color: #ffeeba;
  color: #856404;
}
.error {
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
}
</style>
