let currentNumber = "";
let previousNumber = "";
let operator = "";
const display = document.getElementById("number");

let updateDisaply = (value) => {
  display.innerHTML = value;
};

let setBtnStyle = (button) => {
  button.style.backgroundColor = "white";
  button.style.color = "orange";
};

let resetBtnStyle = () => {
  document.querySelectorAll(".operator-btn").forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
};
document.querySelectorAll(".num-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentNumber += btn.value;
    updateDisaply(currentNumber);
  });
});

document.querySelectorAll(".operator-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
      Calculation();
    }
    resetBtnStyle(); 
    setBtnStyle(button); 
    operator = button.value;
    previousNumber = currentNumber;
    currentNumber = "";
    updateDisaply("");
  });
});

document.getElementById("equals-btn").addEventListener("click", () => {
  if (currentNumber === "" || previousNumber === "") return;
  Calculation();
  updateDisaply(currentNumber);
  previousNumber = "";
  operator = "";
  resetBtnStyle(); 
});

document.getElementById("clear-btn").addEventListener("click", () => {
  previousNumber = "";
  currentNumber = "";
  operator = "";
  updateDisaply("0");
  resetBtnStyle();
});

let Calculation = () => {
  let result;
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  currentNumber = result.toString();
};
