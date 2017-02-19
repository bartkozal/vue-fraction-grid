import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import VueFractionGrid from '../vue-fraction-grid'
import Docs from './Docs'

Vue.use(VueHighlightJS)
Vue.use(VueFractionGrid)

new Vue({
  el: '#app',
  render: h => h(Docs)
})
