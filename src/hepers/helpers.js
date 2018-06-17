export const getTopN = (arr, prop, n) => {
  // clone before sorting, to preserve the original array
  var clone = [...arr]

  // sort descending
  clone.sort((x, y) => {
    if (x[prop] == y[prop]) return 0
    else if (parseInt(x[prop]) < parseInt(y[prop])) return 1
    else return -1
  })

  return clone.slice(0, n || 1)
}
