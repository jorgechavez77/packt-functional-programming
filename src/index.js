// High Order Functions

const once = (fn) => {
  let done = false
  return (...args) => {
    if (!done) {
      done = true
      fn(...args)
    }
  }
}

const onceAndAfter = (f, g) => {
  let done = false
  return (...args) => {
    if (!done) {
      done = true
      f(...args)
    } else {
      g(...args)
    }
  }
}

const alternate = (f, g) => {
  let flip = false
  return (...args) => {
    if (!flip) {
      flip = !flip
      f(...args)
    } else {
      flip = !flip
      g(...args)
    }
  }
}

module.exports = {
  once,
  onceAndAfter,
  alternate,
}
