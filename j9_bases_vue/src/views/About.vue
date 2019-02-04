<template>
  <div class="about">
    <h1 class="title">This is an about page</h1>
    <ul>
      <li v-for="(info, index) in squaresInfos" :key="index">
        <Square :author="info.author" :title="info.title" @aLotOfClicks="logClicks($event)"/>
      </li>
    </ul>
  </div>
</template>
<script>
import Square from "@/components/Square.vue";
export default {
  data() {
    return {
      squaresInfos: [
        {title: "square 1", author: "foo"},
        {title: "square 2", author: "bar"},
        {title: "square 3", author: "baz"}
      ]
    }
  },
  components: {
    Square
  },
  methods: {
    logClicks(v) {
      console.log("@About => nombre de clicks =>", v);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

