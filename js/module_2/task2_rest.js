//Функція яка буде здатна прийняти різну кулькість аргументів, та перевірити чи вони являются числовими значеннями
//і ті яки будуть number - просуммувати

function addOverNum(...args) {
  let totalSum = 0;
  for (const item of args) {
    if (typeof item !== 'number') {
      continue;
    }

    totalSum += item;
  }

  return totalSum;
}

console.log(addOverNum(15, 32, 6, 13, 19, 8));
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
console.log(addOverNum(15, 'boo', 6, true, 19, 8));
