// ****************************************************************************************

// console.log(a);
// var a = 100;

// function getA() {
//   console.log(a);
// }
// getA();
//op: undef, 100

// ****************************************************************************************

//NOTE: function at the time of hoisting
// getA();
// console.log(getA);

// function getA() {
//   console.log("Hello");
// }

// ****************************************************************************************

//NOTE: nested function
// var a = 1000;
// function getA() {
//   var a = 100;
//   getB();
//   function getB() {
//     var a = 10;
//     getC();
//     function getC() {
//       var a = 1;
//       console.log("getC destroyed", a);
//     }
//     console.log("getB destroyed", a);
//   }
//   console.log("getA destroyed", a);
// }
// getA();
// console.log("At last Line");

// ****************************************************************************************

//NOTE: nested function
// var a = 1000;
// function getA() {
//   getB();
//   function getB() {
//     console.log("getB destroyed", a);
//   }
//   console.log("getA destroyed", a);
// }
// getA();
// console.log("At last Line");

// ****************************************************************************************
//NOTE: Arrow function in hoisting
// console.log(wishMe);
// var wishMe = () => {
//   console.log("Hello");
// };
// var a = 100;
// console.log({ a });
// a = wishMe();
// console.log({ a });
// console.log(wishMe());
