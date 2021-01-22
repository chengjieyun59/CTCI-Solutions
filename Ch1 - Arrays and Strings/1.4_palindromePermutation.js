/**
 * Check if a string is a permutation of a palindrome.
 * O(n) time, O(n) space
 * @param {string} str 
 */
const palindromePermutation = str => {
  const count = new Set()
  for (let char of str) {
    const c = char.toLowerCase()
    if (count.has(c)) {
      count.delete(c)
    } else {
      count.add(c)
    }
  }
  count.delete(' ')
  return count.size <= 1
}

console.log(palindromePermutation("Tact Coa")) // true
console.log(palindromePermutation('Tact boa')) // false
