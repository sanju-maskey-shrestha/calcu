/*
 * Implement all your JavaScript in this file!
 */

const display = document.getElementById('display');
let operand1 = null;
let operator = null;
let waitingForSecondOperand = false;

function handleNumberClick(number) {
  if (waitingForSecondOperand) {
    display.value = number;
    waitingForSecondOperand = false;
  } else if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
}

function handleOperatorClick(op) {
  if (operator !== null) {
    const operand2 = parseFloat(display.value);
    const result = calculateResult(operand1, operand2, operator);
    display.value = result;
    operand1 = result;
  } else {
    operand1 = parseFloat(display.value);
  }
  operator = op;
  waitingForSecondOperand = true;
}

function calculateResult(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return null;
  }
}

function handleClearClick() {
  display.value = '0';
  operand1 = null;
  operator = null;
  waitingForSecondOperand = false;
}

function handleEqualsClick() {
  if (operator !== null) {
    const operand2 = parseFloat(display.value);
    const result = calculateResult(operand1, operand2, operator);
    display.value = result;
    operand1 = result;
    operator = null;
    waitingForSecondOperand = true;
  }
}

document.getElementById('button0').addEventListener('click', () => handleNumberClick('0'));
document.getElementById('button1').addEventListener('click', () => handleNumberClick('1'));
document.getElementById('button2').addEventListener('click', () => handleNumberClick('2'));
document.getElementById('button3').addEventListener('click', () => handleNumberClick('3'));
document.getElementById('button4').addEventListener('click', () => handleNumberClick('4'));
document.getElementById('button5').addEventListener('click', () => handleNumberClick('5'));
document.getElementById('button6').addEventListener('click', () => handleNumberClick('6'));
document.getElementById('button7').addEventListener('click', () => handleNumberClick('7'));
document.getElementById('button8').addEventListener('click', () => handleNumberClick('8'));
document.getElementById('button9').addEventListener('click', () => handleNumberClick('9'));
document.getElementById('addButton').addEventListener('click', () => handleOperatorClick('+'));
document.getElementById('subtractButton').addEventListener('click', () => handleOperatorClick('-'));
document.getElementById('multiplyButton').addEventListener('click', () => handleOperatorClick('*'));
document.getElementById('divideButton').addEventListener('click', () => handleOperatorClick('/'));
document.getElementById('clearButton').addEventListener('click', handleClearClick);
document.getElementById('equalsButton').addEventListener('click', handleEqualsClick);