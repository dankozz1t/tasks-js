spinWords = string =>
  string
    .split(' ')
    .map(
      val => (val = val.length >= 5 ? val.split('').reverse().join('') : val)
    )
    .join(' ');

console.log(spinWords('Welcome')); //'emocleW'
console.log(spinWords('Hey fellow warriors')); //'Hey wollef sroirraw'
console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('This is another test')); //'This is rehtona test'
console.log(spinWords('You are almost to the last test')); //  'You are tsomla to the last test'
console.log(spinWords('Just kidding there is still one more')); //'Just gniddik ereht is llits one more'
console.log(spinWords('Seriously this is the last one')); //  'ylsuoireS this is the last one'
console.log(spinWords('Just gniddik there is still one more')); //  'Just gniddik ereht is llits one more'
