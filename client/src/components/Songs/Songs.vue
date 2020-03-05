<template>
  <div>
    <SongsSearchPanel />
    <SongsPanel />
  </div>
</template>

<script>
import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/Songs/SongsPanel";
import SongsSearchPanel from "@/components/Songs/SongsSearchPanel";

export default {
  name: "Songs",
  components: {
    SongsPanel,
    SongsSearchPanel
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