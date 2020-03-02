<template>
  <Panel title="Song Metadata">
    <v-form>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field type="text" v-model="song.title" label="Title"></v-text-field>
          <v-text-field type="text" v-model="song.artist" label="Artist"></v-text-field>
          <v-text-field type="text" v-model="song.genre" label="Genre"></v-text-field>
          <v-text-field type="text" v-model="song.album" label="Album"></v-text-field>
          <v-text-field type="text" v-model="song.albumCoverURL" label="Album Cover Link"></v-text-field>
          <v-text-field type="text" v-model="song.youtubeId" label="YouTube ID"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-textarea label="Lyrics" v-model="song.lyrics" outlined></v-textarea>
          <v-textarea label="Tabs" v-model="song.tab" outlined></v-textarea>
          <v-btn @click="createSong" dark tile color="cyan darken-2" block>Create</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";

export default {
  name: "CreateSong",
  components: {
    Panel
  },
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumCoverURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null
    };
  },
  methods: {
    async createSong() {
      try {
        await SongsService.create(this.song);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>