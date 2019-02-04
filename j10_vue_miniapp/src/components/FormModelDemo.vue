<template>
  <div>
    <form id="revision_vmodel" class="form">
      <input type="text" v-model="form.author" :class="{error: !form.author}">
      <textarea name id cols="30" rows="10" v-model="form.msg"></textarea>
    </form>
    <hr>
    <p>Author : {{form.author}}</p>
    <p>Msg : {{form.msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        author: "",
        msg: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.form {
    display: flex;
    flex-direction:column;
    max-width: 540px;
    margin: auto;
    input {
        margin-bottom: 10px;
        &.error {
            background: red;
        }
    }
}


</style>
