/*
*  Force each of the follow error types to occur
*  and catch them. Log a message describing each
*  of the error types.
*
*  Error types:
*   -SyntaxError (already done)
*   -ReferenceError
*   -TypeError
*   -RangeError
*
*  Additionally, throw your own error with a
*  custom error message containing your name.
*  Catch your error and log a message.
*/

console.log('PROGRAM START');

try {
  JSON.parse(`{name: 'John', age: 18}`);
} catch (error) {
  console.log(`Caught a syntax error: `);
  console.log(error);
}

// YOUR CODE STARTS HERE

// Reference Error
try {
  const carl = jake;
  console.log(carl);
}
catch (e) {
  console.log('Caught a reference error: ');
  console.log(e);
}

// Type Error
try {
  const grunk = 4;
  console.log(grunk.maybe());
}
catch (e) {
  console.log('Caught a type error: ');
  console.log(e);
}

// Range Error
try {
  const y = Array(-700);
  console.log(y)
}
catch (e) {
  console.log('Caught a range error: ');
  console.log(e);
}

// Hunger Error
try {
  throw Error('Hunger levels are too high!');
}
catch(e) {
  console.log(e);
}
// YOUR CODE ENDS HERE

console.log('PROGRAM END');
