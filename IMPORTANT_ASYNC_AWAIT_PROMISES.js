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
    return a + b;
  }, 2000);
}

function addTwoPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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

// What is asynchronous code/function

// Sync vs async code/functions

// Problem with async code/function

// How to overcome async execution problem using callback function: before this understand below👇👇👇👇

// What is callback function and how it works?

// Drawback of callback function 👇👇👇👇

// Callback code execution in out of control of the programmer.

// PYRAMID OF DOOM(readability, maitainability and debugging issue) causes callback hell

// How to overcome the drabcaks of callback function using Promises: before this understand below👇👇👇👇

// async and await keyword and uses

// What is promise function + it's states

// Creation of promise function + resolve and reject(Promise constructor)

// Handle promise with .then

// promise chaining (.then)

// Incorrect chaining of .then() handlers(.then({.then({.then})}))

// Correct chaining of .then() handlers  .then().then().then

// .then, .catch  and .finally

// .catch in each promises blocks(not available for .finally)

// Handle promise with await

// how await improves code readability and improves clean codes + examples

//  all available promise methods

// Promise.all

// Promise.allSettled

// Promise.any

// Promise.race

// how promise methods are improving the speed and efficiency in executing asyn code when compared to promise chaing(.then) and await
