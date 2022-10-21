const organizeInstructors = function(instructors) {
  // Put your solution here
  let output = {};
  let blockchainValue = [];
  let iosValue = [];
  let webValue = [];
  for (let instructor of instructors) {
    if (instructor.course === "Blockchain") {
      blockchainValue.push(instructor.name);
    }
    else if (instructor.course === "iOS") {
      iosValue.push(instructor.name);
    }
    else if (instructor.course === "Web") {
      webValue.push(instructor.name);
    }
  }
  // if (blockchainValue !== [] || iosValue !== [] || webValue !== []) {
  //   output.Blockchain = blockchainValue;
  //   output.iOS = iosValue;
  //   output.Web = webValue;
  //   return output;
  // }

  if (blockchainValue.length !== 0) {
    output.Blockchain = blockchainValue;
  }
  if (iosValue.length !== 0) {
    output.iOS = iosValue;
  }
  if (webValue.length !== 0) {
    output.Web = webValue;
  }
  return output;  
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));