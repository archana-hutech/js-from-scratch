const employees = [
  {
    name: "Kiran",
    id: 101,
    dept: "Backend",
    salary: 20000,
    age: 26,
  },
  {
    name: "Archana",
    id: 101,
    dept: "Backend",
    salary: 27000,
    age: 25,
  },
  {
    name: "Ekta",
    id: 101,
    dept: "Frontend",
    salary: 23000,
    age: 27,
  },
  {
    name: "Lakshmi",
    id: 101,
    dept: "UX",
    salary: 20000,
    age: 24,
  },
  {
    name: "Yuv",
    id: 101,
    dept: "Testing",
    salary: 15000,
    age: 32,
  },
  {
    name: "Anu",
    id: 101,
    dept: "Frontend",
    salary: 10000,
    age: 27,
  },
];

//all backend : sal+2500
var result = employees
  .filter((e) => e.dept === "Backend")
  .map((ep) => ({ ...ep, salary: ep.salary + 2500 }));
console.log({ result });
