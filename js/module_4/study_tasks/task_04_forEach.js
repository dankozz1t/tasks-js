function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(value => {
    if (secondArray.includes(value)) {
      commonElements.push(value);
    }
  });

  return commonElements;
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
