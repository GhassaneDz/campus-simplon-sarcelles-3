<template>
  <div id="app">
    <Burger />
    <HeaderMain/>
    <NavMobile />
    <!-- router-view représente toutes les routes de premiers niveaux -->
    <main id="content_main">
      <AppMessage />
      <router-view/>
    </main>
    <FooterMain/>
  </div>
</template>
<script>
import Burger from "@/components/Burger.vue";
import AppMessage from "@/components/AppMessage.vue";
import HeaderMain from "@/views/partials/Header.vue";
import NavMobile from "@/views/partials/NavMobile.vue";
import FooterMain from "@/views/partials/Footer.vue";

export default {
  components: {
    AppMessage,
    HeaderMain,
    FooterMain,
    NavMobile,
    Burger
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  font-size: 16px;
}

.clickable, .btn {
    cursor: pointer;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  & > *:not(.page) {
    padding: 10px 20px;
  }
  position: relative;
}
#content_main {
  position: relative;
  top: 120px;
}
.page {
  padding: 40px 20px;
  min-height: calc(100vh - (120px + 200px));
}
</style>
