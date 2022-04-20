<template>
  <div class="col-md-12">
    <h1>Hello world</h1>

    <button type="button" class="signup" v-on:click="Login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    Login() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>