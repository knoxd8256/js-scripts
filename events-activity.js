/*
*  Create a shopping list or todo app that allows
*  a user to add and remove items from a list.
*  Items should have user provided text.
*
*  Ex: Each 'item' can be an input box that allows
*  the user to type text or you can have one text
*  box that a user can type text and click 'add'
*  to add to the list.
*
*  Requirements:
*   -Can add items/tasks to the list
*   -Can remove items/tasks from the list
*   -At least 5 styles applied (color, padding, etc)
*    these can be applied in the header (<style>)
*    or via DOM manipulation or via an external css file.
*    If you use a css file, please upload it
*
*  Please upload your HTML and JS files with your
*  submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE
const addBtn = document.getElementById('addHam');
const list = document.getElementById('taskList');
const hamBox = document.getElementById('hamBox');
let liArr = [];
function makeLi(liString) {
    let currLi = document.createElement('li');
    currLi.innerText = liString;
    let remBut = document.createElement('button');
    remBut.innerHTML = ('X');
    currLi.appendChild(remBut);
    remBut.addEventListener('click', () => remBut.parentElement.remove())
    return currLi;
}

function buttAct() {
    if(hamBox.value) {list.appendChild(makeLi(hamBox.value))};
    hamBox.value = '';
}

hamBox.addEventListener('keyup', () => {if(event.keyCode == 13){buttAct()}})
addBtn.addEventListener('click', buttAct);
// YOUR CODE ENDS HERE
