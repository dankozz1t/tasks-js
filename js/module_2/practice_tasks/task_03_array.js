//Напишіть функцію, яка заповнює новий масив заданим значенням.

function fill(count, char) {
  const newArray = [];

  for (let i = 0; i < count; i++) {
    newArray.push(char);
  }

  return newArray;
}

// fill(3, 'a'); // ['a', 'a', 'a']
// fill(5, 'b'); // ['b', 'b', 'b', 'b', 'b']

console.log(fill(3, 'a'));
console.log(fill(5, 'b'));
