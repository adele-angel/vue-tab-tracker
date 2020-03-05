<template>
  <v-row>
    <v-col cols="12" sm="6" class="text-center" justify="space-around" align="center">
      <Metadata :song="song" />
    </v-col>
    <v-col cols="12" sm="6">
      <YouTube :youtubeId="song.youtubeId" />
    </v-col>
    <v-col cols="12" md="6">
      <Lyrics :lyrics="song.lyrics" />
    </v-col>
    <v-col cols="12" md="6">
      <Tab :tab="song.tab" />
    </v-col>
  </v-row>
</template>

<script>
import SongsService from "@/services/SongsService";
import Metadata from "@/components/ViewSong/Metadata";
import YouTube from "@/components/ViewSong/YouTube";
import Lyrics from "@/components/ViewSong/Lyrics";
import Tab from "@/components/ViewSong/Tab";

export default {
  name: "ViewSong",
  components: {
    Metadata,
    YouTube,
    Lyrics,
    Tab
  },
  data() {
    return {
      song: {}
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsService.show(songId)).data[0];
  }
};
</script>

<style>
.multiline {
  white-space: pre-line;
}
</style>