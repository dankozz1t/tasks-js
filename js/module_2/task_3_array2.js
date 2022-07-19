// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів

function boo(array, count) {
  const newArray = [];

  let i = 0;
  while (i <= array.length) {
    newArray.push(array.slice(i, i + count));
    i += count;
  }
  return newArray;
}

function boo2(arr, size) {
  const copyArr = Array.from(arr);
  const response = [];
  const totalItems = Math.ceil(arr.length / size);
  for (let i = 0; i < totalItems; i += 1) {
    const elem = copyArr.splice(0, size);
    response.push(elem);
  }
  return response;
}

const data = [1, 2, 3, 4, 5, 6, 7];

console.log(boo(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(boo(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
