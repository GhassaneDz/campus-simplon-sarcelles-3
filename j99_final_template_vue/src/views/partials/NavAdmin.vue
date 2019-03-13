<template>
  <nav id="nav_admin" class="nav">
    <ul class="list">
      <router-link tag="li" class="link" to="/profile/admin">
        <span>admin</span>
        <ul>
          <router-link
          exact
            tag="li"
            active-class="is-active"
            class="link"
            to="/profile/admin/users-manager"
          >users</router-link>
          <router-link
          exact
            tag="li"
            active-class="is-active"
            class="link"
            to="/profile/admin/articles-manager"
          >articles</router-link>
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
  padding: 0 0 10px;
  .list {
    list-style: none;
    text-align: left;
    padding-left: 0;
    .link.is-active {
      color: darkorange;
    }
  }
}
</style>
