const friends = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

const getUsersWithAge = (users, minAge, maxAge) =>
  users.filter(user => user.age >= minAge && user.age <= maxAge);

const getUsersWithFriend = (users, friendName) =>
  users.filter(user => user.friends.includes(friendName));

const getFriends = users =>
  users
    .flatMap(user => user.friends)
    .filter((user, index, array) => array.indexOf(user) === index);

const getActiveUsers = users => users.filter(user => user.isActive);

const getInactiveUsers = users => users.filter(user => !user.isActive);

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

const isAnyUserActive = users => users.some(user => user.isActive);

const calculateTotalBalance = users =>
  users.reduce((total, user) => total + user.balance, 0);

const getTotalFriendCount = users =>
  users.reduce((total, user) => total + user.friends.length, 0);

const sortByAscendingBalance = users =>
  users.sort((a, b) => a.balance - b.balance);

const sortByDescendingFriendCount = users =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);

const sortByName = users =>
  [...users].sort((a, b) => a.name.localeCompare(b.name));

const getNamesSortedByFriendCount = users =>
  [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);

const getSortedFriends = users =>
  [...users]
    .flatMap(user => user.friends)
    .sort((a, b) => a.localeCompare(b))
    .filter((user, index, array) => array.indexOf(user) === index);

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
