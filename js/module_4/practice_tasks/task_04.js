// {a:2,f:5,c:4,s:3}
// Функція повератає обєкт де ключ це елемент стрінги а значення кількіть раз яку він дублюється

const str = 'aafffffccccsss';

const newString = str =>
  str.split('').reduce((acc, item) => {
    acc[item] ? (acc[item] += 1) : (acc[item] = 1);
    return acc;
  }, {});

console.log(newString(str));
