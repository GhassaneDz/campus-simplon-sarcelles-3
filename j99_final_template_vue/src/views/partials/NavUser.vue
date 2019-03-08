<template>
  <nav id="nav_user" class="nav">
    <ul class="list">
      <router-link tag="li" class="link" to="/profile/edit">edit</router-link>
      <li>
        <a class="link" href="#">logout</a>
      </li>
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
  > .list {
    list-style: none;
    text-align: left;
    padding-left: 0;
  }
}
</style>
