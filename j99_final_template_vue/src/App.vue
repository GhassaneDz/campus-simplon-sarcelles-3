<template>
  <div id="app">
    <Burger />
    <HeaderMain/>
    <NavMobile />
    <main id="content_main">
      <AppMessage />
      <!-- ce router-view représente toutes les routes de premiers niveaux -->
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
  font-size: 14px;
}

.clickable, .btn, .link {
    cursor: pointer;
}

.btn {
  outline: none;
  border-radius: .3rem;
  padding: 10px;
}

.btn:hover {
  color: whitesmoke;
  background: #42b983;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
#content_main {
  position: relative;
  top: 60px; /* on déplace le main vers le bas du document de la hauteur du header (fixed) */
}
.page {
  padding: 40px 20px;
  min-height: calc(100vh - (60px + 150px)); /* 100 de la hauteur de l'écran - la hauteur du header + footer*/
}
</style>
