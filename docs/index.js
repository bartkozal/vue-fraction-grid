import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import VueFractionGrid from '../vue-fraction-grid'
import Docs from './Docs'

Vue.use(VueHighlightJS)
Vue.use(VueFractionGrid, {
  approach: 'desktop-first',
  breakpoints: {
    compact: '415px',
    tablet: '416px 1100px'
  }
})

new Vue({
  el: '#app',
  render: h => h(Docs)
})
