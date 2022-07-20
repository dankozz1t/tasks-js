// Порахувати скільки ззаробив кожен  юзер
// (функція приймає 2 параметри
// 1 параметр масив
// 2 параметр  імя робітника
// Функція повертає скільки він заробив (salary*month) )

//---2
// Порахувати загальну суму заробітку всіх робітників()
// (функція приймає 1 параметр масив, і повертає загалну суму заробітку всіх робітників);

const workers = [
  {
    name: 'Alex',
    salary: 3500,
    month: 12,
  },
  {
    name: 'Dima',
    salary: 2500,
    month: 9,
  },
  {
    name: 'Oleg',
    salary: 1500,
    month: 36,
  },
];

function getWorkerSalary(data, nameWorker) {
  for (const { name, salary, month } of data) {
    if (name === nameWorker) {
      return salary * month;
    }
  }
}

function getAllWorkersSalary(data) {
  let totalWorkersSalary = 0;
  for (const { salary, month } of data) {
    totalWorkersSalary += salary * month;
  }
  return totalWorkersSalary;
}

console.log(getWorkerSalary(workers, 'Alex'));
console.log(getAllWorkersSalary(workers));
