//event loop come into picture when js program includes asynchronous code
console.log("hello1");
console.log("hello2");
console.log("hello3");
waitFiveSec();
console.log("hello4");
console.log("hello5");
console.log("hello6");
console.log("hello4");
console.log("hello5");
console.log("hello6");
console.log("hello4");
console.log("hello5");
console.log("hello6");
console.log("hello4");
console.log("hello5");
console.log("hello6");

function waitFiveSec() {
  setTimeout(() => {
    console.log("time over");
  }, 5000);
}
