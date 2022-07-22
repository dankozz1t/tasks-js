function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(value => {
    totalPrice += value;
  });

  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  return totalPrice;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //138
console.log(calculateTotalPrice([164, 48, 291])); //503
