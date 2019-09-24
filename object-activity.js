var pizza = {
  basePrice: 8,
  pricePerTopping: .75,
  toppings: [],
  // Should accept a topping and add it to the toppings array
  addTopping: function(topping) {
    this.toppings.push(topping);
  },
  // Should accept a topping and remove it from the toppings array
  // You can assume that the topping will exist in the array
  removeTopping: function(topping) {
    this.toppings.splice([this.toppings.indexOf(topping)], 1);
  },
  // Should accept a topping and return true/false if it exists
  hasTopping: function(topping) {
    return this.toppings.includes(topping)
  },
  // Should return the total price depending on number of toppings plus base price
  // Should be formatted with a dollar sign, for example: $8, $8.75, $9.5, etc
  price: function() {
    price = this.basePrice + this.pricePerTopping * this.toppings.length;
    return "$" + price;
  }
}

// $8
console.log(pizza.price());

// $8.75
pizza.addTopping('tomatos');
console.log(pizza.price());

// $9.5
pizza.addTopping('chicken');
console.log(pizza.price());

// false
console.log(pizza.hasTopping('beef'));

// true
console.log(pizza.hasTopping('chicken'));

// false
pizza.removeTopping('chicken');
console.log(pizza.hasTopping('chicken'));