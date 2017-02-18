<template>
  <div class="vfg-grid" :class="classObject" :style="styleObject">
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
    flat: String,
    pair: String,
    direction: String
  },
  computed: {
    classObject () {
      return {
        'vfg-grid-pair': !isUndefined(this.pair)
      }
    },
    styleObject () {
      return {
        marginRight: this.horizontalMargin,
        marginLeft: this.horizontalMargin,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        flexDirection: this.flexDirection
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
    },
    flexDirection () {
      return isUndefined(this.direction) ? 'row' : {
        reverse: 'row-reverse',
        stack: 'column',
        'stack-reverse': 'column-reverse'
      }[this.direction]
    }
  }
}
</script>

<style>
.vfg-grid {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
}

.vfg-grid-pair > .vfg-grid-item {
  text-align: left;
}

.vfg-grid-pair > .vfg-grid-item + .vfg-grid-item {
  text-align: right;
}
</style>
