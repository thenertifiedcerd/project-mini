const display = document.getElementById('display');
let displayValue = '';

document.addEventListener('keydown', function(event) {
  const key = event.key; // Get the pressed key

  if (key >= '0' && key <= '9') { // Check if it's a number key
    appendNumber(key);
  } else if (key === '.') { // Check for decimal point
      appendNumber(key);
  } else if (key === 'Enter') {
   compute();
  } else if (key === 'Backspace') {
      deleteNumber();
  } else if (key === 'c') {
      clearDisplay();
} else if (key === '/') {
      appendNumber('/');
}
});


function calcPi() {
if (displayValue === '.') {
   displayValue = 'Error';
} else {
   displayValue = Math.PI;
}
 updateDisplay();
}

function calcSin() {
   if(displayValue && calcSin) {
      displayValue = Math.sin(displayValue);
   }
   updateDisplay();
}

function calcCos() {
   if(displayValue && calcCos) {
      displayValue = Math.cos(displayValue);
   }
   updateDisplay();
}

function calcTan() {
   if(displayValue && calcTan) {
      displayValue = Math.tan(displayValue);
   }
   updateDisplay();
}

function calcLog() {
   if(displayValue && calcLog) {
      displayValue = Math.log10(displayValue);
   }
   updateDisplay();
}

function calcIn() {
   if(displayValue && calcIn) {
      displayValue = Math.log(displayValue);
   }
   updateDisplay();
}

function cubeRoot() {
   if(displayValue && cubeRoot) {
      displayValue = Math.cbrt(displayValue);
   }
   updateDisplay();
}

function calcFact() {
  const num = parseFloat(displayValue); // Parse to float

  if (isNaN(num)) {
    displayValue = "Error: Invalid input";
  } else if (num === 0) {
    displayValue = "1"; // Set displayValue directly
  } else if (num < 0) {
    displayValue = "Error: Factorial is not defined for negative numbers.";
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    displayValue = result.toString(); // Set displayValue to the result
  }
  updateDisplay();
}

function updateDisplay() {
   display.textContent = displayValue;
}

function appendNumber(number) {
   if (displayValue === '0' && number !== '.') {
      displayValue = number;
   } else {
      displayValue += number;
   }
   updateDisplay();
}

function clearDisplay() {
   displayValue = '0';
   updateDisplay();
}

function deleteNumber() {
   displayValue = displayValue.slice(0, -1);
   if (displayValue === '') {
      displayValue = '0';
   }
   updateDisplay();
}

function calcPercent() {
   if (displayValue === '.') {
      displayValue = 'Error'
   } else {
      displayValue = displayValue/100;
   }
   updateDisplay();
}

function squareRoot () {
   if (displayValue === '0' || displayValue === '.') {
      displayValue = 'Error'
   } else {
      displayValue = Math.sqrt(displayValue);
   }
   updateDisplay();
}

function compute() {
   try {
      displayValue = eval(displayValue).toString();
   } catch {
      displayValue = 'Error';
   }
   updateDisplay();

}