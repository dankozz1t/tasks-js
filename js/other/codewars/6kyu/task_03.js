function toCamelCase(str) {
  let arr = str.split('');
  for (i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    }
  }
  return arr.join('');
}
console.log(toCamelCase('the_stealth_warrior')); // 'theStealthWarrior'
console.log(toCamelCase('The-Stealth-Warrior')); // 'TheStealthWarrior'
