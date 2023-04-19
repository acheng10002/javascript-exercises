const add = (addendA, addendB) => {
  {
    addendA, 
    addendB
  }
  return addendA + addendB;
};

const subtract = (minuend, subtrahend) => {
  {
    minuend,
    subtrahend
  }
  return minuend - subtrahend;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
  }
  return product;
};

const power = (leftOperand, rightOperand) => {
  {
    leftOperand,
    rightOperand
  }
  return leftOperand ** rightOperand;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};
	

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
