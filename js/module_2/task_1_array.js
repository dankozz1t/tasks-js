// Потрібно мутувати масив так що залишились тільки імена.

const names = ['Anna', 3, 'Roma4', '17', 'Kate', 14, true, 'Oleg'];

for (let i = 0; i < names.length; i += 1) {
  if (typeof names[i] !== 'string') {
    names.splice(i, 1);
    i -= 1;
  }
}
console.log(names);
