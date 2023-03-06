const employees = [
  {
    name: "Kiran",
    id: 101,
    dept: "Backend",
    salary: 20000,
  },
  {
    name: "Archana",
    id: 102,
    dept: "Backend",
    salary: 27000,
  },
  {
    name: "Ekta",
    id: 103,
    dept: "Frontend",
    salary: 23000,
  },
  {
    name: "Lakshmi",
    id: 104,
    dept: "UX",
    salary: 20000,
  },
  {
    name: "Yuv",
    id: 105,
    dept: "Testing",
    salary: 15000,
  },
  {
    name: "Anu",
    id: 106,
    dept: "Frontend",
    salary: 10000,
  },
];
//ES5
var result = employees.filter((e) => {
  if (e.id == 104) return true;
  else return false;
});

var result = employees.filter((e) => {
  return e.id == 104 ? true : false;
});

var result = employees.filter((e) => {
  return e.id == 104;
});

//ES6
var result = employees.filter((e) => e.id == 104);
console.log({ result });
