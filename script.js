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
        case '*':
            return multiply(n1,n2);
        case '/':
            return divide(n1,n2);
    }
}
function display(n) {
    const d = document.querySelector(".display span");
    d.innerHTML += n;
}

let num1;
let op;
let num2;



// Apply display to numbers
const numArr = document.querySelectorAll(".nums button");
numArr.forEach((e) => e.addEventListener("click", (e) => {
    display(e.target.innerHTML);
}));