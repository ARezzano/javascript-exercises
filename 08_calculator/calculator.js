const add = function(add1, add2) {
	return add1 + add2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(sum) {
	return sum.reduce((total,current) => total + current, 0);
};

const multiply = function(...mult) {
  return mult.reduce((total,current)=>current*total,1);
};

const power = function(num,pow) {
	let powNum = 1;

  for(let i = 0; i < pow; i++){
    powNum *= num;
  }

  return powNum;
};

const factorial = function(num) {
	if(num === 0) return 1;

  let factSum = num;
  for(let i = num-1; i > 1; i--){
    factSum *= i;
  }

  return factSum;
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
