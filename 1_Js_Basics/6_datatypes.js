// Numbers
// String
// Boolean
// Object
// null
// undefined

var a = 100;
console.log({ a }, typeof a);
a = "Archana";
console.log({ a }, typeof a);
a = true;
console.log({ a }, typeof a);
a = [1, 2, 3, 4];
console.log({ a }, typeof a);
a = { name: "Archana" };
console.log({ a }, typeof a);
var b;
console.log({ b }, typeof b);
var c = null;
console.log({ c }, typeof c);
//
console.log(typeof NaN);
//
console.log(isNaN(10)); //false
//
console.log(isNaN("10")); // false
//
console.log(isNaN("A10")); //true
//
console.log(isNaN("Archana")); //true
