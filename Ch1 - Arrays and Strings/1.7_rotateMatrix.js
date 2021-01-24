/**
 * Rotate an NxN matrix in-place by 90 degrees.
 * Divide matrix into 4 quadrants, move each values at these index:
 * (r, c) => (c, n-r-1) => (n-r-1, n-c-1) => (n-c-1, r),
 * which is easy to figure out on a whiteboard.
 * Take into account we only need to swap as long as r < N/2
 * For N is odd, we want to avoid swapping the middle column and row twice
 * @param {array} arr 
 */
const rotateMatrix = arr => {
  const n = arr.length
  const avoidSwap = n % 2
  for (let r = 0; r < n / 2; r += 1) {
    for (let c = 0; c < n / 2 - avoidSwap; c += 1) {
      let temp = arr[r][c]
      // swap the four values
      arr[r][c] = arr[c][n-r-1]
      arr[c][n-r-1] = arr[n-r-1][n-c-1]
      arr[n-r-1][n-c-1] = arr[n-c-1][r]
      arr[n-c-1][r] = temp
    }
  }
  return arr
}

console.log(rotateMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]))
console.log(rotateMatrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9 ,10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]))
