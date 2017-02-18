<template>
  <div class="vfg-grid-item" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import reduceCSSCalc from 'reduce-css-calc'
import initConfig from '../utils/init-config'

export default {
  name: 'grid-item',
  mixins: [initConfig],
  props: {
    size: {
      required: true,
      type: String,
      validator (value) {
        const fraction = value.split('/')
        const denominator = +fraction[1]
        return fraction.length === 2 && denominator !== 0
      }
    }
  },
  computed: {
    styleObject () {
      return {
        paddingRight: reduceCSSCalc(`calc(${this.config.gutter} / 2)`),
        paddingLeft: reduceCSSCalc(`calc(${this.config.gutter} / 2)`),
        flexBasis: this.percentageWidth
      }
    },
    percentageWidth () {
      const [numerator, denominator] = this.size.split('/')
      const value = (+numerator * 100 / +denominator).toFixed(4)
      return `${value}%`
    }
  }
}
</script>

<style scoped>
.vfg-grid-item {
  box-sizing: border-box;
}
</style>
