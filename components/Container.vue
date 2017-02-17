<template>
  <div class="vfg-container" :style="{ maxWidth: width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'container',
  props: {
    width: {
      type: String,
      default: "1020px"
    }
  }
}
</script>

<style scoped>
.vfg-container {
  box-sizing: border-box;
  margin: auto;
  padding-right: 24px;
  padding-left: 24px;
}
</style>
