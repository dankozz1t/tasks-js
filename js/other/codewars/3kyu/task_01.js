// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

// You have 30 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.

// require isn't allowed as well.

const reverse = a => a.map(a.pop, [...a]);

console.log(reverse([1, 2, 3])); //  [3, 2, 1]

console.log(reverse([...'01234567890123456789'])); //  [...'98765432109876543210']

console.log(reverse([0, undefined])); //  [undefined, 0]
