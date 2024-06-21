const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

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