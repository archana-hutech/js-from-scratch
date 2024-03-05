// ****************************************************************************************

// const { debug } = require("console");

// const { log } = require("console");

// console.log(asq1);
// var asq1 = 2 * 2;
// function agetSq(n) {
//   var asq1 = n ** 2;
//   return asq1;
// }

// var asq2 = agetSq(asq1);
// var asq3 = agetSq(10);
// console.log({ asq1, asq2, asq3 });

// ****************************************************************************************
// let ele = 10;
// let lara = 11;
// const a = () => {
//   console.log(ele); // 10, 11
//   console.log(lara);
// };
// a();

// console.log(x);        // undefined 2
// {
//   var x = 2;
//   {
//     let x = 5;
//   }
//   console.log(x);
// }

// let x = 10; //ReferenceError: Cannot access 'x' before initialization
// {
//   console.log(x);
//   let x = 20;
//   console.log(x);
// }

function pyramid(height) {
  // Write your code below this line
  for (let i = 0; i < height; i++) {
    let spaces = "";
    let blocks = "";

    // Add spaces
    for (let j = 0; j < height - i - 1; j++) {
      spaces += " ";
    }

    // Add blocks
    for (let k = 0; k < i + 1; k++) {
      blocks += "#";
    }

    console.log(spaces + blocks);
  }
}
// pyramid(4);
var b = 100;
function varScoping() {
  var x = 1;
  if (true) {
    var x = 2;

    console.log(x);
  }

  console.log(x);
}
// varScoping();

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x);
  }

  console.log(x);
}
// letScoping();

// let x = 10;
// {
//   console.log(x);
//   let x = 20;
//   console.log(x);
// }

// var c = 100;
// function fyi() {
//   var c = 30;
//   console.log(window.c);
//   window.c = 20;
// }
// fyi();
// console.log(c);

for (var i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
    i = i + 1;
  }, i * 1000);
}
console.log("outside: ", i);
if (i < 10) i = 10;

// let a;
// a = 4;
// console.log(a);

var a = 7;
console.log(a);
