// Once Function
const once = (fn) => {
  let done = false
  return (...args) => {
    if (!done) {
      done = true
      fn(...args)
    }
  }
}

module.exports = {
  once,
}
