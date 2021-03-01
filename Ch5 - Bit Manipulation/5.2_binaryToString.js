const binaryToString = (num) => {
  let power = -1
  let str = '0.'
  while (num !== 0 && str.length < 32) {
    const fraction = Math.pow(2, power)
    if (num >= fraction) {
      str += '1'
      num -= fraction
    } else {
      str += '0'
    }
    power -= 1
  }
  return num === 0 ? str : 'ERROR'
}

const num1 = 0.375
console.log(binaryToString(num1), num1.toString(2).length < 32 ? num1.toString(2) : 'ERROR')
const num2 = 0.72
console.log(binaryToString(num2), num2.toString(2).length < 32 ? num2.toString(2) : 'ERROR')
