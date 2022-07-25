const doubleChar = str =>
  str
    .split(' ')
    .map(value => value + value)
    .join('');

console.log(doubleChar('abcd')); // 'aabbccdd'
