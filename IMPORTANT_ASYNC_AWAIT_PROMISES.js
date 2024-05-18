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
        resolve({ data: { ...req?.body, list: [] }, statusCode: 200 });
      else
        reject({
          statusCode: 500,
          message: "Internal server error",
        });
    }, req?.body?.ms || Math.floor(Math.random() * (1000 - 500 + 1)) + 500);
  });
}

async function MyGlobalAsync() {
  //your codes here...
}

MyGlobalAsync();

// What is synchronous code/function
// Synchronous code in JavaScript is code that executes in a sequential manner, meaning that each line of code is executed one after the other.
// console.log(addTwoSync(10, 20));

// What is asynchronous code/function
// Asynchronous code in JavaScript is code that allows the program to continue running while waiting for an operation to complete.
// console.log(addTwoAsync(1, 20));

// Sync vs async code/functions
// dependent execution vs independent execution

// How to overcome async execution problem using callback function: before this understand below👇👇👇👇

// What is callback function and how it works?
// A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.

// Drawback of callback function 👇👇👇👇

// Callback code execution in out of control of the programmer.
// PYRAMID OF DOOM(readability, maitainability and debugging issue) causes callback hell
// [10, 20, 30, 40]
// addTwoCallback(10, 20, (answer1) => {
//   console.log({ answer1 });
//   addTwoCallback(answer1, 30, (answer2) => {
//     console.log({ answer2 });
//     addTwoCallback(answer2, 40, (finalAnswer) => {
//       console.log({ finalAnswer });
//     });
//   });
// });

// How to overcome the drabcaks of callback function using Promises: before this understand below👇👇👇👇

// async and await keyword and uses
// asyc keyword helps to use await for a process inside a function
// await  for a process till its execution completion

// What is promise function + it's states
// A JavaScript promise is an object representing the eventual completion or failure of an asynchronous operation.
// It can be used to handle the outcome of an asynchronous task,
// states: pending, fullfilled, reject

// Creation of promise function + resolve and reject(Promise constructor)
// function addTwoPromise(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// }

// Handle promise with .then
// addTwoPromise(10, 20).then((answer1) => console.log({ answer1 }));

// promise chaining (.then)

// Incorrect chaining of .then() handlers(.then({.then({.then})}))
// addTwoPromise(10, 20).then((answer1) => {
//   addTwoPromise(answer1, 30).then((answer2) => {
//     addTwoPromise(answer2, 40).then((finalAnswer) => {
//       console.log({ finalAnswer });
//     });
//   });
// });

// Proper chaining of .then() handlers  .then().then().then()
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

//not returning promise
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

// .then, .catch  and .finally
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

// .catch in each promises blocks(not available for .finally)
addTwoPromise(10, 20)
  .then((answer1) => {
    console.log({ answer1 });
    return addTwoPromise(answer1, 30, true);
  })
  .catch((err) => {
    return Promise.reject(err);
  })
  .then((answer2) => {
    console.log({ answer2 });
    return addTwoPromise(answer2, 40);
  })
  .catch((err) => {
    return Promise.reject(err);
  })
  .then((finalAnswer) => {
    console.log({ finalAnswer });
  })
  .catch((err) => {
    return Promise.reject(err);
  })
  .finally(() => {
    console.log("Finally ALWAYS............");
  });

// ---------------------------------------------------------------------------------
// Handle promise with await
// async function MyGlobalAsync2() {
//   const answer1 = await addTwoPromise(10, 20);
//   const answer2 = await addTwoPromise(answer1, 30);
//   const finalAnswer = await addTwoPromise(answer2, 40);
//   console.log({ finalAnswer });
// }
// MyGlobalAsync2();

// how await improves code readability and improves clean codes + examples

//  all available promise methods

// Promise.all

// Promise.allSettled

// Promise.any

// Promise.race

// how promise methods are improving the speed and efficiency in executing asyn code when compared to promise chaing(.then) and await
