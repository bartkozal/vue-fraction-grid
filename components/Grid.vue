<template>
  <div class="vfg-grid" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import reduceCSSCalc from 'reduce-css-calc'
import isUndefined from 'lodash.isundefined'
import initConfig from '../utils/init-config'

export default {
  name: 'grid',
  mixins: [initConfig],
  props: {
    horizontal: String,
    vertical: String,
    flat: String
  },
  computed: {
    styleObject () {
      return {
        marginRight: this.horizontalMargin,
        marginLeft: this.horizontalMargin,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems
      }
    },
    horizontalMargin () {
      return isUndefined(this.flat) ?
        reduceCSSCalc(`calc(${this.config.gutter} / -2)`) : 0
    },
    justifyContent () {
      return {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
        between: 'space-between',
        around: 'space-around'
      }[this.horizontal]
    },
    alignItems () {
      return {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      }[this.vertical]
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
