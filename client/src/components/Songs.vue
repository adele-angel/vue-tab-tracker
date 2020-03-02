<template>
  <Panel title="Songs">
    <div v-for="song in songs" :key="song.id">
      <p>
        {{song.title}}
        <br />
        {{song.artist}}
        <br />
        {{song.genre}}
        <br />
        {{song.album}}
        <br />
        <img :src="song.albumCoverURL" alt="song.album" />
        <br />
        {{song.lyrics}}
        <br />
        {{song.tab}}
      </p>
    </div>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService";
import Panel from "@/components/Panel";

export default {
  name: "Songs",
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    };
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  }
};
</script>