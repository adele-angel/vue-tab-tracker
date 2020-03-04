<template>
  <Panel title="Tabs">
    <div class="multiline">{{tab}}</div>
  </Panel>
</template>

<script>
export default {
  name: "Tab",
  props: ["tab"]
};
</script>