<template>
  <Panel :title="song.title + ' / ' + song.artist">
    <div>Genre: {{song.genre}}</div>
    <div>Album: {{song.album}}</div>
    <div>
      <img :src="song.albumCoverURL" alt="song.album" />
    </div>
    <Panel title="Lyrics">{{song.lyrics}}</Panel>
    <Panel title="Tabs">{{song.tab}}</Panel>
    <Panel title="Video">{{song.youtubeId}}</Panel>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";

export default {
  name: "ViewSong",
  components: {
    Panel
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