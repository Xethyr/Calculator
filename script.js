const display = document.getElementById("display");
const decimal = document.getElementById('decimal');

function clearDisplay() {
    display.value = '';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    decimal.disabled = false;
}

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     }
//     catch(error) {
//         display.value = "Error";
//     }
// }

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

let firstNumber = null;
let secondNumber = null;
let operator = null;



function getValues() {
    const values = display.value.split(' ');
    firstNumber = values[0];
    operator = values[1];
    secondNumber = values[2];
    let result = operate(operator, Number(firstNumber), Number(secondNumber));
    display.value = result;
    
    if (values.length > 3) {
        let secondOperator = values[3];
        let thirdNumber = values [4];
        display.value = operate(secondOperator, result, Number(thirdNumber));
    }
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
        if (e.key === "+" || e.key === "-" || e.key === '*' || e.key === '/') {
            appendToDisplay(' ' + e.key + ' ');
        } else {
        appendToDisplay(e.key);
        }
    }
    if (e.key === 'c') {
        clearDisplay();
    }
    if (e.key === 'Enter') {
        getValues();
    }
})

decimal.addEventListener('click', () => { //Disables more than one decimal
    decimal.disabled = true;
})