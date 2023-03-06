const flatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// syntax
// arrayBuffer.filter((ele,index,wa) => boolean_condition);
//if condition true return ele else ommit the ele

// ODD
// ES5:
var result = flatNumbers.filter((ele) => {
  if (ele % 2 == 1) return true;
  else return false;
});

// ES6:
var result = flatNumbers.filter((ele) => ele % 2 == 1);
var result = flatNumbers.filter((ele) => (ele % 2 == 1 ? true : false));

console.log({ result });
