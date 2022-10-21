const camelCase = function(input) {
  // Your code here
  const inputArray = input.split(' ');
  // return inputArray;
  let outputString = inputArray[0];
  for (let i = 1; i < inputArray.length; i ++) {
    let eachWord = inputArray[i];
    let newWord = eachWord[0].toUpperCase();
    for (let j = 1; j < eachWord.length; j ++) {
      newWord += eachWord[j];
    }
    outputString += newWord;
  }
  return outputString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));