<template>
  <v-container>
    <v-row>
      <v-col xs="12" lg="8" offset-lg="2">
        <v-card class="mx-auto" tile>
          <v-app-bar dark color="cyan darken-2 elevation-0">
            <v-toolbar-title>{{title}}</v-toolbar-title>
          </v-app-bar>
          <v-card-text class="px-xs-10 px-md-12">
            <slot>No slot content defined.</slot>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Panel",
  props: ["title"]
};
</script>