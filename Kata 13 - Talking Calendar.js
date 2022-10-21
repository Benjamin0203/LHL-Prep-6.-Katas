const talkingCalendar = function(date) {
  // Your code here
  switch (date[5] + date[6]) {
    
    case "01":
      if (date[8] === "0" && date[9] === "1") {
        return `January 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `January 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `January 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `January ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
   
    case "02":
      if (date[8] === "0" && date[9] === "1") {
        return `February 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `February 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `February 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `February ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "03":
      if (date[8] === "0" && date[9] === "1") {
        return `March 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `March 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `March 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `March ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
    case "04":
      if (date[8] === "0" && date[9] === "1") {
        return `April 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `April 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `April 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `April ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "05":
      if (date[8] === "0" && date[9] === "1") {
        return `May 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `May 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `May 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `May ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "06":
      if (date[8] === "0" && date[9] === "1") {
        return `June 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `June 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `June 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `June ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      } 
    case "07":
      if (date[8] === "0" && date[9] === "1") {
        return `July 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `July 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `July 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `July ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "08":
      if (date[8] === "0" && date[9] === "1") {
        return `August 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `August 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `August 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `August ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "09":
      if (date[8] === "0" && date[9] === "1") {
        return `September 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `September 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `September 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `September ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
    case "10":
      if (date[8] === "0" && date[9] === "1") {
        return `October 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `October 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `October 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `October ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "11":
      if (date[8] === "0" && date[9] === "1") {
        return `November 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `November 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `November 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `November ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
    
    case "12":
      if (date[8] === "0" && date[9] === "1") {
        return `December 1st, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "2") {
        return `December 2nd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }
      else if (date[8] === "0" && date[9] === "3") {
        return `December 3rd, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }  
      else {
        return `December ${date[8]}${date[9]}th, ${date[0]}${date[1]}${date[2]}${date[3]}`;
      }         
  }
};

console.log(talkingCalendar("2017/01/01"));
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));