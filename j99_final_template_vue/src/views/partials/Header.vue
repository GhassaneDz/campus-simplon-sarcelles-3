<template>
  <header id="header_main">
    <Logo/>
    <NavMain/>
    <Burger />
  </header>
</template>

<script>
import NavMain from "./NavMain.vue";
import Logo from "@/components/Logo.vue";
import Burger from "@/components/Burger.vue";

export default {
  components: {
    Burger,
    NavMain,
    Logo
  }
};
</script>

<style lang="scss" scoped>
#header_main {
  align-items: center;
  background: #212929;
  color: white;
  display: flex;
  height: 120px;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 10;
}
</style>
