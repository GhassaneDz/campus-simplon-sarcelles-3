<template>
  <div id="app">
    <MainNav></MainNav>
    <router-view/>
  </div>
</template>
<script>
import MainNav from "@/views/partials/MainNav.vue";
export default {
  created() {
    this.$store.dispatch("getAllUsers").then(resFinal => {
      console.log(resFinal)
    }).catch(err => {
      console.error(err);
    })
  },
  components: {
    MainNav
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  padding: 0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .list {
    padding-left: 0;
    display: flex;
    list-style: none;
  }
  .router-link-active {
    color: darkorange;
  }
  .item {
    padding: 0 10px 0 0;
    &::after {
      content: " | ";
    }
  }
}
.error {
  color: #721c24 !important;
  background-color: #f8d7da !important;
  border-color: #f5c6cb !important;
}
.warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
.success {
  color: #0c5460;
  background-color: #d1ecf1;
  border-color: #bee5eb;
}
.btn,
.clickable {
  cursor: pointer;
}
</style>
