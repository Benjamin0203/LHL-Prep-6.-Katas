const conditionalSum = function(values, condition) {
  // Your code here
  if (values === []) {
    return 0;
  }
  else if (condition === "even") {
    let evenSum = 0;
    for (let number of values) {
      if (number % 2 === 0) {
        evenSum += number;
      }
    }
    return evenSum;
  }
  else if (condition === "odd") {
    let oddSum = 0;
    for (let number of values) {
      if (number % 2 === 1) {
        oddSum += number;
      }
    }
    return oddSum;
  }
  else {
    return "Wrong Input";
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));