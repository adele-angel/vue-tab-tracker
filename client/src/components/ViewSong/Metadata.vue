<template>
  <Panel title="Song Metadata">
    <v-row class="text-center" justify="space-around" align="stretch">
      <v-col cols="12" sm="12" md="6" class="align-self-center">
        <p class="display-1">{{song.title}}</p>
        <p class="title mt-n3">{{song.artist}}</p>
        <p class="subtitle-1">{{song.genre}}</p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-img :src="song.albumCoverURL"></v-img>
        <p>{{song.album}}</p>
      </v-col>
    </v-row>
    <v-row justify="space-around" align="stretch">
      <v-col cols="12" md="6">
        <v-btn :to="{name: 'update-song', params: {songId: song.id}}" dark tile color="cyan" block>
          <span class="mr-1">Edit</span>
          <v-icon>mdi-lead-pencil</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          @click="setBookmark"
          dark
          tile
          color="red lighten-1"
          block
        >
          <span class="mr-1">Add Bookmark</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          @click="unsetBookmark"
          dark
          tile
          color="yellow darken-2"
          block
        >
          <span class="mr-1">Remove Bookmark</span>
        </v-btn>
      </v-col>
    </v-row>
  </Panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  name: "Metadata",
  props: ["song"],
  data() {
    return {
      bookmark: null,
      error: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }

      try {
        const bookmarks = (
          await BookmarksService.index({
            songId: this.song.id,
            userId: this.user.id
          })
        ).data;

        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  methods: {
    async setBookmark() {
      try {
        this.bookmark = (
          await BookmarksService.post({
            songId: this.song.id,
            userId: this.user.id
          })
        ).data;
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
    async unsetBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>