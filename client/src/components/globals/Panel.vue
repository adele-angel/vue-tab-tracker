<template>
  <v-col xs="12" class="mb-n3">
    <v-card tile>
      <v-app-bar dark color="cyan darken-2 elevation-0">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
      </v-app-bar>
      <v-card-text class="px-xs-2 px-md-5">
        <slot>No content available.</slot>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"]
};
</script>