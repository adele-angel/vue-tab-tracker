<template>
  <v-app-bar color="cyan darken-2" dark dense fixed>
    <v-toolbar-title>
      <span class="logo mr-6" @click="navigateTo({name: 'home'})">vueTabTracker</span>
    </v-toolbar-title>
    <v-btn value="Browse" text to="songs">
      <span>Browse</span>
    </v-btn>
    <v-spacer></v-spacer>

    <!-- navbar buttons -->

    <v-btn value="Login" text to="login" v-if="!$store.state.isUserLoggedIn">
      <span class="hidden-xs-only mr-1">Login</span>
      <v-icon>mdi-account-key</v-icon>
    </v-btn>
    <v-btn @click="logout" value="Logout" text to="/" v-if="$store.state.isUserLoggedIn">
      <span class="hidden-xs-only mr-1">Logout</span>
      <v-icon>mdi-account-arrow-left</v-icon>
    </v-btn>
    <v-btn value="Sign Up" text to="register" v-if="!$store.state.isUserLoggedIn">
      <span class="hidden-xs-only mr-1">Sign Up</span>
      <v-icon>mdi-account-heart</v-icon>
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
      console.log(route);

      this.$router.push(route);
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    }
  }
};
</script>


<style>
.logo {
  cursor: pointer;
}
</style>