<template>
  <div id="widget" class="btns manager">
    <router-link
      tag="button"
      class="btn fa fa-plus"
      :to="path.create"
    ></router-link>
    <router-link
      tag="button"
      class="btn fa fa-eye"
      :to="path.list"
    ></router-link>
  </div>
</template>

<script>
export default {
    props: ["path"]
};
</script>

<style lang="scss" scoped>
#widget {
  margin-top: 10px;
  .btn {
    width: 50px;
    &:first-of-type {
      margin-right: 10px;
    }
  }
}
</style>
