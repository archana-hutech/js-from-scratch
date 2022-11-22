console.log(asq1);
var asq1 = 2 * 2;
function agetSq(n) {
  var asq1 = n ** 2;
  return asq1;
}

var asq2 = agetSq(asq1);
var asq3 = agetSq(10);
console.log({ asq1, asq2, asq3 });
