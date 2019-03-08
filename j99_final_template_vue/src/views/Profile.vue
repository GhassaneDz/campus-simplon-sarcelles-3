<template>
  <div id="profile" class="page profile">
    <h1 class="title main">My profile</h1>
    <aside id="aside">
      <NavAdmin/>
      <hr>
      <NavUser />
    </aside>
    <main id="main-content">
  
      <router-view class="sub-page"></router-view>
    </main>
  </div>
</template>
<script>
import User from "./partials/NavAdmin.vue";
import NavAdmin from "./partials/NavAdmin.vue";
import NavUser from "./partials/NavUser.vue";
export default {
  components: {
    NavAdmin,
    NavUser
  }
};
</script>

<style scoped lang="scss">
#profile {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 44px repeat(3, 1fr);
}
.title.main {
  grid-column: 3 / 9;
}
#aside {
  border-right: 2px solid;
  padding-right: 10px;
  grid-column: 1 / 3;
  grid-row: 1 / 5;
}

#main-content {
  grid-row: 2 / 5;
  grid-column: 3 / 9;
  padding-left: 20px;
}
</style>
