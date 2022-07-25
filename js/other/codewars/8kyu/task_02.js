function invert(array) {
  return array.map(value => (value === 0 ? (value = -0) : ~value + 1));
}

// const invert = array => array.map(num => -num);

console.log(invert([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5];
console.log(invert([1, -2, 3, -4, 5])); // [-1, 2, -3, 4, -5];
console.log(invert([])); // [];
console.log(invert([0])); // [-0];
