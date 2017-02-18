<template>
  <div class="vfg-grid-item" :style="styleObject" v-show="!isSizeZero">
    <slot></slot>
  </div>
</template>

<script>
import reduceCSSCalc from 'reduce-css-calc'
import isUndefined from 'lodash.isundefined'
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
    isSizeZero () {
      return this.size === '0/1'
    },
    styleObject () {
      return {
        paddingRight: this.horizontalPadding,
        paddingLeft: this.horizontalPadding,
        flexBasis: this.percentageWidth,
        maxWidth: this.percentageWidth
      }
    },
    horizontalPadding () {
      const notFlatGridChild = isUndefined(this.$parent) || isUndefined(this.$parent.flat)
      return notFlatGridChild ?
        reduceCSSCalc(`calc(${this.config.gutter} / 2)`) : 0
    },
    percentageWidth () {
      const [numerator, denominator] = this.size.split('/')
      const value = (+numerator * 100 / +denominator).toFixed(4)
      return `${value}%`
    }
  }
}
</script>

<style>
.vfg-grid-item {
  box-sizing: border-box;
}
</style>
