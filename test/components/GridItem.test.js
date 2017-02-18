import Vue from 'vue'
import GridItem from 'components/GridItem'

const config = { gutter: '24px' }

const getGridItem = ({ size, grow, shrink }) => {
  return new Vue({
    extends: GridItem,
    propsData: { size, grow, shrink },
    config
  }).$mount()
}

test('styleObject', () => {
  expect(getGridItem({ size: '1/2' }).styleObject).toEqual({
    paddingRight: '12px',
    paddingLeft: '12px',
    flexBasis: '50.0000%',
    maxWidth: '50.0000%'
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

test('size validation', () => {
  console.error = jest.fn()

  getGridItem({ size: '1/0' })
  getGridItem({ size: '1' })
  getGridItem({ size: '1/3/1' })

  expect(console.error).toHaveBeenCalledTimes(3)
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
