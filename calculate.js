function calculate(num1, operand, num2) {
  console.log("calculating...");
  switch(operand) {
    case '+': return add(num1, num2);
    case '-': return sub(num1, num2);
    case '*': return mul(num1, num2);
    case '/': return div(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

export default calculate;
