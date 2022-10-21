const sumLargestNumbers = function(data) {
  // Put your solution here
  let maxNumber = data[0];
  for (let number of data) {
    if(maxNumber < number) {
      maxNumber = number;
    }
  }
  let secondNumber = data[0];

  for (let number of data) {
    if (number === maxNumber) {
      number = maxNumber;
      break;
    }
    else if (number > secondNumber && number < maxNumber) {
      secondNumber = number;
    }
  }

  return maxNumber + secondNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([10, 10, 10, 5, 6, 3]));