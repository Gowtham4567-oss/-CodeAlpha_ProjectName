const display = document.getElementById('display');

// Append numbers or operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clear the entire screen
function clearDisplay() {
    display.value = "";
}

// Delete the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        // eval() takes the string and treats it as math
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
