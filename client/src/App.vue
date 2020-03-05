<template>
  <v-app>
    <v-system-bar dark color="cyan darken-2"></v-system-bar>
    <!-- app toolbar -->
    <Header />
    <!-- sizes page content based upon application components -->
    <v-content>
      <main>
        <!-- provides the application the proper gutter -->
        <v-container class="my-6">
          <!-- using vue-router -->
          <router-view />
        </v-container>
      </main>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>
