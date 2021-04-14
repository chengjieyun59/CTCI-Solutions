/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  // sort T in descending order
  const desT = [T.pop()]
  while (T.length > 0) {
    const val = T.pop()
    while (desT[desT.length - 1] < val) {
      T.push(desT.pop())
    }
    desT.push(val)
  }
  console.log(desT)

  
};