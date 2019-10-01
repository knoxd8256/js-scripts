/*
Given two arrays: studentNames and studentAges, complete the following 2 steps.
The values and lengths of these arrays will be modified when graded so do
not hard code your output. You do not have to follow the steps exactly, what matters
is that your output matches for a variety of inputs (arrays).

The length will always be greater than or equal to 2, so do not worry about singular/plural.
There will not be students with the same age or name so do not worry about duplicates.
*/
var studentNames = ['John', 'Dave', 'Jane', 'Julia', 'James', 'Carl'];
var studentAges = [22, 55, 21, 32, 47, 77];

// Printing out the initial sentence using a simple .length method.
console.log("There are " + studentNames.length + " students in this particular class.");

// Initializing the variable for the highest age.
var highAge = 0;

// Using a for() loop to search for the highest age, using the provided array functionality.
for (age in studentAges) {
    // Setting the current age to the value of the current index.
    var currAge = studentAges[age];;
    // Determining if this age is higher than the previous highest age.
    if (highAge <= currAge) {
        // Setting the highest age as the current age.
        highAge = currAge;
    }
}

// Retrieving the index of the highest reported age.
highSpot = studentAges.indexOf(highAge);

// Retrieving the value of that index.
highStudent = studentNames[highSpot];

// Logging the sentence for the oldest student's name and age.
console.log("The oldest student is " + highStudent + ", at a cool " + highAge + " years old!");