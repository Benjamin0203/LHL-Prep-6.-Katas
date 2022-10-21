const generateBoard =  function(whiteQueen, blackQueen) {
  const board = 
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0]
    ];
  const whiteX = whiteQueen[0]
  const whiteY = whiteQueen[1]
  const blackX = blackQueen[0]
  const blackY = blackQueen[1]

  board[whiteX].splice(whiteY, 1, 1);
  board[blackX].splice(blackY, 1, 1);
  return board;
}


const queenThreat = function(board) {
  let positionArr = [];
  for (let i = 0; i < board.length; i ++) {
    let position = []
    for (let j = 0; j < board[i].length; j ++) {
      if (board[i][j] === 1) {
        position.push(i,j);
        positionArr.push(position);
      }
    }
  }
  // return positionArr;
  if (positionArr[0][0] === positionArr[1][1] && positionArr[0][1] === positionArr[1][0]) {
    return true;
  }
  else if (positionArr[0][0] === positionArr[1][0] || positionArr[0][1] === positionArr[1][1]) {
    return true;
  }
  else {
    return false;
  }

}


// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));