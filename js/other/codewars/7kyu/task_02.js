function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return Array.from(str).reduce(
    (acc, val) => (vowels.includes(val) ? (acc += 1) : acc),
    0
  );
}

// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// function getCount(str) {
//   return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length;
// }

console.log(getCount('abracadabra')); //5
