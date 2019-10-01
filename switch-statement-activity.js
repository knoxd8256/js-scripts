/*
* Write a switch statement that logs how well a student performed.
* Your switch statement should use letterGrade as its switch value.
* Log the following depending on the letter grade value:
*   A: Excellent!
*   B: Great!
*   C: Passing!
* If the letter grade does not match A, B, or C, log:
*   Better luck next time!
*/

var letterGrade = `B`;

// YOUR SWITCH STATEMENT STARTS HERE

switch (letterGrade) {
    case `A`:
        console.log('Excellent!');
        break;
    case `B`:
        console.log('Great!');
        break;
    case `C`:
        console.log('Passing!');
        break;
    default:
        console.log('Better luck next time!');
        break;
}



// YOUR SWITCH STATEMENT ENDS HERE
