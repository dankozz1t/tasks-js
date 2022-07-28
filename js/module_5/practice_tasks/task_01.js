const user = {
  name: 'Den',
  age: 30,
  context: this, // this в середині об'єкту буде завжди посилатися на window/undefined
  //   inner: {
  //     thisFromUser: this, // this в середині об'єктe, не зважаючи на вкладенність, буде завжди посилатися на window/undefined
  //     view: 'Я ТВІЙ THIS',
  //     // sayHello - function declaration -> посилається на об'єкт, в рамках якого він визваний
  //     sayHello(city, country) {
  //       console.log(this); // this посилається на об'єкт inner
  //       console.log(`Hello, my name is ${this}, i am from ${city} in ${country}`);
  //       // myAge - arrow function -> завжи ссилається на батьківський this
  //       const myAge = () => {
  //         console.log(this); // this буде = this функції sayHello
  //         console.log(this.age); // this.age - буде undefined так як в об'єкті inner відсутній ключ age
  //       }; // myAge this взяв батьківський this (з методу sayHello), метод sayHello посилаэться/був викликаний на об'экті inner
  //       myAge();
  //     },
  //   },
  //   ПРИКЛАД З ARROW FUNCTION
  //   sayHello: (city, country) => {
  //     console.log(`Hello, my name is ${this.name}, i am from ${city} in ${country}`);
  //     const myAge = () => {
  //       console.log(this);
  //       console.log(this.age);
  //     };
  //     myAge();
  //   },
  //   ПРИКЛАД З FUNCTION DECLARATION
  sayHello(city, country) {
    console.log(arguments);
    console.log(
      `Hello, my name is ${this.name}, i am from ${city} in ${country}`
    );

    // function myAge() {
    //   console.log(this);
    //   console.log(this.age);
    // }
    // // myAge.call(this); // Для того, щоб підхопити батьківський this нам потрібен був метод call

    // myAge(); // This зсилається на window

    const myAge = () => {
      console.log(this);
      console.log(this.age);
    }; // За рахунок нативної поведінки и arrow function  вона завжди посилається на батьківський this відносно місця її написання  НАПИСАННЯ /ОГОЛОШЕННЯ / СТВОРЕННЯ

    myAge();
  },
};

const user2 = {
  name: 'Maria',
  age: 20,
};

// user2.sayHello2 = user.sayHello;
// // console.log(user2);
// user2.sayHello2("Nikolaev", "Ukraine");

// user.sayHello();

// const copy = user.sayHello;
// console.log(copy);

// copy();

// В стрілочнії функції визначення контексту за місцем її написанням, а не за місцем виклику
// user.sayHello.call(user2, 'Nikolaev', 'Ukraine');

// Приклад з function declaration. This визначається місцем виклику.(ОБОВЯЗКОВО ПРОЧИТАТИ КОМЕНТИ З ПРИВОДУ ФУНКЦІЇ myAge)!
// user.sayHello.call(user2, 'Nikolaev', 'Ukraine');

//Приклад з function declaration (apply)

// user.sayHello.apply(user2, ['Nikolaev', 'Ukraine']);

//Приклад з function declaration (bind)

// const MariaSayHello = user.sayHello.bind(user2, 'Nikolaev', 'Ukraine'); //При передачі аргументів під час біндінгу агрументи також привязуються на постійнії основі
// console.log(MariaSayHello);
// // MariaSayHello('Nikolaev', 'Ukraine');
// MariaSayHello();

// MariaSayHello('New York', 'USA'); // в тому випадку, коли аргументи були забайдіні всі інші аргументи будуть додаватись як наступні

// user.sayHello('Crimea', 'Ukraine'); // Байнд не змінює контекст = (this) в нашому початковому методі

const test = user.sayHello.bind(user2)('New York', 'Ukraine');

console.log(test);
