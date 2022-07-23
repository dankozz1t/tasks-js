//----------------------------------------------------------------------------------------------------------------
// 1 Створити функцію яка робить перевірку чи в меседжі присутні спам слова "sale" , "free".
//Якщо в меседжі присутні спам слова повертаємо true, якщо ні то false.
const message0 = 'Attention, we have a Sale'; //true
const message1 = 'Hello have a nice day'; //false
const message2 = 'You won free shipping'; //true
const message3 = 'What are you doing'; //false
const message4 = 'blablabla freeze blabla bla'; //false
const message5 = 'bla bla salesman bla bla bla'; //false

const isIncludesSpamWords = (message, spamWords = ['sale', 'free']) =>
  message
    .toLowerCase()
    .split(' ')
    .some(word => spamWords.includes(word));

console.log('----- Task 1 -----');
console.log(`${isIncludesSpamWords(message0)}   =  ${message0}`); //true
console.log(`${isIncludesSpamWords(message1)}  =  ${message1}`); //false
console.log(`${isIncludesSpamWords(message2)}  =  ${message2}`); //true
console.log(`${isIncludesSpamWords(message3)}  =  ${message3}`); //false
console.log(`${isIncludesSpamWords(message4)}  =  ${message4}`); //false
console.log(`${isIncludesSpamWords(message5)}  =  ${message5}`); //false

//----------------------------------------------------------------------------------------------------------------
// 2 Замінити всі розширення файлів з .css на .js
const files = [
  'index.css',
  'script.js',
  'style.css',
  'step-types.json',
  'firebase.css',
];

const replaceAllExtensions = files =>
  files.map(file => file.replaceAll('.css', '.js'));

console.log('----- Task 2 -----');
console.log(replaceAllExtensions(files));

//----------------------------------------------------------------------------------------------------------------
// 3 Мутувати стрінгу так щоб залишились тільки унікальні значення
const str = 'a13aabnff1';

const isUnique = str =>
  str
    .split('')
    .filter((char, index) => str.indexOf(char) === index)
    .join('');

console.log('----- Task 3 -----');
console.log(isUnique(str));
