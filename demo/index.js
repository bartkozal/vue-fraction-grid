import Vue from 'vue'
import VueFractionGrid from '../vue-fraction-grid'
import Demo from './Demo'

Vue.use(VueFractionGrid, {
  approach: 'desktop-first',
  breakpoints: {
    compact: '415px',
    tablet: '416px 1100px'
  }
})

new Vue({
  el: '#app',
  render: h => h(Demo)
})
