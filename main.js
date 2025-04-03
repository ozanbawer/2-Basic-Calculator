const display = document.querySelector(".result");
const keys = document.querySelector(".btn_cont");

let displayValue = "0";

updateDisplay();

function updateDisplay() {
  display.value = displayValue;
}

keys.addEventListener("click", function (e) {
  const element = e.target;
  if (!element.matches("button")) return;

  if (element.classList.contains("operator")) {
    console.log("operator", element.innerText);
    return;
  }

  if (element.classList.contains("clear")) {
    // console.log("clear", element.innerText);
    clear();
    updateDisplay();
    return;
  }

  if (element.classList.contains("decimal")) {
    // console.log("decimal", element.innerText);
    inputDecimal();
    updateDisplay();
    return;
  }

  // console.log('number', element.innerText)
  inputNumber(element.innerText);
  updateDisplay();
});

function inputNumber(num) {
  displayValue = displayValue === '0'? num: displayValue + num;
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.'
    }
}

function clear () {
    displayValue = '0'
}


