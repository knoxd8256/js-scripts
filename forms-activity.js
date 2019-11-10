/*
*  Create a form that handles submit and reset.
*  You have free reign to decide what the form
*  will be for, but the information provided should
*  be shown back to the user in a read only fashion
*  (like we did for exam 2 part 2). It should allow
*  the user to continue filling out the form and
*  appending the read only data on the page.
*
*  Requirements:
*   -A <form> element with contained controls
*   -At least 5 form fields
*   -At least 3 types of form fields:
*     ~text input
*     ~email input
*     ~textarea
*     ~checkbox
*     ~radio button
*     ~slider
*     ~etc
*   -At least 3 fields with validation:
*     ~min/max number value
*     ~character count min/max
*     ~required field
*     ~regex pattern
*     ~etc
*   -Form fields should have labels
*   -A submit button
*   -On submit, inputs should be displayed read only
*     and form should be reset.
*   -A reset button that resets form fields
*   -At least 10 styles (color, font size, etc)
*
*  Please upload your HTML and JS files with your
*  submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE

var formbo = document.forms.formbo;
formbo.addEventListener('submit', submitEvent);

function submitEvent(event) {
    event.preventDefault();
    values = {
        'name'   : formbo.formName.value,
        'author' : formbo.authName.value,
        'buttons': formbo.buttonNum.value,
        'color'  : formbo.colorPick.value,
        'rot': formbo.rotation.value
    };
    let newForm = createForm(values.name, values.author, values.buttons, values.color, values.rot);
    document.body.appendChild(newForm);
    formbo.reset();
}

function createForm(name, author, buttons, color, rotDegs) {
    const newForm = document.createElement('form');
    newForm.name = name;
    const formHead = document.createElement('h3');
    formHead.innerText = `${name} By: ${author}`;
    newForm.appendChild(formHead);
    newForm.classList.add('subForm');
    for (let i = 0; i < buttons; i++) {
        const but = document.createElement('button');
        but.addEventListener('click', event => event.preventDefault());
        but.setAttribute('style', `background-color: ${color}`);
        newForm.appendChild(but);
    }
    console.log(rotDegs);
    newForm.style.transform = `rotate(${rotDegs}deg)`;
    return newForm;
}
// YOUR CODE ENDS HERE
