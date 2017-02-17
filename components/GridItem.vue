<template>
  <div class="vfg-grid-item" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import initConfig from '../utils/init-config'

export default {
  name: 'grid-item',
  mixins: [initConfig],
  props: {
    size: {
      type: String,
      validator (value) {
        const fraction = value.split('/')
        return fraction.length === 2 && +fraction[1] !== 0
      }
    }
  },
  computed: {
    styleObject () {
      return {
        paddingRight: this.config.gutter / 2,
        paddingLeft: this.config.gutter / 2,
        flexBasis: this.percentageWidth
      }
    },
    percentageWidth () {
      const [numerator, denominator] = this.size.split('/')
      const value = +numerator * 100 / +denominator
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
