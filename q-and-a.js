/*
*  Your task is to implement a question and answer system.
*  Given a list of questions and answers, prompt the user
*  to answer each question. If the user answers incorrectly,
*  ask again until the correct answer is provided.
*
*  Use window.prompt and window.alert to request
*  and provide user feedback.
*
*  Feel free to take some liberties in your implementation
*  for example telling the user they were correct/incorrect,
*  numbering the questions, indicating to the user how many
*  questions are remaining, etc.
*/

// You can modify these arrays for testing, and build objects
// maps, etc based off of the arrays, but your program
// should function with different array elements
// In other words, I will modify the elements in these arrays
// and your program should still function!

const questions = [
  'What keyword can be used to declare a variable?',
  'Object is a primitive type in javascript. (true/false)',
  'What loop is best for interating over arrays?'
];
const answers = ['var','false','for'];

// YOUR CODE STARTS HERE
let uanswers = Array(questions.length);
let right = 0;
for (q in questions) {
  let answer = window.prompt(questions[q]);
  uanswers[q] = answer;
  if (answer == answers[q]) {
    window.alert("You were right!");
    right++;
  }
  else {
    window.alert("You were wrong.");
  }
}
window.alert(`You got ${right} right out of ${answers.length}!`)
// YOUR CODE ENDS HERE
