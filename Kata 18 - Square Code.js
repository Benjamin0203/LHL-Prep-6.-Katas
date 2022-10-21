const squareCode = function(message) {
  // Put your solution here
  message = message.replace(/ /g, '');
  const column = Math.ceil(Math.sqrt(message.length));
  let messageArr = [];
  while (message !== '') {
    messageArr.push(message.slice(0,column));
    message = message.slice(column, message.length);
  }

  let squareString = '';
  for (let i = 0; i < messageArr[0].length; i ++) {
    squareString += messageArr[0][i];
    for (let j = 1; j < messageArr.length; j ++) {
      if (messageArr[j][i]) {
        squareString += messageArr[j][i];
      }
    }
    squareString += ' ';
  }
  return squareString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));