//0) what if function and variable has the same name and u try to log it
//1)function has more precedence than variable if the variable is not assigned with value above the function usage(log)
//2)if the variable is assigned with a value before usage then variable has more precedence

// ****************************************************************************************

var getA;

function getA() {
  console.log("OK");
}

getA = 100;
console.log(getA);
