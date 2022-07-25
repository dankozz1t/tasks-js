// Створити функцію яка приймає 2 параметри обєкт юзерів, та колбек функцію
// (колбек) функція приймає масив обєктів (кожен обєкт це окремий юзер), та виводить в консолі імя та вік кожного юзера
//  'Name David, age 25'

const users = {
  user: {
    name: 'David',
    age: 25,
  },
  user1: {
    name: 'Denis',
    age: 30,
  },
  user3: {
    name: 'Kate',
    age: 18,
  },
  user4: {
    name: 'Dima',
    age: 40,
  },
  user5: {
    name: 'Kris',
    age: 22,
  },
};

const getUsersInfo = (users, callback) =>
  Object.values(users).forEach((value, index, array) => {
    array.push(value);
    callback(value);
  });

const showUser = ({ name, age }) => console.log(`Name - ${name}, Age - ${age}`);

getUsersInfo(users, showUser);
