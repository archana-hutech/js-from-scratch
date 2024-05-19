function addTwoSync(a, b) {
  return a + b;
}

function addTwoAsync(a, b) {
  setTimeout(() => {
    return a + b;
  }, 2000);
}

function addTwoCallback(a, b, fn) {
  setTimeout(() => {
    fn(a + b);
  }, 2000);
}

function addTwoPromise(a, b, rejectIt = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejectIt) reject(`Rejected on request for a=${a} and b=${b}`);
      resolve(a + b);
    }, 2000);
  });
}

async function APISimulator(url, req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (req?.body?.success)
        resolve({
          data: { ...req?.body, list: [] },
          statusCode: 200,
        });
      //{ status:"fulfilled", value: aboveValue}
      else
        reject({
          statusCode: 500,
          message: "Internal server errorrrrrr.........",
        });
      //{ status:"reject", value: aboveValue}
    }, req?.body?.ms || Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
  });
}

// What is synchronous code/function
// Synchronous code in JavaScript is code that executes in a sequential manner,
// meaning that each line of code is executed one after the other.
// Example-1
function greet(params) {
  return "Hello";
}
// console.log(greet());

// Example-2
function mySyncExecution() {
  const a = 100;
  console.log({ a });
  let funresult = greet();
  console.log({ funresult });
  const b = 100;
  console.log({ b });
}
// mySyncExecution();

// What is asynchronous code/function
// Asynchronous code is code that can run independently of the main program flow.

// Example-1
function myExecution2() {
  const a = 100;
  console.log({ a });
  setTimeout(() => {
    console.log("processing..........");
    console.log("processing..........");
    console.log("Executed..........");
  }, 3000);
  let greetResult = greet();
  console.log({ greetResult });
  const b = 100;
  console.log({ b });
}
// myExecution2();

// How to overcome async execution problem using callback function: before this understand below👇👇👇👇

// What is callback function and how it works?
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some task.
function addTwo(a, b, fn) {
  setTimeout(() => {
    const sum = a + b;
    fn(sum);
  }, 2000);
}

function workWithSum(sum) {
  console.log("Just logging sum :", sum);
}

// addTwo(10, 20, workWithSum);

// Drawback of callback function 👇👇👇👇
// 1. Callback code execution in out of control of the programmer.
// 2. Callback hell:- nesting of calls results PYRAMID OF DOOM that makes code unreadable, non-maitainability and difficult to debug.

// ----------------------Ticket booking callback hell Example start

function checkSeatAvail(seatNo, fn) {
  console.log("Checking seat availability.....");
  setTimeout(() => {
    console.log(`seatNo ${seatNo} is available(true)`);
    fn(true);
  }, 2000);
}

function blockSeat(seatNo, fn) {
  setTimeout(() => {
    console.log(`seatNo ${seatNo} is blocked(true) for booking`);
    fn(true);
  }, 2000);
}

function deductWallet(seatNo, amt, fn) {
  setTimeout(() => {
    console.log(
      `Rs.${amt} deducted from your wallet for booking seatNo: ${seatNo}`
    );
    fn(true, "TXN0001");
  }, 2000);
}

const seatNo = "SEAT101";
const amount = 1200;
// checkSeatAvail(seatNo, (isAvail) => {
//   if (isAvail) {
//     blockSeat(seatNo, (isBlocked) => {
//       if (isBlocked) {
//         deductWallet(seatNo, amount, (confirmed, txnNo) => {
//           if (confirmed) {
//             console.log(
//               `ticket booking confirmed, seatNo: ${seatNo}, transactionId: ${txnNo}`
//             );
//           } else {
//             console.log("Payment failed");
//           }
//         });
//       } else {
//         console.log("Ticket is not available");
//       }
//     });
//   } else {
//     console.log(`SeatNo: ${seatNo} not available currently`);
//   }
// });

// ----------------------Ticket booking callback hell Example end

// ----------------------add two number callback example start
// sum:- [10, 20, 30, 40]
// addTwoCallback(10, 20, (answer1) => {
//   console.log({ answer1 });
//   addTwoCallback(answer1, 30, (answer2) => {
//     console.log({ answer2 });
//     addTwoCallback(answer2, 40, (finalAnswer) => {
//       console.log({ finalAnswer });
//     });
//   });
// });

// add two number callback example end

// How to overcome the drabcaks of callback function using Promises: before this understand below👇👇👇👇
// async and await keyword and uses
// asyc keyword helps to use await for a process inside a function
// await used to wait for a async process till its execution completes

// What is promise function + it's states
// Promise is an object that represent the eventual completion(success/failure) of an ASYNCHRONOUS operation.
// states: pending, fullfilled, reject

//Creation of promise function + resolve and reject(Promise constructor)
// function addTwoPromise(a, b) {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         resolve(a + b);
//       }, 2000);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// promise result can be handled with .then and await
// Handle promise with .then
// addTwoPromise(10, 20).then((answer1) => console.log({ answer1 }));

// promise chaining (.then)

//----------------------- Incorrect chaining of .then() handlers(.then({.then({.then})}))
// addTwoPromise(10, 20).then((answer1) => {
//   addTwoPromise(answer1, 30).then((answer2) => {
//     addTwoPromise(answer2, 40).then((finalAnswer) => {
//       console.log({ finalAnswer });
//     });
//   });
// });

//----------------------- Proper chaining of .then() handlers  .then().then().then()
// addTwoPromise(10, 20)
//   .then((answer1) => {
//     return addTwoPromise(answer1, 30);
//   })
//   .then((answer2) => {
//     return addTwoPromise(answer2, 40);
//   })
//   .then((finalAnswer) => {
//     console.log({ finalAnswer });
//   });

//------------------------- .then not returning promise
// addTwoPromise(10, 20)
//   .then((answer1) => {
//     return answer1 + 30;
//   })
//   .then((answer2) => {
//     return answer2 + 40;
//   })
//   .then((finalAnswer) => {
//     console.log({ finalAnswer });
//   });

//--------------------------- .then, .catch  and .finally
// addTwoPromise(10, 20)
//   .then((answer1) => {
//     throw new Error("errrrr..");
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally ALWAYS............");
//   });

//-------------------- .catch in each promises blocks(not available for .finally)
// addTwoPromise(10, 20)
//   .then((answer1) => {
//     console.log({ answer1 });
//     return addTwoPromise(answer1, 30, true);
//   })
//   .catch((err) => {
//     return Promise.reject(err);
//   })
//   .then((answer2) => {
//     console.log({ answer2 });
//     return addTwoPromise(answer2, 40);
//   })
//   .catch((err) => {
//     return Promise.reject(err);
//   })
//   .then((finalAnswer) => {
//     console.log({ finalAnswer });
//   })
//   .catch((err) => {
//     return Promise.reject(err);
//   })
//   .finally(() => {
//     console.log("Finally ALWAYS............");
//   });

// ---------------------------------------------------------------------------------
// -------------promise handleing with await + error handling-----------------

// async function GLOBAL_EXE2(params) {
//   try {
//     const answer1 = await addTwoPromise(10, 20, false);
//     console.log({ answer1 });
//     const answer2 = await addTwoPromise(answer1, 30, false);
//     console.log({ answer2 });
//     const finalAnswer = await addTwoPromise(answer2, 40, false);
//     console.log({ finalAnswer });
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Finally...........");
//   }
// }

// GLOBAL_EXE2();

/*******************PROMISE USAGE*******************/

// ___________________________all(),allSettled(),any(), race()___________________
async function GLOBAL_EXE3() {
  /********* with promise await**/
  // console.time("awaitTime");
  // const res1 = await APISimulator("https://api.com/api/customer", {
  //   body: { success: true, custId: 101, ms: 1000 },
  // });
  // const customerDetails = res1?.data;
  // const res2 = await APISimulator("https://api.com/api/customer/cart", {
  //   body: { success: true, custId: 101, ms: 1000 },
  // });
  // const customerCart = res2?.data;
  // const res3 = await APISimulator("https://api.com/api/customer/wishlist", {
  //   body: { success: true, custId: 101, ms: 1000 },
  // });
  // const customerWishlist = res3?.data;
  // const res4 = await APISimulator("https://api.com/api/customer/order", {
  //   body: { success: true, custId: 101, ms: 1000 },
  // });
  // const customerOrders = res4?.data;
  // console.log({
  //   customerDetails,
  //   customerCart,
  //   customerWishlist,
  //   customerOrders,
  // });
  // console.timeLog("awaitTime");
  //
  //
  //
  //
  //
  //
  //
  /********* with promise.all()**/
  // promise.all takes an array of promises as an input and returns a single Promise.
  // returns fulfilled when all of the input promises fulfills
  // and rejects when any of the input promises rejects
  // console.time("allTime");
  // const [
  //   { data: customerDetails } = {},
  //   { data: customerCart } = {},
  //   { data: customerWishlist } = {},
  //   { data: customerOrders } = {},
  // ] = await Promise.all([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/cart", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/wishlist", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/orders", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  // ]);
  // console.log({
  //   customerDetails,
  //   customerCart,
  //   customerWishlist,
  //   customerOrders,
  // });
  // console.timeLog("allTime");
  // ______________________________________________________________________allSettled()
  // promise.allSettled takes an array of promises as an input and returns a single Promise.
  // returns all the promise results regardless of its fulfilled or rejected(just setle)
  // output of each array of promise looks like below:
  // resolved promise has status:"fulfilled" and  value:"{success value returned from async operation}"
  // reject promise has status:"rejected", reason:"{error value returned from async operation}"
  // refer the logs of below examples
  //
  // const resolveFormat = await Promise.allSettled([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  // ]);
  // console.log({ resolveFormat });
  //
  // const rejectFormat = await Promise.allSettled([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: false, custId: 101, ms: 1000 },
  //   }),
  // ]);
  // console.log({ rejectFormat });
  //
  // ----------------how to use allSettled(make async code execution speed)
  // console.time("allSettleTime");
  // const [
  //   {
  //     reason: fail1 = null,
  //     status: customerDetailsStatus,
  //     value: customerDetails = null,
  //   },
  //   {
  //     reason: fail2 = null,
  //     status: customerCartStatus,
  //     value: customerCart = null,
  //   },
  //   {
  //     reason: fail3 = null,
  //     status: customerWishlistStatus,
  //     value: customerWishlist = null,
  //   },
  //   {
  //     reason: fail4 = null,
  //     status: customerOrdersStatus,
  //     value: customerOrders = null,
  //   },
  // ] = await Promise.allSettled([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/cart", {
  //     body: { success: false, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/wishlist", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/orders", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  // ]);
  // console.log({
  //   fail1,
  //   customerDetailsStatus,
  //   customerDetails,
  //   fail2,
  //   customerCartStatus,
  //   customerCart,
  //   fail3,
  //   customerWishlistStatus,
  //   customerWishlist,
  //   fail4,
  //   customerOrdersStatus,
  //   customerOrders,
  // });
  // console.timeLog("allSettleTime");
  //
  //you can use it for independent DB query execution(just a PSEUDO code example)
  // const orderId="ABCD"
  // const dbResults = await Promise.allSettled([
  //   customerOrders.findOnel(orderId),
  //   orderPayment.find(orderId),
  //   orderAddress.findOne(orderId),
  // ]);
  //
  // const normalCall = await APISimulator("https://api.com/api/customer", {
  //   body: { success: true, custId: 101, ms: 1000 },
  // });
  // console.log({ normalCall });
  // ---------------NotDeStructured Result
  // const NotDeStructured = await Promise.allSettled([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/cart", {
  //     body: { success: false, custId: 101, ms: 1000 },
  //   }),
  // ]);
  // console.log({ NotDeStructured });
  //
  // __________________________any()- ANY resolved promise;
  // promise.any takes an array of promises as an input and returns a single Promise.
  // returns fulfilled any one of the promise fulfilled(with this first fulfillment value)
  // it rejects when all of the input's promises reject (including when an empty iterable is passed)
  //
  // const anyOneFirstResolvedPromise = await Promise.any([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: true, custId: 101, ms: 1000 },
  //   }),
  //   APISimulator("https://api.com/api/customer/cart", {
  //     body: { success: true, custId: 102, ms: 800 },
  //   }),
  //   APISimulator("https://api.com/api/customer/wishlist", {
  //     body: { success: true, custId: 103, ms: 200 },
  //   }),
  //   APISimulator("https://api.com/api/customer/orders", {
  //     body: { success: true, custId: 104, ms: 400 },
  //   }),
  // ]);
  // console.log({ anyOneFirstResolvedPromise });
  //
  //---------what is:  rejects including when an empty iterable is passed example
  // const emptyPromiseFailed = await Promise.any([]);
  // output: Uncaught (in promise) AggregateError: All promises were rejected
  //
  //
  // ______________________________race() - First settled
  // promise.any takes an array of promises as an input and returns a single Promise.
  // This returns the eventual state of the first promise that settles(regardless of fulfilled or rejected).
  //
  // const winnerOfThePromiseRaceResolvedRejected = await Promise.race([
  //   APISimulator("https://api.com/api/customer", {
  //     body: { success: true, custId: 101, ms: 600 },
  //   }),
  //   APISimulator("https://api.com/api/customer/cart", {
  //     body: { success: true, custId: 102, ms: 800 },
  //   }),
  //   APISimulator("https://api.com/api/customer/wishlist", {
  //     body: { success: false, custId: 103, ms: 700 },
  //   }),
  //   APISimulator("https://api.com/api/customer/orders", {
  //     body: { success: true, custId: 104, ms: 900 },
  //   }),
  // ]);
  // console.log({
  //   winnerOfThePromiseRaceResolvedRejected,
  // });
  //
  //
  // -----------Promise.withResolvers()
  // Promise.withResolvers(): Just know this method and little bit of definition
  // Since March 2024, this feature works across the latest devices and browser versions.
  // The Promise.withResolvers() static method returns an object containing a new Promise object and two functions to resolve or reject it,
  // corresponding to the two parameters passed to the executor of the Promise() constructor.
}

GLOBAL_EXE3();

/**********************************************************************************************************/
