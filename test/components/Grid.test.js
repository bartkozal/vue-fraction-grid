import Vue from 'vue'
import Grid from 'components/Grid'

const config = {
  gutter: '24px'
}

const getGrid = ({ horizontal, vertical }) => {
  return new Vue({
    extends: Grid,
    propsData: {
      horizontal: horizontal,
      vertical: vertical
    },
    config
  }).$mount()
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

test('styleObject with props', () => {
  const vm = new Vue({
    extends: Grid,
    propsData: {
      horizontal: 'left',
      vertical: 'top'
    },
    config
  }).$mount()

  expect(vm.styleObject).toEqual({
    marginRight: '-12px',
    marginLeft: '-12px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  })
})

test('justifyContent', () => {
  expect(getGrid({ horizontal: 'left' }).justifyContent).toEqual('flex-start')
  expect(getGrid({ horizontal: 'center' }).justifyContent).toEqual('center')
  expect(getGrid({ horizontal: 'right' }).justifyContent).toEqual('flex-end')
  expect(getGrid({ horizontal: 'between' }).justifyContent).toEqual('space-between')
  expect(getGrid({ horizontal: 'around' }).justifyContent).toEqual('space-around')
})

test('alignItems', () => {
  expect(getGrid({ vertical: 'top' }).alignItems).toEqual('flex-start')
  expect(getGrid({ vertical: 'middle' }).alignItems).toEqual('center')
  expect(getGrid({ vertical: 'bottom' }).alignItems).toEqual('flex-end')
})
