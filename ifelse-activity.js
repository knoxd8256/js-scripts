/*
* The price per ticket depends on the number of tickets
* purchased, there are 4 ticket pricing tiers. Given the
* number of tickets return the total price, formatted to
* exactly two decimal places with a leading dollar sign.
* Tier 1:
*   Minimum number of tickets: 1
*   Price per ticket: $16.75
* Tier 2:
*   Minimum number of tickets: 4
*   Price per ticket: $14.00
* Tier 3:
*   Minimum number of tickets: 7
*   Price per ticket: $11.00
* Tier 4:
*   Minimum number of tickets: 11
*   Price per ticket: $8.50
*/
function calculateTotalPrice(tickNum) {
  //YOUR CODE STARTS HERE
  if(tickNum < 4) {
    total = tickNum * 16.75;
  }
  else if (tickNum < 7) {
    total = tickNum * 14;
  }
  else if (tickNum < 11) {
    total = tickNum * 11;
  }
  else {
    total = tickNum * 8.50;
  }
  return '$' + total.toFixed(2);
  //YOUR CODE ENDS HERE
}

// $33.50
console.log(calculateTotalPrice(2));

// $56.00
console.log(calculateTotalPrice(4));

// $99.00
console.log(calculateTotalPrice(9));

// $110.50
console.log(calculateTotalPrice(13));
