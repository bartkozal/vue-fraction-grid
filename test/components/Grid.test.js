import Vue from 'vue'
import Grid from 'components/Grid'
import GridItem from 'components/GridItem'
import { mockMatchMedia, config } from '../helpers'

const getGrid = ({ horizontal, vertical, direction, rwd }) => {
  return new Vue({
    extends: Grid,
    propsData: { horizontal, vertical, direction, rwd },
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
    flexWrap: 'wrap',
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
    flexWrap: 'wrap',
    flexDirection: 'row'
  })
})

test('flat', () => {
  const vm = new Vue({
    extends: Grid,
    propsData: {
      flat: ''
    },
    components: {
      GridItem
    },
    render: h => h('div', [h('grid-item')]),
    config
  }).$mount()

  expect(vm.horizontalMargin).toEqual(0)
  expect(vm.$children[0].horizontalPadding).toEqual(0)
})

test('pair', () => {
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


describe('rwd', () => {
  test('override grid direction when prop exists and media matches', () => {
    const listener = mockMatchMedia(true)
    const grid = getGrid({ direction: 'reverse', rwd: { compact: 'stack' }})

    expect(grid.gridDirection).toEqual('column')
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('dont override grid direction when prop exists and media doesnt match', () => {
    const listener = mockMatchMedia(false)
    const grid = getGrid({ rwd: { compact: 'stack-reverse' }})

    expect(grid.gridDirection).toEqual('row')
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('dont override grid direction when prop doesnt exist', () => {
    const listener = mockMatchMedia(true)
    const grid = getGrid({ horizontal: 'left' })

    expect(grid.gridDirection).toEqual('row')
    expect(listener).toHaveBeenCalledTimes(0)
  })
})

test('gridHorizontal', () => {
  expect(getGrid({ horizontal: 'left' }).gridHorizontal).toEqual('flex-start')
  expect(getGrid({ horizontal: 'center' }).gridHorizontal).toEqual('center')
  expect(getGrid({ horizontal: 'right' }).gridHorizontal).toEqual('flex-end')
  expect(getGrid({ horizontal: 'between' }).gridHorizontal).toEqual('space-between')
  expect(getGrid({ horizontal: 'around' }).gridHorizontal).toEqual('space-around')
})

test('gridVertical', () => {
  expect(getGrid({ vertical: 'top' }).gridVertical).toEqual('flex-start')
  expect(getGrid({ vertical: 'middle' }).gridVertical).toEqual('center')
  expect(getGrid({ vertical: 'bottom' }).gridVertical).toEqual('flex-end')
})

test('gridDirection', () => {
  expect(getGrid({ direction: 'reverse' }).gridDirection).toEqual('row-reverse')
  expect(getGrid({ direction: 'stack' }).gridDirection).toEqual('column')
  expect(getGrid({ direction: 'stack-reverse' }).gridDirection).toEqual('column-reverse')
})
