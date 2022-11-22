var a = 10;
function getA(){
    console.log(a);   // undefined (2)
    var a = 100;
    console.log(a);   // 100    (3)
}
console.log(a);       // 10 (1 exe)
getA();
console.log(a);       // 10 (4)

