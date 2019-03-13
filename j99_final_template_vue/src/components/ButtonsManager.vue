<template>
  <div class="btns manager">
    <router-link
      tag="button"
      class="clickable fa fa-plus"
      :to="path.create"
    ></router-link>
    <router-link
      tag="button"
      class="clickable fa fa-eye"
      :to="path.list"
    ></router-link>
  </div>
</template>

<script>
export default {
    props: ["path"]
};
</script>

<style>
</style>
