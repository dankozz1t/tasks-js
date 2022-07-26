function likes(names) {
  let message;
  switch (names.length - 1) {
    case -1:
      message = 'no one likes this';
      break;
    case 0:
      message = `${names[0]} likes this`;
      break;
    case 1:
      message = `${names[0]} and ${names[1]} like this`;
      break;
    case 2:
      message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;

    default:
      message = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
  return message;
}

console.log('------------');
console.log(likes([])); //'no one likes this'
console.log(likes(['Peter'])); //'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); //, 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // 'Alex, Jacob and 2 others like this'
