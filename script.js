const display = document.getElementById("display");

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function whenOperatorPressed(operatorPressed) {
    firstNumber = display.value;
    operator = operatorPressed;
    clearDisplay();
    appendToDisplay(operatorPressed);
    console.log(firstNumber, operator);
}

function appendToDisplay(input) {
    display.value += input;
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    }
    if (operator === "-") {
        return subtract(num1, num2);
    }
    if (operator === "*") {
        return multiply(num1, num2);
    }
    if (operator === "/") {
        return divide(num1, num2);
    }
}

window.addEventListener('keydown', (e) => { // Adds keyboard functionality
    const operatorInput = e.key;
    const allowedInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.'];
    if (allowedInputs.includes(e.key)) {
        appendToDisplay(e.key);
    }
    if (e.key === 'c') {
        clearDisplay();
    }
    if (e.key === 'Enter') {
        calculate();
    }
})