const display = document.getElementById('display');
const calculator = document.getElementById('calculator');
const sciKeys = document.getElementById('scientific-keys');
const modeToggle = document.getElementById('mode-toggle');

let isScientific = false;

// Seamlessly toggle between basic structure and expanded grid panels
function toggleMode() {
    isScientific = !isScientific;
    if (isScientific) {
        calculator.classList.add('scientific-active');
        sciKeys.style.display = 'grid';
        modeToggle.innerText = "Basic Mode";
    } else {
        calculator.classList.remove('scientific-active');
        sciKeys.style.display = 'none';
        modeToggle.innerText = "Scientific Mode";
    }
}

function press(val) {
    if (display.value === "Error") display.value = "";
    display.value += val;
}

function clearScreen() {
    display.value = "";
}

function delLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        
        // Match explicit display symbols back into syntax compatible with core execution
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        
        if (expression !== "") {
            let result = eval(expression);
            // Handle precision layout adjustments for decimals cleanly
            display.value = Number(result).toFixed(4).replace(/\.?0+$/, "");
        }
    } catch (err) {
        display.value = "Error";
    }
}
