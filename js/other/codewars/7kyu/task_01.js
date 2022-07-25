function getSum(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = max;
  for (let i = min; i < max; i += 1) {
    sum += i;
  }
  return sum;
}

// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//     max = Math.max(a, b);
//   return ((max - min + 1) * (min + max)) / 2;
// };

console.log(' -1 =  ' + getSum(0, -1)); // -1
console.log('  1 =  ' + getSum(0, 1)); // 1
console.log('  0 =  ' + getSum(0, 0)); // 0
console.log('  2 =  ' + getSum(-1, 2)); //2 (-1 + 0 + 1 + 2 = 2)
console.log('104 =  ' + getSum(-1, 14)); //104
