<template>
  <Panel title="Search">
    <v-text-field
      v-model="search"
      label="Search by song title, artist, album or genre"
      append-icon="mdi-magnify"
      class="ma-3"
    ></v-text-field>
  </Panel>
</template>

<script>
import _ from "lodash";

export default {
  name: "SongsSearchPanel",
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search: _.debounce(async function() {
      const route = {
        name: "songs"
      };
      if (this.sreach !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    }, 700),
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>