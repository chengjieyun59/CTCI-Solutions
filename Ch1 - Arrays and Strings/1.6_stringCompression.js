/**
 * Compress string using counts of repeated characters.
 * Return the shorter of the original and compressed string.
 * @param {string} s
 */
const stringCompression = s => {
  let comp = ''
  for (let i = 0; i < s.length - 1; i += 1) {
    let count = 1
    // count all repeating characters
    while (s[i] === s[i + 1]) {
      count += 1
      i += 1
    }
    // concatenate the character and count to compressed string
    comp += s[i] + String(count)
  }
  return s.length < comp.length ? s : comp
}

console.log(stringCompression("aabcccccaaa")) // 'a2b1c5a3
console.log(stringCompression("aaaaaa")) // 'a6
