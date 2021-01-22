/**
 * Replace all spaces in a string with %20
 * O(n) time, O(n) space
 * @param {string} s 
 * @param {number} len 
 */
const urlify = (s, len) => {
  let res = ''
  for (let i = 0; i < len; i += 1) {
    res += s[i] === ' ' ? '%20' : s[i]
  }
  return res
}

// O(n) time, O(1) space. Modify in-place.
const urlify = (s, len) => {
  const a = s.split('')
  let insertAt = a.length - 1
  for (let i = len - 1; i > 0; i -= 1) {
    if (a[i] === ' ') {
      a[insertAt] = '0'
      a[insertAt - 1] = '2'
      a[insertAt - 2] = '%'
      insertAt -= 3
    } else {
      a[insertAt] = a[i]
      insertAt -= 1
    }
  }
  return a.join('')
}

console.log(urlify('Mr John Smith    ', 13)) // Mr%20John%20Smith
