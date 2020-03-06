<template>
  <v-app-bar color="cyan darken-2" dark dense fixed>
    <v-toolbar-title>
      <router-link class="logo mr-6" tag="span" :to="{name: 'home'}">vueTabTracker</router-link>
    </v-toolbar-title>
    <v-btn value="Browse" text :to="{name: 'songs'}">
      <span>Browse</span>
    </v-btn>
    <v-spacer></v-spacer>
    <!-- navbar buttons -->
    <v-btn value="Login" text :to="{name: 'login'}" v-if="!$store.state.isUserLoggedIn">
      <span class="hidden-xs-only mr-1">Login</span>
      <v-icon>mdi-account-key</v-icon>
    </v-btn>
    <v-btn
      @click="logout"
      value="Logout"
      text
      :to="{name: 'home'}"
      v-if="$store.state.isUserLoggedIn"
    >
      <span class="hidden-xs-only mr-1">Logout</span>
      <v-icon>mdi-account-arrow-left</v-icon>
    </v-btn>
    <v-btn value="Sign Up" text :to="{name: 'register'}" v-if="!$store.state.isUserLoggedIn">
      <span class="hidden-xs-only mr-1">Sign Up</span>
      <v-icon>mdi-account-heart</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {
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