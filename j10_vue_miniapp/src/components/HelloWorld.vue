<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ pageMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageMsg: "lorem lorem lorem ...",

    }
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#revision_vmodel {
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin: auto;
}
#revision_vmodel input {
  margin-bottom: 20px;
}


</style>
