<template>
  <Panel title="Song Metadata">
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
    <v-row class="ma-0 ma-sm-1 ma-md-3 ma-lg-6">
      <v-btn
        @click="navigateTo({name: 'update-song', params: {songId: song.id}})"
        dark
        tile
        color="cyan"
        block
      >
        <span class="mr-1">Edit</span>
        <v-icon>mdi-lead-pencil</v-icon>
      </v-btn>
    </v-row>
  </Panel>
</template>

<script>
export default {
  name: "Metadata",
  props: ["song"],
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>