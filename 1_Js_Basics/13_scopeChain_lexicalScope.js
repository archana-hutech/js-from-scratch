//scope
// var b = 1000;
// function getSquare(a) {
//   let sq = a * a;
//   return sq;
// }

// function getCube(b) {
//   let cb = b ** 3;
//   return cb;
// }

// console.log(getSquare(2));
// console.log(getCube(5));

//scope chain

// function getA() {
//   let a = 100;
//   getB();
//   function getB() {
//     let b = 200;
//     function getC() {
//       let c = 300;
//       function getD() {
//         console.log({ c, b, a });
//       }
//     }
//   }
// }

//lexical chain

// console.log(getA());

// ________________________________________________________
// console.log(a);
// var a;
// ________________________________________________________
// console.log(a);
// let a;
// ________________________________________________________
// console.log(a);
// {
//   var a = 100;
// }
// console.log(a);
// ________________________________________________________
// console.log(a);
// {
//   let a = 100;
// }
// console.log(a);
// ________________________________________________________
// {
//   let a = 100; //check in which scope/context memory is created
// }
// ________________________________________________________
// {
//   var a = 100; //check in which scope/context memory is created
// }
// ________________________________________________________
// console.log(a);
// console.log(b);
// {
//   var a = 100;
//   {
//     var b = 200;
//     let a = 5;
//     console.log(a);
//   }
//   console.log(a);
//   console.log(b);
// }
// ________________________________________________________
// console.log(a);
// console.log(b);
// let a = 100;
// const b = 100;
// console.log(a);
// console.log(b);
// ________________________________________________________
// function varScoping() {
//   var a = 1;
//   if (true) {
//     var a = 2;
//     console.log(a);
//     console.log(b);
//     {
//       var b = 3;
//       console.log(b);
//     }
//     console.log(b);
//   }
//   console.log(b);
//   console.log(a);
// }
// varScoping();
// ________________________________________________________
// function letScoping() {
//   let a = 1;
//   if (true) {
//     let a = 2;
//     console.log(a);
//   }
//   console.log(a);
// }
// letScoping();
// ________________________________________________________
// var a = 100;
// function getA() {
//   var a = 200;
//   console.log(a, this.a);
// }
// getA();
// ________________________________________________________
// let a = 100;
// function getA() {
//   let a = 200;
//   console.log(a, this.a); //how to log outside a variable eben if local has a variable
// }
// getA();
// ________________________________________________________
// console.log(this === window);
// ________________________________________________________
// console.log("hello world");   //example for not interpreter/compiled language
// let a = 100;
// let a = 200;
// ________________________________________________________
// function getA() {
//   var a = 100;
//   if (a > 200) {
//     var b = 200;
//   }
//   console.log(a, b);
// }
// getA();
// ________________________________________________________
// function getA() {
//   var a = 100;
//   if (a < 200) {
//     var b = 200;
//   }
//   console.log(a, b);
// }
// getA();
// ________________________________________________________
// function getA() {
//   var a = 100;
//   if (a < 200) {
//     let b = 200;
//   }
//   console.log(a, b);
// }
// getA();
// ________________________________________________________
// function getA() {
//   var a = 100;
//   {
//     var b = 200;
//   }
//   console.log(a, b);
// }
// getA();
// ________________________________________________________
// function getA() {
//   var a = 100;
//   {
//     let b = 200;
//   }
//   console.log(a, b);
// }
// getA();

// ________________________________________________________
// var a = 100;
// function getA() {
//   console.log(a);
//   var a = 200;
// }
// console.log(a);
// getA();
// console.log(a);

// console.log(a);
// console.log(b);
// {
//   var a = 100;
//   {
//     var b = 200;
//     // console.log(a);
//     let a = 5;
//   }
//   console.log(a);
//   console.log(b);
// }

// function getValue() {
//   var a = (b = 5); // only a is in local scope b & c are in global scope
//   c = 300;
//   console.log(a, b, c); //5 5 300
// }
// getValue();
// console.log(c); //300
// console.log(b); //5
// console.log(a); //error a is not defined because function is destroyed

// function otherSport() {
//   function favoriteSport() {
//     console.log(sport);
//   }
//   const sport = "volleybal";
//   favoriteSport();
// }
// const sport = "basketball";
// otherSport();

// const greeting = () => {
//   console.log("hi!");
// };

// greeting();

// setTimeout(function wakeup() {
//   console.log("I'm awake!");
// }, 1000);

// console.log("hi again!");

// var a = 100;
// {
//   // console.log({ a, b }); //ReferenceError: b is not defined
//   var a = (b = 200);
//   console.log({ a, b });
// }
// console.log({ a, b });

//  console.log({ a, b }); //ReferenceError: b is not defined
// var a = (b = 300);
// console.log({ a, b });

// console.log({ a }); //{ a: undefined }
//  console.log({ b });   //ReferenceError: b is not defined
// var a = (b = 300);
// console.log({ a, b });

// var a = 200;
// {
//   // console.log({ a }); //ReferenceError: Cannot access 'a' before initialization
//   let a = 300;
//   console.log({ a });
// }
// console.log({ a });

// 1. does this create block scope
//2. what will be the output
// var a = 200; //{ a: 200 }{ a: 400 }{ a: 400 }
// {
//   console.log({ a });
//   var a = 400;
//   console.log({ a });
// }
// console.log({ a });

// function manipulateArray(arr) {
//   arr.push(5);
//   arr = [1];
//   return arr;
// }
// let list = [1, 2, 3, 4];
// manipulateArray(list);
// console.log(list);

// list = manipulateArray(list);
// console.log(list);

// function manipulateArray(arr) {: This declares a function named manipulateArray that takes an array arr as a parameter.
// arr.push(5);: This modifies the input array by adding the element 5 to the end of it.
// arr = [1];: This line creates a new array [1] and assigns it to the variable arr. However, this assignment only affects the local variable arr inside the function, not the original array passed as an argument.
// return arr;: The function returns the local variable arr, which now refers to the new array [1].
