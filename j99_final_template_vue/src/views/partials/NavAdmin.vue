<template>
  <nav id="nav_admin" class="nav">
    <ul class="list">
      <router-link tag="li" class="link" to="/profile/admin">
        <span>admin</span>
        <ul>
          <router-link tag="li" class="link" to="/profile/admin/users">manage users</router-link>
          <router-link tag="li" class="link" to="/profile/admin/yourstuff">manage ressources</router-link>
        </ul>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  .list {
    list-style: none;
    text-align: left;
    padding-left: 0;
  }
}
</style>
