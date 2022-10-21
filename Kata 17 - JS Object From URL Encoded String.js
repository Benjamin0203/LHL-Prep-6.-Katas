const urlDecode = function(text) {
  // Put your solution here
  const textArr = text.split('&');
  // return textArr;
  let output = {};
  for (let keyValue of textArr) {
    let eachArr = keyValue.split('=');
    // return eachArr;
    for (let i = 0; i < eachArr.length; i ++) {
      if (eachArr[i].includes('%20')) {
        eachArr[i] = eachArr[i].replace(/%20/g, ' '); 
      }
    }
    
    output[eachArr[0]] = eachArr[1];
  }
  return output;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);