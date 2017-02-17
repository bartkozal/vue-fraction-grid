import Container from './components/Container'
import Grid from './components/Grid'
import GridItem from './components/GridItem'

const defaults = {
  container: '1020px',
  gutter: '24px',
  approach: 'mobile',
  breakpoints: {
    compact: '320px 414px',
    regular: '415px'
  }
}

const VueFractionGrid = {
  install (Vue, options) {
    const config = Object.assign(defaults, options)

    Vue.component(Container.name, { extends: Container, config })
    Vue.component(Grid.name, { extends: Grid, config })
    Vue.component(GridItem.name, { extends: GridItem, config })
  }
}

export default VueFractionGrid
