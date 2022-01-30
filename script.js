//button selectors
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelectorAll("#zero");
const plusButton = document.querySelector("#plus");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const minusButton = document.querySelector("#minus");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const buttons = document.querySelectorAll(".buttons");

//other selectors
const outcome = document.querySelector("#outcome");
const formula = document.querySelector("#formula");
let operator = "";
let intOne = "";
let intTwo = "";
let final = "";

//basic math functions

function add(intOne, intTwo) {
  let final = parseInt(intOne) + parseInt(intTwo);
  outcome.textContent = `${final}`;
  return final;
}

function subtract(intOne, intTwo) {
  let final = parseInt(intOne) - parseInt(intTwo);
  outcome.textContent = `${final}`;
  return final;
}

function multiply(intOne, intTwo) {
  let final = parseInt(intOne) * parseInt(intTwo);
  outcome.textContent = `${final}`;
  return final;
}

function divide(intOne, intTwo) {
  if (intTwo == 0) {
    outcome.textContent = "Err";
  } else {
    let final = parseInt(intOne) / parseInt(intTwo);
    outcome.textContent = `${final}`;
    return final;
  }
}

function operate(operator, intOne, intTwo) {
  switch (operator) {
    case "+":
      add(intOne, intTwo);
      break;
    case "-":
      subtract(intOne, intTwo);
      break;
    case "*":
      multiply(intOne, intTwo);
      break;
    case "/":
      divide(intOne, intTwo);
      break;
  }
}

//Clear button functinality

clearButton.addEventListener("click", clearAll);

function clearAll() {
  outcome.textContent = "0";
  operator = "";
  intOne = "";
  intTwo = "";
  formula.textContent = "_";
}

//brains of the calculator

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (Number.isInteger(parseFloat(buttons.textContent))) {
      if (operator == "") {
        if (intOne == "") {
          intOne = buttons.textContent;
        } else if (intOne != 0) {
          intOne += buttons.textContent;
        }
      } else if (operator != "" && buttons.textContent != "=") {
        if (intTwo == "") {
          intTwo = buttons.textContent;
        } else if (intTwo != 0) {
          intTwo += buttons.textContent;
        }
      }
    } else if (
      buttons.textContent == "+" ||
      buttons.textContent == "/" ||
      buttons.textContent == "-" ||
      buttons.textContent == "x" ||
      buttons.textContent == "="
    ) {
      if (intOne != "" && operator == "") {
        operator = buttons.textContent;
      } else if (intOne != "" && intOne != "") {
        operate(operator, intOne, intTwo);
        formula.textContent = `${intOne} ${operator} ${intTwo}`;
        intOne = "";
        IntTwo = "";
        operator = "";
      }
    } else if (buttons.textContent == "=") {
      operate(operator, intOne, intTwo);
      formula.textContent = `${intOne} ${operator} ${intTwo}`;
    }
  });
});
