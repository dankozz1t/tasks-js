function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const newStr = str.split('');

  for (let i = 0; i < newStr.length; i++) {
    if (vowels.includes(newStr[i])) {
      newStr.splice(i, 1);
      i -= 1;
    }
  }

  return newStr.join('');
}

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];

//   return str
//     .split('')
//     .filter(function (el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     })
//     .join('');
// }

console.log(disemvowel('This website is for losers LOL!')); //  'Ths wbst s fr lsrs LL!'
console.log(disemvowel('What are you, a communist?')); //  "Wht r y,  cmmnst?"
