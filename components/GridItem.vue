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
      type: String,
      validator (value) {
        const fraction = value.split('/')
        const denominator = +fraction[1]
        return fraction.length === 2 && denominator !== 0
      }
    },
    grow: [String, Number],
    shrink: [String, Number]
  },
  computed: {
    isSizeZero () {
      return this.size === '0/1'
    },
    styleObject () {
      const stylePadding = {
        paddingRight: this.horizontalPadding,
        paddingLeft: this.horizontalPadding
      }
      const isSize = !isUndefined(this.size) && isUndefined(this.grow) && isUndefined(this.shrink)
      const isGrow = isUndefined(this.size) && !isUndefined(this.grow) && isUndefined(this.shrink)
      const isShrink = isUndefined(this.size) && isUndefined(this.grow) && !isUndefined(this.shrink)

      if (isSize) {
        return Object.assign(stylePadding, {
          flexBasis: this.percentageWidth,
          maxWidth: this.percentageWidth
        })
      }

      if (isGrow) {
        return Object.assign(stylePadding, {
          flexGrow: +this.grow,
        })
      }

      if (isShrink) {
        return Object.assign(stylePadding, {
          flexShrink: +this.shrink,
        })
      }

      return stylePadding
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
