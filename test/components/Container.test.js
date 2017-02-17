import Vue from 'vue'
import Container from 'components/Container'

const config = {
  container: '1020px',
  gutter: '24px'
}

test('styleObject', () => {
  const vm = new Vue({
    extends: Container,
    config
  }).$mount()

  expect(vm.styleObject).toEqual({
    maxWidth: '1020px',
    paddingRight: '24px',
    paddingLeft: '24px'
  })
})

test('width', () => {
  const vm = new Vue({
    extends: Container,
    propsData: {
      width: '500px'
    },
    config
  }).$mount()

  expect(vm.styleObject).toEqual({
    maxWidth: '500px',
    paddingRight: '24px',
    paddingLeft: '24px'
  })
})
