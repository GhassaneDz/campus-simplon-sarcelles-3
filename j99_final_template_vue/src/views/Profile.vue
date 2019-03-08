<template>
  <div id="profile" class="page profile">
    <h1 class="title main">My profile</h1>
    <aside id="aside">
      <nav id="nav">
        <router-link to="admin-panel">admin</router-link>
        <router-link to="edit">edit</router-link>
        <a href="#">logout</a>
      </nav>
    </aside>
    <router-view></router-view>
  </div>
</template>
<style scoped lang="scss">
#profile {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
.title.main {
  grid-column: 2 / 13;
}
#aside {
  grid-column: 1 / 2;
  grid-row: 1 / 5;
}
#nav {
  display: flex;
  flex-direction: column;
}
</style>
