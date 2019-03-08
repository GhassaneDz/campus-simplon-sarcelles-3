<template>
  <div id="app_message" class="msg" :class="level" v-if="msg">
    <span>{{ msg }}</span>
    <i class="icon fa fa-times" @click="$store.commit('appEvents/resetMessage')"></i>
  </div>
</template>
<script>
export default {
  computed: {
    msg() {
      return this.$store.getters["appEvents/currentAppMessage"];
    },
    level() {
      return this.$store.getters["appEvents/currentAppMessageLevel"];
    }
  }
};
</script>
<style lang="scss" scoped>
.icon {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  &:hover {
    color: white;
  }
}
.msg {
  align-items: center;
  border: 1px solid;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 540px;
  padding: 10px;
  position: relative;
  top: 20px;
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
