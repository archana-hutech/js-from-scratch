let arr1 = [1, 2, [3, [4, [5]]]];

function flat(arr = [], maxLevel = 1, currentLevel = 1, result = []) {
  for (const element of arr) {
    if (Array.isArray(element) && currentLevel <= maxLevel) {
      flat(element, maxLevel, currentLevel + 1, result);
    } else {
      result.push(element);
    }
  }
  return result;
}

Array.prototype.myFlat = function (maxLevel = 1) {
  return flat(this, maxLevel);
};

console.log(flat(arr1, 2));
