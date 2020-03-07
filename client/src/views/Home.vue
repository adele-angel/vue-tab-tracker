<template>
  <v-container class="text-center my-12">
    <v-card class="mx-auto pa-10">
      <h1 class="md-display-3 cyan--text text--darken-4">Welcome to vueTabTracker</h1>
      <v-img src="@/assets/tabs.png" alt="VueJS" class="my-5" max-height="200" contain />
      <v-card class="mx-auto pa-3" max-width="344">
        <v-icon class="mr-1">mdi-git</v-icon>View GitHub repository
        <a
          class="link"
          href="https://github.com/adele-angel/vue-tab-tracker"
        >here</a>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Home"
};
</script>