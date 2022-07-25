class Storage {
  constructor(object) {
    this.items = object;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    return this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    return this.items.splice(this.items.indexOf(itemToRemove), 1);
  }
}

// Change code above this line
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
