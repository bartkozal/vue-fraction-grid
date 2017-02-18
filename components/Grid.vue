<template>
  <div class="vfg-grid" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import reduceCSSCalc from 'reduce-css-calc'
import initConfig from '../utils/init-config'

export default {
  name: 'grid',
  mixins: [initConfig],
  props: {
    horizontal: String
  },
  computed: {
    styleObject () {
      return {
        marginRight: reduceCSSCalc(`calc(${this.config.gutter} / -2)`),
        marginLeft: reduceCSSCalc(`calc(${this.config.gutter} / -2)`),
        justifyContent: this.justifyContent
      }
    },
    justifyContent () {
      return {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
        between: 'space-between',
        around: 'space-around'
      }[this.horizontal]
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
