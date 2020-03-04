<template>
  <v-responsive class="text-center">
    <youtube :video-id="youtubeId" :player-width="'100%'" block></youtube>
  </v-responsive>
</template>

<script>
export default {
  name: "YouTube",
  props: ["youtubeId"]
};
</script>
