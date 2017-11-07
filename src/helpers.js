/**
 * Filter and set time format
 * @param {string} newVal - The time to be format
 * @param {boolean} second - Add second or not
 * @return {string} - Formatted time
 */
export const formatTime = (newVal, second = false) => {
  let [hour, min, sec] = newVal.split(':')
  hour = hour || '00'
  min = min || '00'
  sec = sec || '00'

  const hourLen = hour.length
  const minLen = min.length
  const secLen = sec.length

  if (hourLen === 1 && hour !== 0) {
    hour = `0${hour}`
  } else if (hourLen === 2 && hour > 23) {
    hour = `23`
  }

  if (minLen === 1 && min !== 0) {
    min = `0${min}`
  } else if (minLen === 2 && min > 59) {
    min = `59`
  }

  if (secLen === 1 && sec !== 0) {
    sec = `0${sec}`
  } else if (secLen === 2 && sec > 59) {
    sec = `59`
  }

  if (second) {
    return `${hour}:${min}:${sec}`
  } else {
    return `${hour}:${min}`
  }
}

/**
 * Add colon to the input if needed
 * @param {string} newVal - The time input
 * @param {string} prevVal - The previous value
 * @param {boolean} second - Add second or not
 * @return {string} - The time
 */
export const addColon = (newVal, prevVal, second = false) => {
  const valLen = newVal.length
  if (newVal === '') {
    return `${newVal}`
  }

  if (second) {
    if (valLen === 8) {
      let [hour, min, sec] = newVal.split(':')
      if (sec > 59) {
        sec = 59
      }

      return `${hour}:${min}:${sec}`
    } else if (prevVal[5] === ':' && valLen === 7) {
      return `${newVal}`
    } else if (prevVal[5] === ':' && valLen === 6) {
      return `${newVal}`
    } else if (prevVal[5] === ':' && valLen === 5) {
      return `${newVal.substring(0, valLen - 1)}`
    } else if (valLen === 5) {
      let [hour, min] = newVal.split(':')
      if (min > 59) {
        min = 59
      }

      return `${hour}:${min}:`
    }
  } else {
    if (valLen === 5) {
      let [hour, min] = newVal.split(':')
      if (min > 59) {
        min = 59
      }

      return `${hour}:${min}`
    }
  }

  if (prevVal[2] === ':' && valLen === 4) {
    return `${newVal}`
  } else if (prevVal[2] === ':' && valLen === 3) {
    return `${newVal}`
  } else if (prevVal[2] === ':' && valLen === 2) {
    return `${newVal.substring(0, valLen - 1)}`
  }

  if (valLen === 2 && newVal > 24) {
    return `23:`
  } else if (valLen === 2 && newVal <= 23) {
    return `${newVal}:`
  } else if (valLen === 1) {
    return `${newVal}`
  }

  return prevVal
}
