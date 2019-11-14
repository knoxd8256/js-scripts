// Page Load Animation
$('main').hide();
$(document).ready($('main').slideDown(1200));

// List Item Adder
function addItem() {
    // Creating the Element
    let listEl = document.createElement('li');
    // Setting the inner text to the field value
    listEl.innerText = ($('#newItem').val());
    
    // The next part only happens if there was text in the text field
    if(listEl.innerText) {

        // This bit just appends the new item and plays a short animation
        $('ul').append(listEl);
        $('li:last').hide();
        $('li:last').slideDown();

        // This adds a listener for the removal function when you click an element
        $('li').on('click', remItem);
    }
    
    // Form reset
    $('#newItem').val('');
}

// Button listener
$('button.add').on('click', addItem);
document.getElementById('newItem').addEventListener('keyup', () => event.keyCode == 13 ? addItem() : null);

// Removal Function
function remItem(el) {
/* This bit was tricky, because I wanted to use the built-in JQuery
*  animation method, but because it is meant to be run concurrently
*  to other functions, I had to add a promise in order to stop the
*  removal method from taking the element away before the animation
*  was finished.
*/
    el.target.id = "gone";
    let slider = new Promise(function (resolve) {
        $('#gone').slideUp(500);
        setTimeout(() => resolve('done'), 500);
    });
    slider.then(() => $('#gone').remove());
}