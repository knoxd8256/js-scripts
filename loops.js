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
let presNames = Array(presentations.length);
// YOUR CODE STARTS HERE
function presEnter() {
    for (pres in presentations) {
        let names = [];
        let currPres = presentations[pres];
        do {
            let name = window.prompt(`Enter a name for ${currPres}`);
            names.append(name);
        }while(name)
    }
}
presEnter();
// YOUR CODE ENDS HERE
