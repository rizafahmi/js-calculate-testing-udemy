import calculate from './calculate.js';

const equalButton = document.querySelector('button');

function handleCalculateResult(event) {
  event.preventDefault();
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;
  const operand = document.querySelector('#operand').value;
  const result = calculate(num1, operand, num2);
  document.querySelector('#result').value = result;
}

equalButton.addEventListener('click', handleCalculateResult);
