<template>
  <Panel title="Register">
    <v-form ref="formRegister" autocomplete="off" :lazy-validation="false">
      <v-text-field type="email" :rules="emailRules" v-model="email" label="E-Mail" required></v-text-field>
      <v-text-field
        type="password"
        :rules="rules"
        v-model="password"
        :counter="32"
        label="Password"
        autocomplete="off"
        required
      ></v-text-field>
      <v-text-field
        type="password"
        :rules="rules"
        v-model="match"
        label="Repeat Password"
        autocomplete="off"
        required
      ></v-text-field>
      <v-row>
        <v-col cols="12" sm="6">
          <v-btn @click="register" dark tile color="cyan darken-2" block>Register</v-btn>
        </v-col>
        <v-col cols="12" sm="6">
          <v-btn @click="reset" dark tile color="cyan darken-4" block>Reset</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </Panel>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: "",
      match: "",
      error: null
    };
  },
  computed: {
    rules() {
      const rules = [];
      if (this.password) {
        rules.push(v => !!v || "Password is required");
        rules.push(
          v =>
            (v && v.length <= 32) || "Password must be less than 32 characters"
        );
        rules.push(
          v => (v && v.length >= 8) || "Password must be at least 8 characters"
        );
        rules.push(v => /^\w+$/.test(v) || "Password uses invalid characters");
      }
      if (this.match) {
        rules.push(v => (!!v && v) === this.match || "Values do not match");
        rules.push(v => !!v || "Password verification is required");
      }
      return rules;
    }
  },
  watch: {
    email: "validateForm",
    password: "validateForm",
    match: "validateForm"
  },
  methods: {
    reset() {
      this.$refs.formRegister.reset();
    },
    validateForm() {
      this.$refs.formRegister.validate();
    },
    async register() {
      try {
        const response = await AuthenticationService.register({
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
