<template>
  <nav id="nav_main">
    <router-link class="link" to="/" exact>Home</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/login">Login</router-link>
    <router-link class="link" to="/profile/infos">Profile</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#nav_main {
  padding: 30px;
  .link {
    font-weight: bold;
    color:#81c0ff;
    margin-right: 10px;
    &.router-link-exact-active,
    &:hover {
      color: #42b983;
    }
    &::after {
      content: " | ";
    }
    &:last-of-type {
      margin-right: 0;
      &::after {
        content: "";
      }
    }
  }
}
@media(max-width: 520px) {
  #nav_main {
    display: none;
  }
}
</style>
