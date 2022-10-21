const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let output = {};
 
  // while (Math.floor(change / 2000) > 0) {
  //   count ++;
  //   change = change - 2000;
  // }

  if (Math.floor(change / 2000) > 0) {   
    output.twentyDollar = Math.floor(change / 2000);
    change = change - 2000 * (Math.floor(change / 2000));
  }

  if (Math.floor(change / 1000) > 0) {
    output.tenDollar = Math.floor(change / 1000); 
    change = change - 1000 * (Math.floor(change / 1000));  
  }

  if (Math.floor(change / 500) > 0) {
    output.fiveDollar = Math.floor(change / 500); 
    change = change - 500 * (Math.floor(change / 500));  
  }

  if (Math.floor(change / 200) > 0) {   
    output.twoDollar = Math.floor(change / 200);
    change = change - 200 * (Math.floor(change / 200));
  }

  if (Math.floor(change / 100) > 0) {
    output.oneDollar = Math.floor(change / 100); 
    change = change - 100 * (Math.floor(change / 100));  
  }

  if (Math.floor(change / 25) > 0) {
    output.quarter = Math.floor(change / 25); 
    change = change - 25 * (Math.floor(change / 25));  
  }

  if (Math.floor(change / 10) > 0) {   
    output.dime = Math.floor(change / 10);
    change = change - 10 * (Math.floor(change / 10));
  }

  if (Math.floor(change / 5) > 0) {
    output.nickel = Math.floor(change / 5); 
    change = change - 5 * (Math.floor(change / 5));  
  }

  if (Math.floor(change / 1) > 0) {
    output.penny = Math.floor(change / 1); 
    change = change - 1 * (Math.floor(change / 1));  
  }
  return output;
};

console.log(calculateChange(2000, 5000));
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));