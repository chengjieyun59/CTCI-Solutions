/**
 * 
 * @param {number} N 
 * @param {number} M 
 * @param {number} i
 * @param {number} j
 */
const insertion = (N, M, i, j) => {
  const bitMask = (-1 << (j + 1)) | ((1 << i) - 1)
  const clearedN = N & bitMask
  const shiftedM = M << i
  return clearedN | shiftedM
}

const N = parseInt(10000000000, 2)
const M = parseInt(10011, 2)
console.log(insertion(N, M, 2, 6).toString(2)) // 10001001100
