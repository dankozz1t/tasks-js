const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },

  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      if (iterator.name === productName) {
        items.splice(i, 1);
        i -= 1;
      }
    }
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    const { items } = this;

    let totalPrice = 0;
    for (const { price, quantity } of this.items) {
      totalPrice += price * quantity;
    }
    return totalPrice;
  },

  increaseQuantity() {},

  decreaseQuantity() {},
};

cart.add({ name: 'apple', price: 40 });
cart.add({ name: 'lemon', price: 10 });
cart.add({ name: 'orange', price: 70 });
cart.add({ name: 'juice', price: 100 });
cart.add({ name: 'beer', price: 210 });

cart.add({ name: 'apple', price: 40 });

console.log(cart);

for (const product of cart.items) {
  console.log(
    `items | name - ${product.name} | price - ${product.price} | quantity - ${product.quantity} `
  );
}
