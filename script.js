// script.js - Smart Calculator
// Handles basic operations with clean interface

// DOM Elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clear');
const equalsBtn = document.getElementById('equals');
const backspaceBtn = document.getElementById('backspace');

// Calculator state
let currentInput = '0';
let previousInput = '';
let operator = null;
let shouldResetScreen = false;

// Initialize calculator
function initCalculator() {
    updateDisplay();
    setupEventListeners();
}

// Update the display with current input
function updateDisplay() {
    // Limit display length to prevent overflow
    if (currentInput.length > 12) {
        display.textContent = currentInput.substring(0, 12) + '...';
    } else {
        display.textContent = currentInput;
    }
}

// Setup event listeners for all buttons
function setupEventListeners() {
    // Number buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('number')) {
                appendNumber(button.textContent);
            } else if (button.classList.contains('operator')) {
                handleOperator(button.textContent);
            } else if (button.classList.contains('decimal')) {
                appendDecimal();
            }
        });
    });

    // Clear button
    clearBtn.addEventListener('click', clearCalculator);

    // Equals button
    equalsBtn.addEventListener('click', calculateResult);

    // Backspace button
    backspaceBtn.addEventListener('click', handleBackspace);

    // Keyboard support
    document.addEventListener('keydown', handleKeyboardInput);
}

// Handle keyboard input
function handleKeyboardInput(e) {
    const key = e.key;

    // Numbers
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    }
    // Operators
    else if (['+', '-', '*', '/'].includes(key)) {
        handleOperator(key);
    }
    // Decimal point
    else if (key === '.') {
        appendDecimal();
    }
    // Equals or Enter
    else if (key === '=' || key === 'Enter') {
        calculateResult();
    }
    // Clear or Escape
    else if (key === 'Escape' || key === 'Delete') {
        clearCalculator();
    }
    // Backspace
    else if (key === 'Backspace') {
        handleBackspace();
    }
}

// Append number to current input
function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Append decimal point
function appendDecimal() {
    if (shouldResetScreen) {
        currentInput = '0.';
        shouldResetScreen = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Handle operator selection
function handleOperator(op) {
    // If there's already an operation pending, calculate it first
    if (operator !== null && !shouldResetScreen) {
        calculateResult();
    }

    // Store the current input and operator
    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;

    // Optional: Show operation in display
    // display.textContent = `${previousInput} ${operator}`;
}

// Calculate the result
function calculateResult() {
    if (operator === null || shouldResetScreen) {
        return;
    }

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    // Perform calculation based on operator
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
        case '*':
            result = prev * current;
            break;
        case '÷':
        case '/':
            // Handle division by zero
            if (current === 0) {
                result = 'Error';
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    // Handle result display
    if (result === 'Error') {
        currentInput = 'Error';
    } else {
        // Round to avoid floating point precision issues
        result = Math.round(result * 100000000) / 100000000;
        currentInput = result.toString();
    }

    // Reset operator state
    operator = null;
    previousInput = '';
    shouldResetScreen = true;
    
    updateDisplay();
}

// Clear the calculator
function clearCalculator() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    shouldResetScreen = false;
    updateDisplay();
}

// Handle backspace
function handleBackspace() {
    if (currentInput === 'Error' || shouldResetScreen) {
        clearCalculator();
        return;
    }

    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// Format number for display (optional enhancement)
function formatNumber(number) {
    // Remove trailing zeros after decimal
    if (number.includes('.')) {
        number = number.replace(/\.?0+$/, '');
    }
    return number;
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', initCalculator);

// Error handling for invalid operations
function handleError(message) {
    console.error('Calculator Error:', message);
    currentInput = 'Error';
    updateDisplay();
    
    // Reset after error
    setTimeout(() => {
        clearCalculator();
    }, 1500);
}

// Additional utility functions for future enhancements

// Calculate percentage
function calculatePercentage() {
    const current = parseFloat(currentInput);
    if (!isNaN(current)) {
        currentInput = (current / 100).toString();
        updateDisplay();
    }
}

// Toggle positive/negative
function toggleSign() {
    if (currentInput !== '0' && currentInput !== 'Error') {
        if (currentInput.startsWith('-')) {
            currentInput = currentInput.substring(1);
        } else {
            currentInput = '-' + currentInput;
        }
        updateDisplay();
    }
}

// Memory functions (for future enhancement)
const memory = {
    value: 0,
    
    addToMemory() {
        const current = parseFloat(currentInput);
        if (!isNaN(current)) {
            this.value += current;
        }
    },
    
    subtractFromMemory() {
        const current = parseFloat(currentInput);
        if (!isNaN(current)) {
            this.value -= current;
        }
    },
    
    recallMemory() {
        currentInput = this.value.toString();
        updateDisplay();
    },
    
    clearMemory() {
        this.value = 0;
    }
};

// Export functions for testing (if using module system)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        appendNumber,
        appendDecimal,
        handleOperator,
        calculateResult,
        clearCalculator,
        handleBackspace,
        formatNumber,
        calculatePercentage,
        toggleSign,
        memory
    };
}