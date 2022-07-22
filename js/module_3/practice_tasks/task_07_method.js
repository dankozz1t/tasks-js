// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

const bankSystem = {
  name: '*',
  privat: 1000,
  mono: 1500,

  getBalance(cardName) {
    if (!this[cardName]) {
      return 'Not correct';
    }
    return this[cardName];
  },

  addNewCard(cardName) {
    const keys = Object.keys(cardName);
    if (keys.includes(cardName)) {
      return 'This card already exists';
    }

    this[cardName] = 0;
    return `Card "${cardName}" added`;
  },

  takeMoneyFromCard(cardName, amount) {
    const keys = Object.keys(cardName);
    if (keys.includes(cardName)) {
      return 'This card does not exist';
    } else if (this[cardName] <= amount) {
      return 'Insufficient funds';
    }

    this[cardName] -= amount;
    return `${amount}$ was withdrawn from the "${cardName}" card, it remains - ${this[cardName]}$`;
  },

  putMoneyFromCar(cardName, amount) {
    const keys = Object.keys(cardName);
    if (keys.includes(cardName)) {
      return 'This card does not exist';
    } else if (this[cardName] <= amount) {
      return 'Insufficient funds';
    }

    this[cardName] += amount;
    return `${amount}$ was withdrawn from the "${cardName}" card, it remains - ${this[cardName]}$`;
  },
};

console.log(bankSystem);
console.log(bankSystem.addNewCard('oshad'));
console.log(bankSystem.takeMoneyFromCard('mono', 100));
console.log(bankSystem.putMoneyFromCar('mono', 200));
console.log(bankSystem);
