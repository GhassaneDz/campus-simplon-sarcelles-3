<template>
  <footer id="footer_main">
    <div class="row">
      <ul class="list social">
        <li class="clickable">instagram</li>
        <li class="clickable">facebook</li>
        <li class="clickable">twitter</li>
      </ul>
      <span>&copy;2019 - Simplon | Sarcelles P3</span>
    </div>
    <Logo/>
  </footer>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
#footer_main {
  padding: 10px 20px;
  height: 150px;
  background: #212929;
  color: white;
  top: 60px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.list.social {
  list-style-type: none;
  margin-bottom: 20px;
}
</style>
