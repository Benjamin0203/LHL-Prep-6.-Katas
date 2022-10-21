const repeatNumbers = function(data) {
  // Put your solution here
  let finalArray = [];
  for (let inputArray of data) {
    let outputArray = [];
    for (let i = 0; i < inputArray[1]; i ++) {
      outputArray.push(inputArray[0]);
    }
    
    const outputString = outputArray.join('');
    finalArray.push(outputString);
  }
  return finalArray.join(',');
  
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));