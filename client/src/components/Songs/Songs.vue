<template>
  <div>
    <SongsBookmarks />
    <SongsSearchPanel />
    <SongsPanel />
  </div>
</template>

<script>
import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/Songs/SongsPanel";
import SongsSearchPanel from "@/components/Songs/SongsSearchPanel";
import SongsBookmarks from "@/components/Songs/SongsBookmarks";

export default {
  name: "Songs",
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks
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