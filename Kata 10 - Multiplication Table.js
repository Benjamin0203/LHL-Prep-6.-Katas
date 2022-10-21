const multiplicationTable = function(maxValue) {
  // Your code here
  let result = '';
  let eachOutputArray = [];
  for (let i = 1; i <= maxValue; i ++) {
    for (let j = 1; j <= maxValue; j ++) {
      eachOutputArray.push(i * j);
    }
    result += eachOutputArray.join(" ") + "\n";
    eachOutputArray = [];
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));