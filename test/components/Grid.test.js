import Vue from 'vue'
import Grid from 'components/Grid'
import GridItem from 'components/GridItem'

const config = {
  gutter: '24px'
}

const getGrid = ({ horizontal, vertical, direction }) => {
  return new Vue({
    extends: Grid,
    propsData: { horizontal, vertical, direction },
    config
  }).$mount()
}

test('classObject', () => {
  const vm = new Vue({
    extends: Grid,
    config
  }).$mount()

  expect(vm.classObject).toEqual({
    'vfg-grid-pair': false
  })
})

test('styleObject', () => {
  const vm = new Vue({
    extends: Grid,
    config
  }).$mount()

  expect(vm.styleObject).toEqual({
    marginRight: '-12px',
    marginLeft: '-12px',
    justifyContent: undefined,
    alignItems: undefined,
    flexDirection: 'row'
  })
})

test('styleObject with horizontal and vertical props', () => {
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
    alignItems: 'flex-start',
    flexDirection: 'row'
  })
})

test('flat prop', () => {
  const vm = new Vue({
    extends: Grid,
    propsData: {
      flat: ''
    },
    components: {
      GridItem
    },
    render: h => h('div', [h('grid-item', { props: { size: '1/2' }})]),
    config
  }).$mount()

  expect(vm.horizontalMargin).toEqual(0)
  expect(vm.$children[0].horizontalPadding).toEqual(0)
})

test('pair prop', () => {
  const vm = new Vue({
    extends: Grid,
    propsData: {
      pair: ''
    },
    config
  }).$mount()

  expect(vm.classObject).toEqual({
    'vfg-grid-pair': true
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

test('flexDirection', () => {
  expect(getGrid({ direction: 'reverse' }).flexDirection).toEqual('row-reverse')
  expect(getGrid({ direction: 'stack' }).flexDirection).toEqual('column')
  expect(getGrid({ direction: 'stack-reverse' }).flexDirection).toEqual('column-reverse')
})
