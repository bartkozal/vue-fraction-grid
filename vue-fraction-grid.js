import Container from './components/Container'
import Grid from './components/Grid'
import GridItem from './components/GridItem'
import defaults from './utils/defaults'

const VueFractionGrid = {
  install (Vue, options) {
    const config = Object.assign(defaults, options)

    Vue.component(Container.name, { extends: Container, config })
    Vue.component(Grid.name, { extends: Grid, config })
    Vue.component(GridItem.name, { extends: GridItem, config })
  }
}

export default VueFractionGrid
