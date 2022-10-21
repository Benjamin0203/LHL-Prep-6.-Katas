const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  for (let letter of data) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      count ++;
    }
  }
return count;

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));