<template>
  <div class="vfg-grid" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import initConfig from '../utils/init-config'
import reduceCSSCalc from 'reduce-css-calc'

export default {
  name: 'grid',
  mixins: [initConfig],
  computed: {
    styleObject () {
      return {
        marginRight: reduceCSSCalc(`calc(${this.config.gutter} / -2)`),
        marginLeft: reduceCSSCalc(`calc(${this.config.gutter} / -2)`)
      }
    }
  }
}
</script>

<style scoped>
.vfg-grid {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
