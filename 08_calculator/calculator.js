const add = function(numOne, numTwo) {
	let numOut = numOne + numTwo;
  return numOut;
};

const subtract = function(numOne, numTwo) {
	let numOut = numOne - numTwo;
  return numOut;
};

const sum = function(array) {
  let numOut = array.reduce((a,b) => a + b, 0);
  return numOut;
};

const multiply = function(array) {
  let numOut = 1;
  for (let i = 0; i < array.length; i++){
    numOut *= array[i];
  }
  return numOut;
};

const power = function(num,pow) {
	let numOut = num ** pow;
  return numOut;
};

const factorial = function(num) {
  let numOut = num;
  if (num === 0 || num === 1) {
    return 1;
  } else {
      while (num > 1) { 
        num--; 
        numOut *= num;
    }
    return numOut
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
