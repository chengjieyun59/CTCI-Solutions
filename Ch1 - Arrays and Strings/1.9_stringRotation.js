/**
 * Check if s2 is a rotation of s1.
 * Trick is when we concatenate s1 by itself mimicking a cycle of characters,
 * s2 must be included in that.
 * This way, we don't need to split s1 at the correct index and reorder that to match with s2.
 * @param {string} s1 
 * @param {string} s2 
 */
const stringRotation = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false
  }
  return (s1 + s1).includes(s2) > 0
}

console.log(stringRotation('waterbottle', 'erbottlewat')) // true
console.log(stringRotation('waterbottle', 'erbottlewaz')) // false
