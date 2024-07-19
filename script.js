function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}
function operate(n1, op, n2) {
    switch (op) {
        case '+':
            return add(n1,n2);
        case '-':
            return subtract(n1,n2);
        case 'X':
            return multiply(n1,n2);
        case '/':
            return divide(n1,n2);
        case '%':
            return n1 % n2;
    }
}
function display(n) {
    const d = document.querySelector(".display span");
    d.innerHTML += n;
}
function clear() {
    const d = document.querySelector(".display span");
    let ch = d.innerHTML;
    if (ch === '') {
        return;
    }else {
        d.innerHTML = ch.substring(0, ch.length-1);
    }
}
function clearAll() {
    const d = document.querySelector(".display span");
    d.innerHTML = '';
    num1 = '';
    num2 = '';
    op = '';
}
let num1 = '';
let op = '';
let num2 = '';



// Apply display to numbers
const numArr = document.querySelectorAll(".nums button");
numArr.forEach((e) => e.addEventListener("click", (e) => {
    display(e.target.innerHTML);
}));

// Apply clear
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click",clear);

// Apply clearAll
const clearAllBtn = document.querySelector("#clearAll");
clearAllBtn.addEventListener("click",clearAll);

// Apply operators
const operators = document.querySelectorAll(".op");
operators.forEach((e) => e.addEventListener("click", (e) => {
    // Calculator Logic
    console.log(e.target.innerHTML);
}));