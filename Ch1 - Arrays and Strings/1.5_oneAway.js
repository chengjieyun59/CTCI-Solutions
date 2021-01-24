/**
 * Check if two strings are within one edit away.
 * O(n) time, O(1) space.
 * Two-pointer approach.
 * Iterate from the beginning of s1 and s2 and compare each character
 * @param {string} s1 
 * @param {string} s2 
 */

const oneAway = (s1, s2) => {
  // if the string lengths differ by more than 1, they cannot be one away
  if (Math.abs(s1.length - s2.length) > 1) return false
  for (let diff = 0, i = 0, j = 0; i < s1.length; i += 1, j += 1) {
    if (diff >= 2) return false
    if (s1[i] !== s2[j]) {
      diff += 1

      // handle index offset by insertion or removal
      if (s1[i + 1] === s2[j]) {
        i += 1
      } else if (s2[j + 1] === s1[i]) {
        j += 1
      }
    }
  }
  return true
}

console.log(oneAway('pale','ple')) // true
console.log(oneAway('pales','pale')) // true
console.log(oneAway('pale','bale')) // true
console.log(oneAway('pale','bake')) // false
