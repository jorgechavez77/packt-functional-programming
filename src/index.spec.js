const {
  once,
  onceAndAfter,
  alternate,
  thisManyTimes,
  counter,
} = require('./index')

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

test('Alternate functions order after been called', () => {
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

test('Call a function as many times as specified', () => {
  const f = jest.fn()

  const once = thisManyTimes(f, 1)
  const twice = thisManyTimes(f, 2)
  const zero = thisManyTimes(f, 0)

  once()
  once()
  once()
  expect(f).toHaveBeenCalledTimes(1)
  jest.clearAllMocks()

  twice()
  twice()
  twice()
  expect(f).toHaveBeenCalledTimes(2)
  jest.clearAllMocks()

  zero()
  zero()
  zero()
  expect(f).not.toHaveBeenCalled()
})

test('iife', () => {
  ;(() => {
    const ready = () => console.log('ready')
    const set = () => console.log('set')
    const go = () => console.log('go')

    ready()
    set()
    go()
  })()
})

test('counter', () => {
  const myCounter = counter()

  expect(myCounter()).toEqual(1)
  expect(myCounter()).toEqual(2)
  expect(myCounter()).toEqual(3)
})
