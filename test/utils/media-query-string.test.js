import mediaQueryString from 'utils/media-query-string'

test('return proper media query string on provided config', () => {
  let mqs

  mqs = mediaQueryString({ approach: 'mobile-first', query: '320px 414px' })
  expect(mqs).toEqual("(min-width: 320px) and (max-width: 414px)")

  mqs = mediaQueryString({ approach: 'mobile-first', query: '415px' })
  expect(mqs).toEqual("(min-width: 415px)")

  mqs = mediaQueryString({ approach: 'desktop-first', query: '414px' })
  expect(mqs).toEqual("(max-width: 414px)")

  mqs = mediaQueryString({ approach: 'desktop-first', query: '415px 1400px' })
  expect(mqs).toEqual("(min-width: 415px) and (max-width: 1400px)")
})
