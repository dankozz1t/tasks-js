const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const key of this.potions) {
      if (key.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    let potionIndex = 0;
    for (const key of this.potions) {
      if (key.name === potionName) {
        potionIndex = this.potions.indexOf(key);
        this.potions.splice(potionIndex, 1);
      }
    }
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
  },
  updatePotionName(oldName, newName) {
    let isUnique = false;
    for (const item of this.potions) {
      if (item.name === oldName) {
        item.name = newName;
        potionIndex = true;
      }
    }

    if (isUnique) {
      return `Potion ${oldName} is not in inventory!`;
    }
  },
};

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); //в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })); //в массиве potions последним элементом будет этот объект
// console.log(atTheOldToad.removePotion('Dragon breath')); //[ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')); //[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
console.log(atTheOldToad.getPotions());
