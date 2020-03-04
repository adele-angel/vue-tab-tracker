<template>
  <Panel title="YouTube Video">
    <v-responsive class="text-center">
      <youtube :video-id="youtubeId" :player-width="'100%'" block></youtube>
    </v-responsive>
  </Panel>
</template>

<script>
export default {
  name: "YouTube",
  props: ["youtubeId"]
};
</script>
