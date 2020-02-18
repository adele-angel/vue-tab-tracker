<template>
  <div id="register">
    <h1>Register</h1>
    <form>
      <label for="email">E-Mail:</label>
      <input type="email" name="email" v-model="email" id="email" placeholder="e-mail" />
      <br />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        v-model="password"
        id="password"
        placeholder="password"
      />
      <br />
      <span class="error" v-html="error" />
      <br />
      <button @click="register">Register</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
