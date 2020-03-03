<template>
  <v-row class="text-center" justify="space-around" align="stretch">
    <v-col cols="12" sm="12" md="6" class="align-self-center">
      <p class="display-1">{{song.title}}</p>
      <p class="title mt-n3">{{song.artist}}</p>
      <p class="subtitle-1">{{song.genre}}</p>
    </v-col>
    <v-col cols="12" sm="6">
      <v-img :src="song.albumCoverURL"></v-img>
      <p>{{song.album}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Metadata",
  props: ["song"]
};
</script>