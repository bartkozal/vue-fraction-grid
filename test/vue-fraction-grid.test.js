import Vue from 'vue'
import VueFractionGrid from 'vue-fraction-grid'
import initConfig from 'utils/init-config'

test('default configuration', () => {
  VueFractionGrid.install(Vue)

  const container = Vue.component('container')
  expect(container.options.config).toEqual({
    container: '1020px',
    gutter: '24px',
    approach: 'mobile',
    breakpoints: {
      compact: '320px 414px',
      regular: '415px'
    }
  })
})

test('overriding default configuration', () => {
  VueFractionGrid.install(Vue, {
    container: '960px',
    gutter: '1em',
    approach: 'desktop'
  })

  const container = Vue.component('container')
  expect(container.options.config).toEqual({
    container: '960px',
    gutter: '1em',
    approach: 'desktop',
    breakpoints: {
      compact: '320px 414px',
      regular: '415px'
    }
  })
})

test('initConfig mixin', () => {
  const vm = new Vue({
    config: {foo: 'bar'},
    mixins: [initConfig]
  }).$mount()

  expect(vm.config.foo).toBe('bar')
})
