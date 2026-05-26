const display = document.getElementById("display");

// Appends input to the calculator screen
function appendValue(input) {
    // Prevent starting with consecutive math symbols
    if (display.value === "" && ["+", "*", "/"].includes(input)) return;
    display.value += input;
}

// Clears the entire display screen
function clearDisplay() {
    display.value = "";
}

// Deletes the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Safely evaluates the string math statement
function calculate() {
    try {
        if (display.value.trim() === "") return;
        
        // Using Function() over eval() for safer sandboxed parsing
        const result = new Function(`return ${display.value}`)();
        
        // Handle division by zero or errors
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            // Limits trailing floating-point decimals to avoid breakdown bugs (e.g., 0.1+0.2)
            display.value = Number(result.toFixed(4));
        }
    } catch (error) {
        display.value = "Error";
    }
}

// BONUS: Keyboard Functionality Support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    
    if (key >= "0" && key <= "9" || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault(); // Prevents button focus triggers
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
