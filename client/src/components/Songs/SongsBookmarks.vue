<template>
  <Panel title="Bookmarks" class="mt-3">
    <template>
      <v-data-table :headers="headers" :items="bookmarks" :items-per-page="5" class="elevation-1"></v-data-table>
    </template>
  </Panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  name: "SongsBookmarks",
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
      bookmarks: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (
        await BookmarksService.index({
          userId: this.user.id
        })
      ).data;
    }
  }
};
</script>