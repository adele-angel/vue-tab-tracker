<template>
  <Panel title="Songs">
    <div slot="action">
      <router-link to="/songs/create">
        <v-btn color="cyan" fab dark medium absolute bottom right>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </router-link>
    </div>

    <v-col v-for="song in songs" :key="song.id" cols="12">
      <v-card light class="my-2">
        <div class="d-flex flex-wrap justify-space-between">
          <div>
            <v-card-title class="headline" v-text="song.title"></v-card-title>
            <v-card-subtitle v-text="song.artist"></v-card-subtitle>
            <v-card-text>
              <v-btn
                @click="navigateTo({name: 'song', params: {songId: song.id}})"
                dark
                tile
                color="cyan"
                block
              >View Details</v-btn>
            </v-card-text>
          </div>

          <div class="d-flex flex-column justify-center ma-2">
            <span class="ma-2">
              <v-chip class="mr-2" label>Genre</v-chip>
              {{song.genre}}
            </span>
            <span class="ma-2">
              <v-chip class="mr-2" label>Album</v-chip>
              {{song.album}}
            </span>
          </div>

          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="song.albumCoverURL"></v-img>
          </v-avatar>
        </div>
      </v-card>
    </v-col>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  name: "SongsPanel",
  data() {
    return {
      show: false,
      songs: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  }
};
</script>