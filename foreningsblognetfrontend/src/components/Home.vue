<template>
  <div class="col-md-12">
    <button type="button" class="signup" v-on:click="Login">Login</button>

    <button type="button" class="Hello" v-on:click="GetUsers">
      ListofUsers
    </button>
    <div id="app">
      {{ Users }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            Users:[]
        }
    },
  methods: {
    async GetUsers() {
      axios
        .get("https://localhost:49165/api/users")
        .then((response) => (this.Users = response.data));
    },

    Login() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>