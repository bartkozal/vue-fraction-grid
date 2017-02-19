import Vue from 'vue'
import VueFractionGrid from 'vue-fraction-grid'
import defaults from 'utils/defaults'

test('configuration', () => {
  VueFractionGrid.install(Vue)

  expect(Vue.component('container').options.config).toEqual(defaults)
})

test('override configuration', () => {
  const options = {
    container: '960px',
    gutter: '1em',
    approach: 'desktop-first'
  }

  VueFractionGrid.install(Vue, options)

  expect(Vue.component('container').options.config).toMatchObject(options)
})
