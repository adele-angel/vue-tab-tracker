<template>
  <Panel title="Search">
    <v-card-text></v-card-text>
  </Panel>
</template>

<script>
import SongsService from "@/services/SongsService";

export default {
  name: "SongsSearchPanel",
  data() {
    return {
      search: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async mounted() {
    this.songs = (await SongsService.index()).data;
  }
};
</script>