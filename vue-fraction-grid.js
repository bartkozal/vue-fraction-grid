import Container from './components/Container'
import Grid from './components/Grid'
import GridItem from './components/GridItem'

const VueFractionGrid = {
  install (Vue, options) {
    Vue.component(Container.name, Container)
    Vue.component(Grid.name, Grid)
    Vue.component(GridItem.name, GridItem)
  }
}

export default VueFractionGrid
