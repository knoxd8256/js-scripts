/*
Given two arrays: studentNames and studentAges, complete the following 2 steps.
The values and lengths of these arrays will be modified when graded so do
not hard code your output. You do not have to follow the steps exactly, what matters
is that your output matches for a variety of inputs (arrays).

The length will always be greater than or equal to 2, so do not worry about singular/plural.
There will not be students with the same age or name so do not worry about duplicates.
*/
var studentNames = ['John', 'Jack', 'Jane', 'Julia', 'James'];
var studentAges = [22, 25, 21, 32, 24];
/*
EXPECTED OUTPUT USING PROVIDED ARRAYS:
There are 5 students.
The oldest student is Julia who is 32 years old.
*/

// STEP 1: In a sentence, log the number of students
console.log("There are", studentNames.length, "students.");
// STEP 2: In a sentence, log the name and age of the oldest student
// 2.1: Clone the age array (hint: slice)
agesSorted = studentAges.slice();
// 2.2: Sort the cloned age array, preserving the order of our original array.
agesSorted.sort();
// 2.3: Get the highest age from the age array
highAge = agesSorted.pop();
//2.4: Using the highest age from the sorted array, Find what index it was in the original age array
highIndex = studentAges.indexOf(highAge);
//2.5: Using the index, log the name and age of the oldest student
oldStudent = studentNames[highIndex];
console.log("The oldest student is", oldStudent, "who is", highAge, "years old.");