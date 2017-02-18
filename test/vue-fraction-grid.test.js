import Vue from 'vue'
import VueFractionGrid from 'vue-fraction-grid'
import initConfig from 'utils/init-config'
import defaults from 'utils/defaults'

test('default configuration', () => {
  VueFractionGrid.install(Vue)

  expect(Vue.component('container').options.config).toEqual(defaults)
})

test('overriding default configuration', () => {
  const options = {
    container: '960px',
    gutter: '1em',
    approach: 'desktop'
  }

  VueFractionGrid.install(Vue, options)

  expect(Vue.component('container').options.config).toMatchObject(options)
})

test('initConfig mixin', () => {
  const vm = new Vue({
    config: {foo: 'bar'},
    render: h => h(),
    mixins: [initConfig]
  }).$mount()

  expect(vm.config.foo).toBe('bar')
})
