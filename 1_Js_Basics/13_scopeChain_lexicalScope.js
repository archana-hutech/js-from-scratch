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

const greeting = () => {
  console.log("hi!");
};

greeting();

setTimeout(function wakeup() {
  console.log("I'm awake!");
}, 1000);

console.log("hi again!");
