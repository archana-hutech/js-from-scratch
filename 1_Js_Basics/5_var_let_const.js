// ******************************************VAR**********************************************

//var can be accessed from anywhere if it declared in global scope
//can be redeclared and re-initialized
// var a = 100;
// console.log({ a });
// var a = 200;
// console.log({ a });

// function setA() {
//   a = 50;
//   console.log({ function: a });
// }

// setA();
// console.log({ a });

// ******************************************LET**********************************************

//let can be accessed only in its block and from anywhere if its declared in
// global scope and assigned value before access
//can't be redeclared and can be re-initialized
// let a = 100;
// console.log({ a });
// // let a = 200; //throws error

// function setA() {
//   let a = 50;
//   console.log({ function: a });
// }
// setA();
// console.log({ a });

// ******************************************CONST**********************************************

//const in gloal scope can be accessed from anywhere
//can't be redeclared
//can't be re-initialized

// const PI = 3.1415;
// // PI = 3.15;   //throw error

// console.log({ PI });

// ******************************************CONST**********************************************

var data = 100;
console.log({ data });
data = "Archana";
console.log({ data });
data = false;
console.log({ data });
data = [1, 2, 4];
console.log({ data });
data = { name: "Archana" };
console.log({ data });
