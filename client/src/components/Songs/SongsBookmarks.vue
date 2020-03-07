<template>
  <Panel title="Bookmarks" class="mt-3">
    <div slot="action">
      <v-avatar color="red" class="ml-3">
        <v-icon>mdi-heart</v-icon>
      </v-avatar>
    </div>
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
      this.bookmarks = (await BookmarksService.index()).data;
    }
  }
};
</script>