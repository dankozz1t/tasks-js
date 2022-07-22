//TASK: PROPERTY VALUES COLLECTION
// Write a function getAllPropValues(propName) that takes one parameter propName - the name(key) of the property.
// The function should return an array of all the values of the property with that name from each object in the products array.
// If the objects do not have a property with the same name, the function returns an empty array.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const totalValues = [];
  for (let product of products) {
    for (const item in product) {
      if (item !== propName) {
        totalValues.push(product[item]);
      }
    }
  }
  return totalValues;
}

console.log(getAllPropValues('quantity')); //[4, 3, 7, 9]
console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
