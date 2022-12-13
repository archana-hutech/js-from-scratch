//TDZ : temporal dead zone is the zone/scope/time between hoisting the let and const varible till it's assignmened with a value
//Script scope
// console.log({ a });
// var a = 100;

// console.log({ b });

// console.log({ c });

// let b = 200;
// const c = 300;

// ****************************************************************************************

// function getA() {
//   console.log("hello");
//   console.log({ a });
//   console.log({ b });
//   var a;
//   let b;
// }
// getA();

let a;
const aa = 100;
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
a = 100;

function getA(c) {
  let b;
  console.log("hello");
  console.log("hello");
  console.log("hello");
  console.log("hello", c);
  console.log("hello");
  console.log("hello");
  b = 100;
}

getA(11);
