const { once, onceAndAfter, alternate } = require('./index')

test('Call function only once', () => {
  const fn = jest.fn()
  const callMeOnce = once(fn)

  callMeOnce()
  callMeOnce()
  callMeOnce()

  expect(fn).toHaveBeenCalledTimes(1)
})

test('Call function once to then call a different function', () => {
  const f = jest.fn()
  const g = jest.fn()

  const callMeOnceAndAfter = onceAndAfter(f, g)

  callMeOnceAndAfter()
  callMeOnceAndAfter()
  callMeOnceAndAfter()

  expect(f).toHaveBeenCalledTimes(1)
  expect(g).toHaveBeenCalledTimes(2)
})

test('', () => {
  const f = jest.fn()
  const g = jest.fn()

  const alt = alternate(f, g)

  alt()
  expect(f).toHaveBeenCalled()
  jest.clearAllMocks()
  alt()
  expect(g).toHaveBeenCalled()
  jest.clearAllMocks()
  alt()
  expect(f).toHaveBeenCalled()
  jest.clearAllMocks()
  alt()
  expect(g).toHaveBeenCalled()
})
