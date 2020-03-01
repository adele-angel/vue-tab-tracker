<template>
  <v-app-bar color="cyan darken-2" dark dense fixed>
    <v-toolbar-title>
      <span class="logo" @click="navigateTo({name: 'home'})">vueTabTracker</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- navbar buttons -->
    <v-btn value="Login" text to="login">
      <v-icon>mdi-account</v-icon>
      <span class="hidden-sm-and-down">Login</span>
    </v-btn>
    <v-btn value="Sign Up" text to="register">
      <span>Sign Up</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<style>
.logo {
  cursor: pointer;
}
</style>