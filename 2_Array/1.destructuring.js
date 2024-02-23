// const col1 = ["red", "yellow", "blue", "green", "orange"]; //method-1

// const col2 = new Array(3); //methos-2
// col2[0] = "red";
// col2[1] = "yellow";
// col2[2] = "blue";

// const col1 = ["red", "yellow", "blue", "green", "orange"];
// const [first, second] = col1;
// console.log(first, second);

// const edibles = ["food", "fruits"];

// let [positionOne, positionTwo] = edibles;
// console.log(positionOne, positionTwo);

//swap variables using destructuring

//normal
// const col1 = ["red", "yellow", "blue", "green", "orange"];
// let [first, second] = col1;
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// console.log(col1);

// const edibles = ["foods", "fruits"]; //does not mutate the original array
// let [positionOne, positionTwo] = edibles;
// [positionOne, positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);
// console.log(edibles);

//If want to mutate the original array
const edibles = ["foods", "fruits"];
[edibles[0], edibles[1]] = [edibles[1], edibles[0]];
console.log(edibles);

const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
