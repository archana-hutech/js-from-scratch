// ****************************************************************************************

/* NOTE: nested function */
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

/*  NOTE: nested function */
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

var a = 100
function getA(){
    console.log(a)
    var a = 200
}
console.log(a)
getA()
console.log(a)