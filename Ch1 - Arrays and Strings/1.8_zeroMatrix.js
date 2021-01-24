/**
 * In an MxN matrix, if an element is 0, make its entire row and column values 0
 * @param {array} arr 
 */

// O(m*n) time, O(m+n) space
const zeroMatrix = arr => {
  const m = arr.length
  const n = arr[0].length
  const zeroR = []
  const zeroC = []
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (arr[r][c] === 0) {
        zeroR.push(r)
        zeroC.push(c)
        break
      }
    }
  }

  for (let r of zeroR) {
    for (let c = 0; c < n; c += 1) {
      arr[r][c] = 0
    }
  }

  for (let c of zeroC) {
    for (let r = 0; r < m; r += 1) {
      arr[r][c] = 0
    }
  }
  return arr
}

// O(m*n) time, O(1) space
const zeroMatrix = arr => {
  const m = arr.length
  const n = arr[0].length
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (arr[r][c] === 0) {
        // instead of using another data structure to store r and c that needs to become zeroes,
        // store it in the first row and first column
        arr[0][c] = 0
        arr[r][0] = 0
      }
    }
  }

  for (let r = m - 1; r >= 0; r -= 1) {
    if (arr[r][0] === 0) {
      for (let c = 0; c < n; c += 1) {
        arr[r][c] = 0
      }
    }
  }

  for (let c = n - 1; c > 0; c -= 1) {
    if (arr[0][c] === 0) {
      for (let r = 0; r < m; r += 1) {
        arr[r][c] = 0
      }
    }
  }
  return arr
}

console.log(zeroMatrix([
  [1, 0, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 0, 12],
  [13, 14, 15, 16]
]))
