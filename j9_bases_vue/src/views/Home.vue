<template>
  <div class="home">
    <GetAJAX></GetAJAX>
    <TodoList></TodoList>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import GetAJAX from '@/components/GetAJAX.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    GetAJAX,
    TodoList
  }
}
</script>
