const instructorWithLongestName = function(instructors) {
  // Put your solution here
 
  let longestNameObj = instructors[0];
  for (let obj of instructors) {
    if (longestNameObj["name"].length < obj["name"].length) {
      longestNameObj = obj;
    }
  }
  return longestNameObj;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));