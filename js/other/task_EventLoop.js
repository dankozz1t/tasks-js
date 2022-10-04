console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve(3).then(console.log);

setTimeout(() => {
  console.log(4);
}, 0);

console.log(5);

// cl - синхронщина
// setTimeout - макротаска
// Promise - микротаска которая обрабатывается сторонним API
// МикроТаски таски имеют приоритет

// 1 5 3 2 4
