
const camelCase = function(input) {
  const inputArray = input.split(' ');
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

const pascalCase = function(input) {
  const inputArray = input.split(' ');
  let outputString = '';
  for (let i = 0; i < inputArray.length; i ++) {
    let eachWord = inputArray[i];
    let newWordUpper = eachWord[0].toUpperCase();
    for (let j = 1; j < eachWord.length; j ++) {
      newWordUpper += eachWord[j];
    } 
    outputString += newWordUpper;      
  }
  return outputString;
}

const snakeCase = function(input) {
  const inputArray = input.split(' ');
  return inputArray.join('_');
}

const kebabCase = function(input) {
  const inputArray = input.split(' ');
  return inputArray.join('-');
}

const titleCase = function(input) {
  const inputArray = input.split(' ');
  let outputString = '';
  for (let i = 0; i < inputArray.length; i ++) {
    let eachWord = inputArray[i];
    let newWordUpper = eachWord[0].toUpperCase();
    for (let j = 1; j < eachWord.length; j ++) {
      newWordUpper += eachWord[j];
    } 
    outputString += newWordUpper + " ";      
  }
  return outputString;
}

const vowelCase = function(input) {
  const inputArray = input.split(' ');
  let outputString = '';
  for (let i = 0; i < inputArray.length; i ++) {
    let eachWord = inputArray[i];
    let newWord = '';
    for (let j = 0; j < eachWord.length; j ++) {
      if (eachWord[j] === 'a' || eachWord[j] === 'e' || eachWord[j] === 'i' || eachWord[j] === 'o' || eachWord[j] === 'u') {
        newWord += eachWord[j].toUpperCase();
      }
      else{
        newWord += eachWord[j];
      }
    } 
    outputString += newWord + " ";      
  }
  return outputString;
}

const consonantCase = function(input) {
  const inputArray = input.split(' ');
  let outputString = '';
  for (let i = 0; i < inputArray.length; i ++) {
    let eachWord = inputArray[i];
    let newWord = '';
    for (let j = 0; j < eachWord.length; j ++) {
      if (eachWord[j] !== 'a' && eachWord[j] !== 'e' && eachWord[j] !== 'i' && eachWord[j] !== 'o' && eachWord[j] !== 'u') {
        newWord += eachWord[j].toUpperCase();
      }
      else{
        newWord += eachWord[j];
      }
    } 
    outputString += newWord + " ";      
  }
  return outputString;
}

const upperCase = function(input) {
  return input.toUpperCase();
}

const lowerCase = function(input) {
  return input.toLowerCase();
}


const makeCase = function(input, cases) {
 
  if (Array.isArray(cases) === true) {
    cases = cases;
  }
  else {
    cases = [cases];
  }  
  const precedence = {
    first : ['camel', 'pascal', 'snake', 'kebab', 'title'],
    second : ['vowel', 'consonant'],
    third : ['upper', 'lower']
  };

  let order = {
    first : [],
    second : [],
    third : []
  };

  for (let eachCase of cases) {
    if (precedence.first.includes(eachCase)) {
      order.first.push(eachCase);
    }
    else if (precedence.second.includes(eachCase)) {
      order.second.push(eachCase);
    }
    else {
      order.third.push(eachCase);
    }
  }

  for (let eachOrder in order) {
    order[eachOrder].forEach((element) => {
      switch (element) {
        case 'camel':
          input = camelCase(input);
          break;

        case 'pascal':
          input = pascalCase(input);
          break;

        case 'snake':
          input = snakeCase(input);
          break;

        case 'kebab':
          input = kebabCase(input);
          break;

        case 'kebab':
          input = kebabCase(input);
          break;
        
        case 'vowel':
          input = vowelCase(input);
          break;

        case 'consonant':
          input = consonantCase(input);
          break;

      
        case 'upper':
          input = upperCase(input);
          break;

        case 'lower':
          input = lowerCase(input);
          break;

        default:
          input = input;
    }
  })	
  }
  return input;   
  }
    

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

// console.log(pascalCase("this is a string"));
// console.log(snakeCase("this is a string"));
// console.log(kebabCase("this is a string"));
// console.log(titleCase("this is a string"));
// console.log(vowelCase("this is a string"));
// console.log(consonantCase("this is a string"));
// console.log(upperCase("this is a string"));
// console.log(lowerCase("this is a string"));
