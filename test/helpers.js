export const config = {
  container: '1020px',
  gutter: '24px',
  approach: 'mobile',
  breakpoints: {
    compact: '320px 414px'
  }
}

export const mockMatchMedia = (matches) => {
  const addListener = jest.fn()
  window.matchMedia = () => {
    return { matches, addListener }
  }
  return addListener
}
