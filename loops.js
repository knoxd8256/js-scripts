/* Durham tech is hosting an event for students to attend
*  various presentations around campus. A presentation
*  may have many students attending and a student may attend
*  many presentations.
*
*  Your task is to implement the registration system.
*  Given a list of presentations, you should request
*  and record the names of the students attending.
*  A blank entry should terminate and move to the next
*  presentation. After recording the attendee names
*  for each presentation, a prompt should allow the
*  user to provide a presentation name to receive
*  a list of the students attending.
*
*  Use window.prompt and window.alert to request
*  and provide user feedback.
*/

// You can modify this array for testing, and build objects
// maps, etc based off of the array, but your program
// should function with different array elements
// In other words, I will modify the elements in this array
// and your program should still function!
let presentations = [`Security 101`, `Philanthropy`];
let presList = document.getElementById('presentations');
presentationString = '';
for (let pres in presentations) {
    if (presentationString) {
        presentationString += `, ${presentations[pres]}`;
    }
    else {
        presentationString += `${presentations[pres]}`;
    }
}
presList.innerText = presentationString;
let presNames = Array(presentations.length);
let viewButton = document.getElementById('viewButton');
let setButton = document.getElementById('setButton');
// YOUR CODE STARTS HERE
function presEnter() {
    let names;
    let currPres;
    let name;
    for (let pres in presentations) {
        names = [];
        currPres = presentations[pres];
        do {
            name = window.prompt(`Enter a name for ${currPres}`);
            name && names.push(name);
        }while(name);
        presNames[pres] = names;
    }
}
function presView() {
    let viewPres = window.prompt('Enter a presentation to view the attendees of.');
    if (presentations.includes(viewPres)) {
        window.alert(presNames[presentations.indexOf(viewPres)]);
    }
    else {
        window.alert(`${viewPres} is not a valid presentation.`);
    }
}
viewButton.addEventListener('click', presView);
setButton.addEventListener('click', presEnter);
// YOUR CODE ENDS HERE
