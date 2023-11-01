const employees = [
  {
    emp_name: "John Doe",
    emp_id: 101,
    age: 28,
    city: "New York",
    dept: "Sales",
    salary: 60000,
  },
  {
    emp_name: "Alice Smith",
    emp_id: 102,
    age: 35,
    city: "Los Angeles",
    dept: "Marketing",
    salary: 70000,
  },
  {
    emp_name: "Bob Johnson",
    emp_id: 103,
    age: 30,
    city: "Chicago",
    dept: "Engineering",
    salary: 80000,
  },
  {
    emp_name: "Sara Williams",
    emp_id: 104,
    age: 32,
    city: "Houston",
    dept: "Finance",
    salary: 75000,
  },
  {
    emp_name: "Michael Brown",
    emp_id: 105,
    age: 29,
    city: "San Francisco",
    dept: "HR",
    salary: 650000,
  },
];

//   *********************** RETURN BOOLEAN FROM REDUCE *********************
// var hasEmployee = employees.some((e) => e.salary > 70000); //using array some method
// console.log({ hasEmployee });

// var hasEmployee = employees.reduce((result, curr) => {
//   return result || curr?.salary > 70000;
// }, false);

// console.log({ hasEmployee });

//   *********************** RETURN NUMBER FROM REDUCE ********************
// var salarySum = employees.reduce((result, curr) => {
//   return result + curr?.salary;
// }, 0);
// console.log({ salarySum });

// var salarySum2 = employees.reduce((result, curr) => {
//   let sum = result + curr?.salary;
//   return sum;
// }, 0);

// console.log({ salarySum2 });

//   *********************** RETURN STRING FROM REDUCE ********************
// var hasSan = employees.reduce((result, curr) => {
//   if (!result && curr.city === "San Francisco") {
//     return curr.city; //"San Francisco"
//   } else return result;
// }, "");

// console.log({ hasSan });

//   *********************** RETURN ARRAY  FROM REDUCE as MAP *******************
// var newMapEmployees = employees.map((e) => ({ ...e, bonus: e.salary * 0.1 }));
// console.log({ newMapEmployees });

// var newReduceEmployeesSpread = employees.reduce((result, curr) => {
//   return [...result, { ...curr, bonus: curr.salary * 0.1 }];
// }, []);
// console.log({ newReduceEmployeesSpread });

// var newReduceEmployeesPush = employees.reduce((result, curr) => {
//   result.push({ ...curr, bonus: curr.salary * 0.1 });
//   return result;
// }, []);
// console.log({ newReduceEmployeesPush });

//   *********************** RETURN ARRAY  FROM REDUCE as FILTER *******************
// const lessAgeFilter = employees.filter((e) => e?.age < 30);
// console.log({ lessAgeFilter });

const lessAgeReduce = employees.reduce((result, curr) => {
  if (curr?.age < 30) return [...result, curr];
  else {
    console.log({ result });
    return result;
  }
}, []);

//   *********************** RETURN OBJECT FROM REDUCE ********************
// on = {};
// ob.name = "ksijis";
// ob["name"] = "sjod";
// ob = { ...ob, name: "sjod" };
