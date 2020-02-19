<template>
  <v-app>
    <!-- sizes page content based upon application components -->
    <v-content>
      <!-- provides the application the proper gutter -->
      <v-container fluid>
        <!-- using vue-router -->
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
