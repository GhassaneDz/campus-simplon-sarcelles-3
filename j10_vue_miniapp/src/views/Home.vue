<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li>
        https://www.codewars.com/
      </li>
      <li>https://www.youtube.com/watch?v=2CSr2vBApSI&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo</li>
      <li>
        https://router.vuejs.org/api/#to
      </li>
      <li>
        https://www.youtube.com/watch?v=zf_cb_Nw5zY
      </li>
      <li>
        https://www.youtube.com/watch?v=v2ifWcnQs6M
      </li>
      <li>
        https://www.youtube.com/watch?v=nyJSd6V2DRI
      </li>
    </ul>
    <!-- <HelloWorld msg="Bonjour tout le monde"/> -->
    <FormDemo1></FormDemo1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FormDemo1 from '@/components/FormModelDemo.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    FormDemo1
  }
}
</script>
<style>


</style>
