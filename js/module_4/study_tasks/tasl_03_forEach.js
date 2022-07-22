function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(valueArr => {
    if (valueArr > value) {
      filteredNumbers.push(valueArr);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
