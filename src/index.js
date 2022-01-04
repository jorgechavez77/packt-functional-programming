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

const thisManyTimes = (f, n) => {
  let times = n
  return (...args) => {
    if (times > 0) {
      f(...args)
      times--
    }
  }
}

module.exports = {
  once,
  onceAndAfter,
  alternate,
  thisManyTimes,
}
