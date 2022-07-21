// потрібно створити функцію я буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі
// 12 + 2 + 15 = 29
// 3 + 5 + 6 + 7 = 21
// turn([12,3,5,6,2,15,7],2);
// { 1 : 29, 2 : 21}

//not my
function turn(queue, cashdesks) {
  const cashes = {};
  for (let i = 1; i <= cashdesks; i += 1) {
    cashes[i] = 0;
  }
  for (const client of queue) {
    const list = Object.values(cashes);
    const min = Math.min(...list);
    const idxMin = list.indexOf(min);
    cashes[idxMin + 1] += client;
  }
  return cashes;
}
