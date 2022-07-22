// Потрібно створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

//not found
const people1 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Ivan'],
  },
  {
    name: 'Eva',
    know: ['Jhon', 'Ivan'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
];

//Not found
const people2 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
];

// jhon
const people3 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
];

//Not found
const people4 = [
  {
    name: 'Alex',
    know: ['Eva', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Alex'],
  },
];

// My first variant
// function findNarcissus(people) {
//   const countPerson = people.length;

//   for (let i = 0; i < countPerson; i++) {
//     let countWhoKnows = 0;

//     for (let j = 0; j < countPerson; j++) {
//       if (people[j].know.includes(people[i].name)) {
//         countWhoKnows += 1;
//       }
//     }

//     if (countWhoKnows === countPerson - 1) {
//       if (!people[i].know.length) {
//         return `NARCIS ${people[i].name}`;
//       }
//     }
//   }
// }

// My second variant
function findNarcissus(people) {
  for (const person of people) {
    let countWhoKnows = 0;
    for (const { know } of people) {
      if (know.includes(person.name)) {
        countWhoKnows += 1;
      }
    }

    if (countWhoKnows === people.length - 1) {
      if (!person.know.length) {
        return `${person.name} is narcissus!`;
      }
    }
  }
  return `There are no narcissists in this company!`;
}

console.log('people1 - ' + findNarcissus(people1));
console.log('people2 - ' + findNarcissus(people2));
console.log('people3 - ' + findNarcissus(people3));
console.log('people4 - ' + findNarcissus(people4));

// First variant 3:18 PM - 3:42PM (24 minutes)
// Second variant 3:42PM - 3:54 PM (+12 minutes)
// Full - 36 minutes
