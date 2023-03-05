// Normal function
// console.log(getSquare);
// function getSquare(n) {
//   let sq = n * n;
//   return sq;
// }
// console.log(getSquare(2));

//Arrow function
// console.log(getSquareVariable);
// var getSquareVariable = (n) => {
//   let sq = n * n;
//   return sq;
// };
// console.log(getSquareVariable(2));

// *************************************************Higher order function
//function either return a function or receives function as parameter or both

// a)***********************************return a function
// function ATM() {
//   const accN = prompt("Enter Account Number");
//   return (accN) => {
//     console.log({ accN });
//   };
// }

// const gotAccNum = ATM();
// console.log(gotAccNum);
// console.log(gotAccNum(10));

// b)*******************************recieve a function
// function ATM(requestedAmount, canWithdraw) {
//   if (canWithdraw(requestedAmount)) {
//     console.log("withdraw");
//   } else {
//     console.log("Can't withdraw");
//   }
// }

// console.log(ATM(1000, canWithdraw));

// function canWithdraw(reqAmt) {
//   const accBal = 2000;
//   //get account bal
//   return reqAmt <= accBal;
// }

//*****************************************CLOSURE
// function ATM(num) {
//   return () => {
//     console.log({ num });
//   };
// }

// const gotAccNum = ATM(1000);
// console.log(gotAccNum);
// console.log(gotAccNum());
