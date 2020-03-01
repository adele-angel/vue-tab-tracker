<template>
  <v-container>
    <v-row>
      <v-col xs="12" lg="8" offset-lg="2">
        <v-card class="mx-auto" tile>
          <v-app-bar dark color="cyan darken-2 elevation-0">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-app-bar>

          <v-card-text class="px-xs-10 px-md-12">
            <v-form ref="formLogin" autocomplete="off" :lazy-validation="lazy">
              <v-text-field
                type="email"
                :rules="emailRules"
                v-model="email"
                label="E-Mail"
                required
              ></v-text-field>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      emailRules: [v => !!v || "E-mail is required"],
      password: "",
      passwordRules: [v => !!v || "Password is required"],
      lazy: false,
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>
