<template>
  <div class="page login">
    <h1>Login</h1>
    <p>
      If you don't have an account yet, please <router-link to="/register">register</router-link>
    </p>
    <FormLogin />
  </div>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";
export default {
  components: {
    FormLogin
  }
};
</script>

<style>

</style>
