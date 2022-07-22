const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, makePizza, onOrderError) {
    return this.pizzas.includes(pizzaName)
      ? makePizza(pizzaName)
      : onOrderError(pizzaName);
  },
};

function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}
console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
