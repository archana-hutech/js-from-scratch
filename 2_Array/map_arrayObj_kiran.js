const employees = [
  {
    name: "Kiran",
    id: 101,
    dept: "Backend",
    salary: 20000,
  },
  {
    name: "Archana",
    id: 101,
    dept: "Backend",
    salary: 27000,
  },
  {
    name: "Ekta",
    id: 101,
    dept: "Frontend",
    salary: 23000,
  },
  {
    name: "Lakshmi",
    id: 101,
    dept: "UX",
    salary: 20000,
  },
  {
    name: "Yuv",
    id: 101,
    dept: "Testing",
    salary: 15000,
  },
  {
    name: "Anu",
    id: 101,
    dept: "Frontend",
    salary: 10000,
  },
];

var result = employees.map((emp) => {
  return { ...emp, salary: emp.salary + 200 };
});

console.log({ result });
