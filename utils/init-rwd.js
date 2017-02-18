import mediaQueryString from './media-query-string'
import forEach from 'lodash.foreach'
import isUndefined from 'lodash.isundefined'

export default {
  props: {
    rwd: Object
  },
  methods: {
    bindMediaQueries (callback) {
      if (!isUndefined(this.rwd)) {
        forEach(this.rwd, (prop, breakpoint) => {
          const mediaQuery = window.matchMedia(mediaQueryString({
            approach: this.config.approach,
            query: this.config.breakpoints[breakpoint]
          }))

          callback(mediaQuery, prop)
        })
      }
    }
  }
}
