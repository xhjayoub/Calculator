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
    if (res === true) {
        d.innerHTML = '';
        res = false;
    }
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
    res = false;
}
let num1 = '';
let op = '';
let num2 = '';
let res = false;



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
    const d = document.querySelector(".display span");
    if (num1 === '') {
        num1 = parseFloat(d.innerHTML);
        d.innerHTML = '';
        op = e.target.innerHTML;
        res = false;
    } else {
        num2 = parseFloat(d.innerHTML);
        num1 = operate(num1, op, num2);
        d.innerHTML = num1;
        res = true;
    }
    op = e.target.innerHTML;
    console.log(num1, op, num2);
}));

const eq = document.querySelector("#equal");
eq.addEventListener("click", () => {
    const d = document.querySelector(".display span");
    if (num1 === '') {
        d.innerHTML = 0;
    } else if (op !== ''){
        num2 = parseFloat(d.innerHTML);
        num1 = operate(num1, op, num2);
        console.log(num1);
        d.innerHTML = num1;
        num2 = '';
        op = '';
        num1 = '';
        res = true;
    }
})