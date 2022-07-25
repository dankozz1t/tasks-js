const users = [
  'Artem',
  'Anna',
  'Larisa',
  'Maksim',
  'Svetlana',
  'David',
  'Roman',
  'Olga',
];

const mens = ['Artem', 'Maksim', 'David', 'Roman'];
const womans = [];

users.forEach(person => {
  if (!mens.includes(person)) {
    womans.push(person);
  }
});

console.log(womans);
