<template>
  <Panel title="Login">
    <v-form ref="formLogin" autocomplete="off" lazy-validation>
      <v-text-field type="email" :rules="emailRules" v-model="email" label="E-Mail" required></v-text-field>
      <v-text-field
        type="password"
        :rules="passwordRules"
        v-model="password"
        label="Password"
        autocomplete="off"
        required
      ></v-text-field>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn @click="login" dark tile color="cyan darken-2" block>Login</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </Panel>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      error: null
    };
  },
  methods: {
    validateForm() {
      this.$refs.formLogin.validate();
    },
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "songs"
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
