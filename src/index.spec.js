const { once } = require('./index')

test('Call function only once', () => {
  const fn = jest.fn()
  const callMeOnce = once(fn)

  callMeOnce()
  callMeOnce()
  callMeOnce()

  expect(fn).toHaveBeenCalledTimes(1)
})
