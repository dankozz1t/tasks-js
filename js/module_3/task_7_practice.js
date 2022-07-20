// Створити функцію яка буде повертати обєкт
//{ s: 4, a: 6, f: 2, t: 1, d: 4, g: 1, h: 1, u: 1 }

const str = 'sasftsaddghfuaaasdda';

function stringToObject(str) {
  const newObj = {};
  for (const item of str) {
    if (!newObj.hasOwnProperty(item)) {
      newObj[item] = 1;
    } else {
      newObj[item] += 1;
    }
  }

  return newObj;
}

console.log(stringToObject(str));
