import Vue from 'vue'
import VueFractionGrid from '../vue-fraction-grid'
import Demo from './Demo'

Vue.use(VueFractionGrid)

new Vue({
  el: '#app',
  render: h => h(Demo)
})
