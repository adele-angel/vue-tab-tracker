<template>
  <div id="register">
    <h1>Register</h1>
    <label for="email">E-Mail:</label>
    <input type="email" name="email" v-model="email" id="email" placeholder="e-mail" />
    <br />
    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" id="password" placeholder="password" />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>
