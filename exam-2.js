/*
*   EXAM 2 PART 2
*   Create a review page for a product or
*   resturaunt. A review should have a name,
*   details (text), and a rating out of 5.
*
*   Requirements:
*     -Can add a review
*     -After adding a review, form should 'reset'
*     -Review count with total number of reviews
*     -Should have at least one image, can link
*       to an image you found on google.
*     -At least 10 styles applied. These can
*       be applied in the header, (<style>)
*       via DOM manipulation, or an external
*       css file.
*
*   Please upload your HTML and JS files with your
*   submission along with your css file if you used one.
*/

// YOUR CODE STARTS HERE


// Collecting elements from the HTMl file
const namFld = document.getElementById("name");
const subFld = document.getElementById("subject");
const comFld = document.getElementById("comments");
const subBtn = document.getElementById("submit");
const ratFlds = document.getElementsByName("rating");
const revForm = document.getElementById("revForm");

// Submit event from the review form
revForm.addEventListener("submit", event => {
  event.preventDefault();   // Catching the default submit action
  const ratFld = [...ratFlds].filter(el => el.checked)[0];  // Parsing review value from radio buttons
  let rev = new Review(namFld.value, subFld.value, ratFld.value, comFld.value);  // New review from Review() class and form data
  rev.addReview();  // Adding review using addReview method
  revForm.reset();  // Resetting the form
});

// Definition and constructor for the Review class
class Review {
  // Constructor of the Review class
  constructor(name, title, rating, comments) {
    // importing constructor values
    this.name = name;
    this.title = title;
    this.rating = rating;
    this.comments = comments;
  }

  // addReview() method adds a review to the DOM model of the page.
  addReview() {
    // Creating elements and adding text from review object

    // Main review element
    let revEl = document.createElement("article"); 
    revEl.classList.add("review");
 
    // Title
    let titEl = document.createElement("h1"); // Creating Element
    titEl.innerText = this.title;             // Importing data from review element
    revEl.appendChild(titEl);                 // Adding element to parent review element

    // Author & Rating
    let namEl = document.createElement("h4"); 
    namEl.innerText = `Reviewed ${this.rating} / 5 Nuggets by ${this.name}!`;
    revEl.appendChild(namEl);

    // Comments
    let parEl = document.createElement("p");
    parEl.innerText = this.comments;
    revEl.appendChild(parEl);

    // Adding review element to the review list
    document.getElementById("reviews").appendChild(revEl);
  }
}

// Star Selector
for (rat in [...ratFlds]){ 
    // For each element, add an event listener
    ratFlds[rat].addEventListener('click', (event) =>

    {
        // Each time a star is clicked, loop through each star
        for (i = 1; i <= 5; i++) {

            // If it's a previous star, it should be 'on'
            if (i <= event.target.value){
                ratFlds[i - 1].nextElementSibling.classList.add('on');
            }

            // Otherwise it should be 'off'
            else {
                ratFlds[i - 1].nextElementSibling.classList.remove('on');
            }
        }
    }
    );
}


// Sample review a la Johnny
// let review1 = new Review("Captain Nugget, of the Town Guard", "re: Your Beefy Nuggs", "5", "Listen, I have had many beef nuggets in my time. I have traveled the world searching for the perfect beefy snack encased in a delicious wrapper of crustiness. And I have never had a more disgusting nugget than I have ever had at Jahn's Nuggets o' Beef. This is not a review, this is a warning. Never show your face in my town ever again, y'hear?");
review1.addReview();

//  YOUR CODE ENDS HERE
