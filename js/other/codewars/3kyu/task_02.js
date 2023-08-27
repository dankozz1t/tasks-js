// This is a hard version of How many are smaller than me?. If you have troubles solving this one, have a look at the easier kata first.

// Write

// function smaller(arr)
// that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

// For example:

// smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
// smaller([1, 2, 0]) === [1, 1, 0]

// const smaller = a => a.map((n, i) => a.slice(i).filter(x => x < n).length);

function smaller(arr) {
  const n = arr.length;
  if (n == 0) return [];
  const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  const u = sorted.length;
  const ords = sorted.reduce((h, x, i) => ((h[x] = i), h), {});
  const tree = new Uint16Array(u + 1);
  const xs = arr.slice();
  for (let i = n - 1; i >= 0; --i) {
    const k = ords[arr[i]];
    xs[i] = _count(tree, k);
    _incr(tree, k + 1, u);
  }
  return xs;
}

function _count(tree, index) {
  var i = index + 1;
  var sum = 0;
  while (i > 0) (sum += tree[i]), (i -= i & -i);
  return sum;
}

function _incr(tree, index, n) {
  var i = index + 1;
  while (i <= n) ++tree[i], (i += i & -i);
}

console.log(smaller([5, 4, 3, 2, 1])); // , [4, 3, 2, 1, 0];
console.log(smaller([1, 2, 3])); // , [0, 0, 0]
console.log(smaller([1, 2, 0])); // , [1, 1, 0]
console.log(smaller([1, 2, 1])); // , [0, 1, 0]
console.log(smaller([1, 1, -1, 0, 0])); // , [3, 3, 0, 0, 0]
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])); // , [4, 1, 5, 5, 0, 0, 0, 0, 0]
console.log(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6])); // [5, 2, 6, 6, 1, 1, 0, 0, 0, 0]
