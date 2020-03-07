<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5" v-if="isUserLoggedIn">
        <RecentlyViewedSongs />
        <SongsBookmarks />
      </v-col>
      <v-col cols="12" :sm="isUserLoggedIn ? 7 : 12">
        <SongsSearchPanel />
        <SongsPanel />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SongsService from "@/services/SongsService";
import SongsPanel from "@/components/Songs/SongsPanel";
import SongsSearchPanel from "@/components/Songs/SongsSearchPanel";
import SongsBookmarks from "@/components/Songs/SongsBookmarks";
import RecentlyViewedSongs from "@/components/Songs/RecentlyViewedSongs";

export default {
  name: "Songs",
  components: {
    SongsPanel,
    SongsSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  data() {
    return {
      songs: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  }
};
</script>