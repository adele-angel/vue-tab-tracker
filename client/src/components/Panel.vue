<template>
  <v-col xs="12" class="mb-n3">
    <v-card class="mx-auto" tile>
      <v-app-bar dark color="cyan darken-2 elevation-0">
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" />
      </v-app-bar>
      <v-card-text class="px-xs-8 px-md-10">
        <slot>No slot content defined.</slot>
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