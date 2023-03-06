// const typeExample = [
//   1,
//   2.2,
//   "Three",
//   { val: "Eight" },
//   [9, 9, 9],
//   true,
//   undefined,
//   null,
//   NaN,
// ];
// console.log({ typeExample });

const flatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ***********************************************ARRAY MAP *********************************
// Syntax : arr.map((ele, index, wholeArray)=>{
//     //body
// })

// var num1 = flatNumbers.map((ele, i, wa) => {
//   console.log({ ele, i, wa });
// });
// console.log({ num1 });

// ********************************************************************************************
//Double the array elements
var num1 = flatNumbers.map((ele) => 2 * ele);
console.log({ num1 });
