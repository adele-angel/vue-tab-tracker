<template>
  <v-row>
    <v-col cols="12" sm="6" class="text-center" justify="space-around" align="center">
      <Panel title="Song Metadata">
        <Metadata :song="song" />
      </Panel>
    </v-col>
    <v-col cols="12" sm="6">
      <Panel title="YouTube Video">
        <YouTube :youtubeId="song.youtubeId" />
      </Panel>
    </v-col>
    <v-col cols="12" md="6">
      <Panel title="Lyrics">
        <Lyrics :lyrics="song.lyrics" />
      </Panel>
    </v-col>
    <v-col cols="12" md="6">
      <Panel title="Tabs">
        <Tab :tab="song.tab" />
      </Panel>
    </v-col>
  </v-row>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";
import Metadata from "@/components/ViewSong/Metadata";
import YouTube from "@/components/ViewSong/YouTube";
import Lyrics from "@/components/ViewSong/Lyrics";
import Tab from "@/components/ViewSong/Tab";

export default {
  name: "ViewSong",
  components: {
    Panel,
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

<style  scoped>
.multiline {
  white-space: pre-line;
}
</style>