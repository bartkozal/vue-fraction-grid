import Vue from 'vue'
import GridItem from 'components/GridItem'
import { mockMatchMedia, config } from '../helpers'

const getGridItem = ({ size, grow, shrink, rwd }) => {
  return new Vue({
    extends: GridItem,
    propsData: { size, grow, shrink, rwd },
    config
  }).$mount()
}

test('styleObject', () => {
  expect(getGridItem({ size: '1/2' }).styleObject).toEqual({
    paddingRight: '12px',
    paddingLeft: '12px',
    flexBasis: '50.0000%',
    maxWidth: '50.0000%',
    width: '50.0000%'
  })

  expect(getGridItem({ grow: '2' }).styleObject).toEqual({
    paddingRight: '12px',
    paddingLeft: '12px',
    flexGrow: 2
  })

  expect(getGridItem({ shrink: 0.5 }).styleObject).toEqual({
    paddingRight: '12px',
    paddingLeft: '12px',
    flexShrink: 0.5
  })
})

test('size validator', () => {
  console.error = jest.fn()

  getGridItem({ size: '1/0' })
  getGridItem({ size: '1' })
  getGridItem({ size: '1/3/1' })

  expect(console.error).toHaveBeenCalledTimes(3)
})

describe('rwd', () => {
  test('override grid item size when prop exists and media matches', () => {
    const listener = mockMatchMedia(true)
    const gridItem = getGridItem({ size: '1/2', rwd: { compact: '0/1' }})

    expect(gridItem.gridItemSize).toEqual('0/1')
    expect(gridItem.isSizeZero).toEqual(true)
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('dont override grid item size when prop exists and media doesnt match', () => {
    const listener = mockMatchMedia(false)
    const gridItem = getGridItem({ size: '1/2', rwd: { compact: '1/1' }})

    expect(gridItem.gridItemSize).toEqual('1/2')
    expect(listener).toHaveBeenCalledTimes(1)
  })

  test('dont override grid item size when prop doesnt exist', () => {
    const listener = mockMatchMedia(true)
    const gridItem = getGridItem({ size: '1/3' })

    expect(gridItem.gridItemSize).toEqual('1/3')
    expect(listener).toHaveBeenCalledTimes(0)
  })
})

test('percentageWidth', () => {
  expect(getGridItem({ size: '2/3' }).percentageWidth).toEqual('66.6667%')
  expect(getGridItem({ size: '3/5' }).percentageWidth).toEqual('60.0000%')
  expect(getGridItem({ size: '7/9' }).percentageWidth).toEqual('77.7778%')
  expect(getGridItem({ size: '1/12' }).percentageWidth).toEqual('8.3333%')
})

test('isSizeZero', () => {
  expect(getGridItem({ size: '5/8' }).isSizeZero).toEqual(false)
  expect(getGridItem({ size: '0/1' }).isSizeZero).toEqual(true)
})

test('hasSize', () => {
  expect(getGridItem({ size: '1/2' }).hasSize).toEqual(true)
  expect(getGridItem({ grow: '2' }).hasSize).toEqual(false)
  expect(getGridItem({ shrink: '1' }).hasSize).toEqual(false)
})

test('hasGrow', () => {
  expect(getGridItem({ size: '1/2' }).hasGrow).toEqual(false)
  expect(getGridItem({ grow: '2' }).hasGrow).toEqual(true)
  expect(getGridItem({ shrink: '1' }).hasGrow).toEqual(false)
})

test('hasShrink', () => {
  expect(getGridItem({ size: '1/2' }).hasShrink).toEqual(false)
  expect(getGridItem({ grow: '2' }).hasShrink).toEqual(false)
  expect(getGridItem({ shrink: '1' }).hasShrink).toEqual(true)
})
