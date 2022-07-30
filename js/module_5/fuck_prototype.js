class Samurai {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

let shogun = new Samurai('ALEX');
console.log(shogun.__proto__); //Object Samurai
console.log(shogun.__proto__.__proto__); //Object {}
console.log(shogun.__proto__.constructor.__proto__); //function ()
console.log(shogun.__proto__.__proto__.__proto__); //null
