// function pigIt(str) {
//   let newStr = str.split(' ');

//   for (let i = 0; i < newStr.length; i++) {
//     let test = newStr[i].split('');

//     test.push(...test.slice(0, 1));

//     test.splice(0, 1);
//     test.push('ay');

//     newStr[i] = test.join('');
//   }

//   return newStr.join(' ');
// }

// pigIt = str =>
//   str
//     .split(' ')
//     .reduce((acc, word) => {
//       if (!word.includes('!')) {
//         return acc.concat([word.slice(1, word.length) + word[0] + 'ay']);
//       }
//       return acc;
//     }, [])
//     .join(' ');

pigIt = str => (str = str.replace(/(\w)(\w*)/g, '$2$1ay'));

console.log(pigIt('Pig latin is cool')); //'igPay atinlay siay oolcay'
console.log(pigIt('Oay emporatay oay oresmay !ay')); //'Oay emporatay oay oresmay !'
console.log(pigIt('This is my string')); //'hisTay siay ymay tringsay'
