// const person = {
//   name: "Paul Knulst",
//   role: "Tech Lead",
//   address: {
//     street: "Blogstreet",
//     city: "Anytown",
//     country: "Germany",
//   },
// };

// const {
//   name,
//   role,
//   address: { city, ...address },
// } = person;

// console.log(name); // Output: Paul Knulst
// console.log(role); // Output: Tech Lead
// console.log(city); // Output: Anytown
// console.log(address); //{ street: 'Blogstreet', country: 'Germany' }

const car = {
  brand: "Tayota",
  color: "black",
  engineType: "automatic",
};
const { brand, color } = car;
console.log(brand, color);

//assigning variable to the extracted element
const freecodeCamp = {
  frontend: "React",
  backend: "Node",
  database: "mangoDb",
};
const { frontend: courseOne, backend: couseTwo } = freecodeCamp;
console.log(courseOne, couseTwo);

//Destructuring With Default Values
const person = {
  name: "Paul Knulst",
  role: "Tech Lead",
};

const { name, role, address = "Unknown" } = person;

console.log(name); // Output: Paul Knulst
console.log(role); // Output: Tech Lead
console.log(address); // Output: Unknown
