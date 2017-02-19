import Vue from 'vue'
import initConfig from 'utils/init-config'

test('initConfig', () => {
  const vm = new Vue({
    config: {foo: 'bar'},
    render: h => h(),
    mixins: [initConfig]
  }).$mount()

  expect(vm.config.foo).toBe('bar')
})
