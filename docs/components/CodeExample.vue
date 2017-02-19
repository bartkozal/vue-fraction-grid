<template>
  <div class="code-example">
    <div class="code-example-demo" v-if="isSlotProvided">
      <slot></slot>
    </div>
    <pre v-highlightjs><code :class="syntax">{{ source }}</code></pre>
  </div>
</template>

<script>
export default {
  name: 'code-example',
  props: {
    syntax: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  },
  computed: {
    isSlotProvided () {
      return this.$slots.default !== undefined
    }
  }
}
</script>

<style>
@import '../variables.css';

.code-example {
  background-color: white;
  border: 2px solid var(--color-secondary);
  border-radius: 4px;
  margin-bottom: var(--spacing-unit);
}

.code-example-demo {
  padding-top: .5em;
  padding-bottom: .5em;
  border-bottom: 2px solid var(--color-secondary);
}

.hljs {
  line-height: var(--font-leading);
}

.code-example-demo .vfg-container,
.code-example-demo .vfg-grid-item {
  background-color: var(--color-complementary);
  background-clip: content-box;
  font-family: var(--font-stack-monospace);
  text-align: center;
  color: white;
  line-height: 2;
}

.code-example-demo .vfg-grid-item.large {
  line-height: 6;
}

.code-example-demo .vfg-container {
  background-clip: border-box;
  background-color: color(var(--color-complementary) alpha(.1));
  color: var(--color-text);
}

.code-example-demo .vfg-grid-item .vfg-grid-item {
  background-color: color(var(--color-complementary) lightness(-40%));
}

.code-example-demo .vfg-grid-pair > .vfg-grid-item {
  text-align: left;
}

.code-example-demo .vfg-grid-pair > .vfg-grid-item + .vfg-grid-item {
  text-align: right;
}
</style>
