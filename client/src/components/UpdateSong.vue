<template>
  <Panel title="Song Metadata">
    <v-form ref="formUpdateSong" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            type="text"
            :rules="rules.title"
            v-model="song.title"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            :rules="rules.artist"
            v-model="song.artist"
            label="Artist"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            :rules="rules.genre"
            v-model="song.genre"
            label="Genre"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            :rules="rules.album"
            v-model="song.album"
            label="Album"
            required
          ></v-text-field>
          <v-text-field
            type="url"
            :rules="rules.link"
            v-model="song.albumCoverURL"
            label="Album Cover Link"
            required
          ></v-text-field>
          <v-text-field
            type="text"
            :rules="rules.youtubeId"
            v-model="song.youtubeId"
            label="YouTube ID"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="8">
          <v-textarea label="Lyrics" :rules="rules.lyrics" v-model="song.lyrics" outlined required></v-textarea>
          <v-textarea label="Tabs" :rules="rules.tab" v-model="song.tab" outlined required></v-textarea>
          <v-btn @click="updateSong" dark tile color="cyan darken-2" block>Save</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  name: "UpdateSong",
  data() {
    return {
      valid: true,
      error: null,
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
      rules: {
        title: [v => !!v || "Title is required"],
        artist: [v => !!v || "Artist name is required"],
        genre: [v => !!v || "Genere is required"],
        album: [v => !!v || "Album name is required"],
        link: [
          v => !!v || "Link to album image is required",
          v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
          v =>
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
              v
            ) || "Image link must be valid"
        ],
        youtubeId: [
          v => !!v || "YouTube ID is required",
          v => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
          v => /^[a-zA-Z0-9_-]{11}$/.test(v) || "YouTube ID must be valid"
        ],
        lyrics: [v => !!v || "Lyrics are required"],
        tab: [v => !!v || "Tabs are required"]
      }
    };
  },
  watch: {
    title: "validateForm",
    artist: "validateForm",
    genre: "validateForm",
    album: "validateForm",
    albumCoverURL: "validateForm",
    youtubeId: "validateForm",
    lyrics: "validateForm",
    tab: "validateForm"
  },
  methods: {
    validateForm() {
      this.$refs.formUpdateSong.validate();
    },
    async updateSong() {
      try {
        await SongsService.update(this.song);
        this.$router.push({
          name: "song",
          params: {
            songId: this.song.id
          }
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data[0];
  }
};
</script>