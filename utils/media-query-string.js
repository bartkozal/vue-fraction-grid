import isUndefined from 'lodash.isundefined'

export default ({ approach, query }) => {
  const attr = { mobile: 'min-width', desktop: 'max-width' }[approach]
  const [firstValue, secondValue] = query.split(' ')

  if (isUndefined(secondValue)) {
    return `(${attr}: ${firstValue})`
  }

  return `(min-width: ${firstValue}) and (max-width: ${secondValue})`
}
