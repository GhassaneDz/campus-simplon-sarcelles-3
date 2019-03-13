<template>
  <div id="profile" class="page profile">
    <aside id="aside">
      <NavAdmin />
      <hr>
      <NavUser />
    </aside>
    <router-view class="sub-page"></router-view>
  </div>
</template>
<script>
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
  font-size: 1.2rem;
  grid-column: 3 / 9;
}
#aside {
  border-right: 2px solid;
  padding-right: 10px;
  grid-column: 1 / 3;
  grid-row: 1 / 5;
}

.sub-page {
  grid-row: 1 / 5;
  grid-column: 3 / 9;
  padding-left: 20px;
}
</style>
