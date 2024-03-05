// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function x() {
//   var a = 8;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// function x() {
//   var a = 8;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// z();

// function z() {
//   var b = 34;
//   function x() {
//     var a = 8;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function x() {
//   var i = 1; //local scope
//   setTimeout(function () {
//     // closure(x())
//     console.log(i);
//   }, 1000);
//   console.log("hi javascript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     //local scope : 6
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("javascript");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     //block scope:1 every time new copy i
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("javascript");
// }
// x();

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();

// function outermost() {
//   var b = 20;
//   function outer() {
//     var a = 10;
//     function inner() {
//       console.log(a, b);
//     }
//     return inner;
//   }
//   return outer;
// }
// var closed = outermost();
// closed();

// function fact(n) {
//   function f() {
//     if (n == 0 || n == 1) return 1;
//     else return n * fact(n - 1);
//   }
//   return f();
// }
// console.log(fact(4));

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function xyz() {
//   console.log("button clicked", ++count);
// });

//more secure with the help of closure
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}
attachEventListener();

let arr = [];
for (var i = 0; i < 3; i++) {
  arr[i] = function () {
    console.log("My value is:", i);
  };
}

arr[0]();
arr[1]();
arr[2]();
