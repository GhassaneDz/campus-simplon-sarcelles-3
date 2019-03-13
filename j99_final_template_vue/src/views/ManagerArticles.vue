<template>
  <div>
    <hr>
      <BtnWidget :path="{
          list: '/profile/admin/articles-manager/list',
          create: '/profile/admin/articles-manager/create'
      }"/>
    <router-view></router-view>
  </div>
</template>

<script>
import BtnWidget from "@/components/ButtonsManager.vue";
export default {
    components: {
        BtnWidget
    }
};
</script>

<style scoped lang="scss">
.title {
    font-size: 1rem;
}
.clickable.fa {
  height: 32px;
  width: 32px;
}
</style>
