<template>
  <div class="page view-models">
    <h1 class="title">Comprendre les view-models</h1>
    <p>comprendre les view-models, c'est super important dans ce framework.
      <br>C'est l'occasion de profiter du two-way binding
    </p>
    <hr>
    <Comp1></Comp1>
  </div>
</template>

<script>
import Comp1 from "@/components/HelloViewModel.vue";
export default {
  components: {
    Comp1
  }
};
</script>

<style>
</style>
