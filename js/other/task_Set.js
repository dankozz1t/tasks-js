let arr = [1, 2, 3, 4, 5, 6, 6, 5, 3, 2, 8];

let set = new Set(arr);

console.log(...set);
set.add(10);

console.log(set.has(111));

set.delete(2);

console.log(...set);
