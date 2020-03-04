<template>
  <Panel title="Lyrics">
    <div class="multiline">{{lyrics}}</div>
  </Panel>
</template>

<script>
export default {
  name: "Lyrics",
  props: ["lyrics"]
};
</script>