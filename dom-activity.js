/*
*  The document object provides a number of methods and
*  properties to access and manipulate elements. Given the
*  provided HTML file, manipulate the header, paragraph,
*  and list items.
*
*  The HTML file contains:
*   -h1 header
*   -p paragraph
*   -ul unordered list
*     -li (3x) list items
*
*  You can choose how to select the elements
*  (by class, tag, id, etc) and what text to fill
*  the elements with. Your manipulation should be
*  done fully from javascript and you should not
*  modify the html file directly.
*
*  Requirements:
*   -Every element should have text (h1, p, li)
*   -At least 2 elements should have styles applied
*   -The ul only has 3 li, add a 4th *to the list*
*
*  Please upload the (unmodified) HTML file with
*  your submission.
*/


// YOUR CODE STARTS HERE

// Style Definitions
let mainbg = "#225";
let mainfg = "#BBF";
let listbg = "#447";
let bodStyle;
let ulStyle;
let liStyle;

// Element Definitions
let headerOne = document.getElementsByTagName("h1");
let liList = document.getElementsByTagName("li");
let parEl = document.getElementsByTagName("p");
let ulEl = document.getElementsByTagName("ul")[0];
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
ulEl.appendChild(document.createElement("li"));
document.body.appendChild(document.createElement("button"));
let btn = document.getElementsByTagName("button")[0];


// Element Contents
let liText = Array(liList.length);
liText.map((foo, bar) => liText[bar] = "Beef Nuggets");
[...headerOne].map(el => el.innerText = "Header Element");
[...liList].map((el, foo) => el.innerText = liText[foo]);
[...parEl].map(el => el.innerText = "Paragraph Element");

// Style Application
function styleApp() {
    bodStyle = `background-color: ${mainbg}; padding: 1em; color: ${mainfg}; font-family: sans-serif`;
    ulStyle = "list-style: none; padding: 0;";
    liStyle = `margin: 1em .5em; padding: 2em 1em; background-color: ${listbg}; border-radius: 1em; box-shadow: inset .5rem .5rem 1rem #000;`;
    btnStyle = `border: none; border-radius: 1em; width: 3em; height: 3em; display: block; position: fixed; bottom: 1em; right: 1em; background-color: ${listbg}; border: solid ${mainfg} 2px; box-shadow: -.5rem .5rem 1rem #000;`;
    ulEl.setAttribute("style", ulStyle);
    btn.setAttribute("style", btnStyle);
    document.body.setAttribute("style", bodStyle);
    [...liList].map(el => el.setAttribute("style", liStyle));
}
styleApp();

// Style Swapper
let active = false;
btn.addEventListener("click", btnFunc);
function btnFunc() {
    if (active) {
        active = false;
        mainbg = "#225";
        mainfg = "#BBF";
        listbg = "#447";
    }
    else {
        active = true;
        mainbg = "#FBB";
        mainfg = "#522";
        listbg = "#FDD";
    }
    styleApp();
}

// YOUR CODE ENDS HERE
