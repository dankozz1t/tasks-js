function createPhoneNumber(str) {
  const match = str.join('').match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : null;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //  '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  '(123) 456-7890'

// function createPhoneNumber(numbers) {
//   return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
// }

// function createPhoneNumber(numbers) {
//   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }
