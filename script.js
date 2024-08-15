let displayValue = '';

const operators = ['+', '-', '*', '/', '.'];

// Function to update the display
function updateDisplay(value) {
    document.getElementById('display').textContent = value;
}

// Function to check if the displayValue ends with an operator
function endsWithOperator() {
    return operators.some(operator => displayValue.endsWith(operator));
}

// Function to handle digit input
function inputDigit(digit) {
    displayValue += digit;
    updateDisplay(displayValue);
}

// Function to handle operator input
function inputOperator(operator) {
    if (!endsWithOperator()) {
        displayValue += operator;
        updateDisplay(displayValue);
    }
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    updateDisplay(displayValue);
}

// Function to perform the calculation
function calculate() {
    try {
        const result = eval(displayValue);  // Caution: eval() can execute arbitrary code
        displayValue = result.toString();
        updateDisplay(displayValue);
    } catch (error) {
        displayValue = 'Error';
        updateDisplay(displayValue);
    }
}
