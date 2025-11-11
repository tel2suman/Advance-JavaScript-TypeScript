// switch (expression) {

//   case value1:
//     // Code to execute
//     break;

//   case value2:
//     // Code to execute
//     break;

//   default:
//     // Code to execute
// }

const day = 3;

let dayName;

switch (day) {

  case 1:
    dayName = "Monday";
    break;

  case 2:
    dayName = "Tuesday";
    break;

  case 3:
    dayName = "Wednesday";
    break;

  case 4:
    dayName = "Thursday";
    break;

  case 5:
    dayName = "Friday";
    break;
    
  default:
    dayName = "Weekend";
}

console.log(dayName);