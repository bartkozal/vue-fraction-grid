import Vue from 'vue'
import VueFractionGrid from '../vue-fraction-grid'
import Docs from './Docs'

Vue.use(VueFractionGrid)

new Vue({
  el: '#app',
  render: h => h(Docs)
})
