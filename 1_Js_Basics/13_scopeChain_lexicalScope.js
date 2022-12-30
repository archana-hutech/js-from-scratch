//scope
// var b = 1000;
// function getSquare(a) {
//   let sq = a * a;
//   return sq;
// }

// function getCube(b) {
//   let cb = b ** 3;
//   return cb;
// }

// console.log(getSquare(2));
// console.log(getCube(5));

//scope chain

function getA() {
  let a = 100;
  function getB() {
    let b = 200;
    function getC() {
      let c = 300;
      function getD() {
        //log
      }
    }
  }
}

//lexical chain
