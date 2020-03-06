<template>
  <Panel title="Recently View Songs" class="mt-3">
    <template>
      <v-data-table :headers="headers" :items="songs" :items-per-page="5" class="elevation-1"></v-data-table>
    </template>
  </Panel>
</template>

<script>
import { mapState } from "vuex";
import SongHistoryService from "@/services/SongHistoryService";

export default {
  name: "RecentlyViewedSongs",
  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Artist",
          value: "artist"
        }
      ],
      songs: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.songs = (
        await SongHistoryService.index({
          userId: this.user.id
        })
      ).data;
    }
  }
};
</script>