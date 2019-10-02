// PART 1
// Use truthy/falsy and short circuit concepts to console log 'Welcome'
// if a user is logged in. You should use || or &&. NO if/else.
// Toggle isLoggedIn to test.
var isLoggedIn = true;

// YOUR CODE STARTS HERE
!isLoggedIn || console.log('Welcome');
// YOUR CODE ENDS HERE


// PART 2
// Use truthy/falsy and short circuit concepts to console log
// 'You must be 13 or older' if the user is under 13.
// You should use || or &&. NO if/else. Adjust user to test.
var user = {
  name: `John`,
  age: 12,
  username: `john07`
}

// YOUR CODE STARTS HERE
user.age >= 13 || console.log('You must be 13 or older');
// YOUR CODE ENDS HERE


// PART 3
// Use truthy/falsy and short circuit concepts to set a
// default value of 'mutt' to a variable named dogBreed
// if the dog's breed is not set (empty, null, undefined).
// NO if/else. Adjust dog to test.
var dog = {
  age: 3,
  breed: 'poodle',
  vaccinated: true,
  adopted: false,
  adoptionFee: 200
}

// YOUR CODE STARTS HERE
dogBreed = dog.breed || 'mutt';
// YOUR CODE ENDS HERE


// PART 4
// Use truthy/falsy and short circuit concepts to write an
// if statement that logs the following if the house has
// not sold and address, city, and stateCode are all set.
// EX:
// The house located at the following address is available:
// 100 Main Street
// Durham, NC
var house = {
  sold: false,
  address: '100 Main Street',
  city: 'Durham',
  stateCode: 'NC'
}

// YOUR CODE STARTS HERE
if(house.address && house.city && house.stateCode && !house.sold) {
  console.log(`The house at the following address is available:\n${house.address}\n${house.city}, ${house.stateCode}`);
}

// YOUR CODE ENDS HERE
