/*
*   Your task is to create a calculator. You can create
*   your calculator using any of the DOM manipulation
*   techniques we learned throughout the semester. Use
*   javascript's eval function to perform the calculation.
*   If an error occurs, show ERROR on the calculator
*   'screen'.
*
*   Requirements:
*     - Buttons for every digit 0-9
*     - Buttons for +, -, /, *
*     - Button to backspace or clear <-
*     - Button to execute calculation =
*     - Calculator 'screen' should update as buttons
*       are pressed including numbers, operations, etc
*     - Result should show on calculator 'screen'
*     - Upon submitting and showing result, calculator
*       should reset on next button click, starting new
*       calculation
*     - If an error occurs, for example inputting ---6,
*       calculator 'screen' should output 'ERROR'
*     - Calculator 'screen' should fit at least 10
*       characters
*     - At least 12 CSS styles
*
*   Submit your JS file, HTML file, and optional CSS file.
*   Refer to images in Sakai for guidance.
*/
const btns = [...document.getElementById('btns').children];
const res = document.getElementById('results');
let clrState = false;

const btnArrs = {
    bt1: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '(', ')'],
    bt2: ['+', '-', '/', '*'],
    spk: ['Enter', '=', 'Backspace', 'Delete', '^'],
    btnCheck(button) {
        return btnArrs.bt1.includes(button) || btnArrs.bt2.includes(button);
    }
}

function eventAdder(el) {
    if (btnArrs.btnCheck(el.innerText)) {
        el.addEventListener('click', e => textAdder(e, e.target.innerText));
    }

    if (el.innerText == 'C') {
        el.addEventListener('click', () => res.innerText = "");
    }

    if (el.innerText == '=') {
        el.addEventListener('click', adder);
    }
}

function adder() {
    clrState = true;
    let rv;
    try {
        let resReg = /^[0-9e+\-*/.()]*$/;
        if (!resReg.test(res.innerText)) throw (Error('Stop it.'))
        rv = eval(res.innerText);
        if (rv.toString().length > 14)
        rv = rv.toPrecision(10);
        if (rv == 'Infinity') throw (Error('Divide By Zero'));
    }
    catch (e) {
        if (e instanceof TypeError) {
            e = Error('No Value');
        }
        else if (e instanceof SyntaxError) {
            e = Error('Bad Syntax');
        }
        rv = e;
        console.log(e);
    }
    finally{
    res.innerText = rv;
    }
}

function textAdder(el, textAdd) {
    if (clrState && btnArrs.bt1.includes(textAdd)) {
        res.innerText = '';
        clrState = false;
    }
    clrState = false;
    res.innerText += textAdd;
}

btns.forEach(eventAdder);
document.addEventListener('keydown', e => {
    if (['/', 'Backspace', 'Enter', 'Delete'].includes(e.key))
    e.preventDefault();
    if (btnArrs.btnCheck(e.key)) {
        textAdder(e, e.key);
    }

    if (btnArrs.spk.includes(e.key))
        switch (e.key) {
            case ('='):
            case ('Enter'):
                adder();
                break;
            case ('Backspace'):
                res.innerText = res.innerText.slice(0, -1);
                break;
            case ('Delete'):
                res.innerText = '';
                break;
            case ('^'):
                textAdder(e, '**');
                break;
            default:
                break;
        }
});