import Vue from 'vue'
import Grid from 'components/Grid'

const config = {
  gutter: '24px'
}

test('styleObject', () => {
  const vm = new Vue({
    extends: Grid,
    config
  }).$mount()

  expect(vm.styleObject).toEqual({
    marginRight: '-12px',
    marginLeft: '-12px'
  })
})
