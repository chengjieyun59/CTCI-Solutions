/**
 * O(n) time, O(n) space. Decide if the two strings are permutation of each other.
 * Save all character counts from string 1
 * If string 2 has the same character, decrement the count for that character
 * Only if count of all characters are 0, return true
 * @param {string} s1 
 * @param {string} s2 
 */
const checkPermutation = (s1, s2) => {
  if (s1.length !== s2.length) return false
  const count = {}
  for (let c of s1) {
    count[c] = count[c] === undefined ? 1 : count[c] + 1
  }
  for (let c of s2) {
    if (count[c] === undefined) return false
    count[c] -= 1
  }
  return Object.values(count).filter(v => v !== 0).length === 0
}

console.log(checkPermutation("abedc", "dbace")) // true
console.log(checkPermutation("abeeedc", "debaece")) // true
console.log(checkPermutation("ajfkelc", "debaece")) // false