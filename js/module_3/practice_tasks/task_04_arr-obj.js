// Потрібно порахувати вік всіх юзерів

// Потрібно створити функцію яка буде приймати 2 параметри
// 1 параметр масив
// 2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
  {
    name: 'Oleksii',
    books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
    age: 26,
  },
];

function allAgeStudent(data) {
  let allAge = 0;
  for (const item of data) {
    if ('age' in item) {
      allAge += item.age;
    }
  }
  return allAge;
}

function getUserName(data, nameBook) {
  let listUser = [];
  for (const { books, name } of data) {
    if (books.includes(nameBook)) {
      listUser.push(name);
    }
  }
  return listUser.join(', ');
}

console.log(allAgeStudent(friends));
console.log(getUserName(friends, 'Harry Potter'));
