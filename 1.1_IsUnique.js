/**
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// O(n) time, O(n) space
const isUnique = string => {
  const s = new Set()
  for (const char of string) {
    if (s.has(char)) {
      return false
    }
    s.add(char)
  }
  return true
}

// O(n^2) time, O(1) space. No additional data structure
const isUnique = string => {
  for (let i = 0; i < string.length - 1; i += 1) {
    for (let j = i + 1; j < string.length; j += 1) {
      if (string[i] === string[j]) {
        return false
      }
    }
  }
  return true
}

console.log(isUnique('hello')) // false
console.log(isUnique('hell')) // false
console.log(isUnique('jafiosd')) // true