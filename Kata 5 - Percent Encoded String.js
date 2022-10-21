const urlEncode = function(text) {
  // Put your solution here
  let newArr = [];
  for (let i = 0; i < text.length; i ++) {
    if (text[i] === " " && (i === 0 || i === text.length - 1)) {
      newArr.push('');
    } 
    else if (text[i] === " " && i !== 0 && i !== text.length - 1) {
      newArr.push("%20");
    }
    else {
      newArr.push(text[i]);   
    } 
  }
  return newArr.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));