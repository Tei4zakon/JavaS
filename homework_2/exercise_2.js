

let score = 78

if (score >= 90 && score <= 100) {
    console.log("Grade: A");
  } else if (score >= 80 && score <= 89) {
    console.log("Grade: B");
  } else if (score >= 70 && score <= 79) {
    console.log("Grade: C");
  } else if (score >= 60 && score <= 69) {
    console.log("Grade: D");
  } else if (score >= 0 && score <= 59) {
    console.log("Grade: F");
  } else {
    console.log("Invalid score. Please enter a score between 0 and 100!");
  }
  
  console.log(score);

  

  let dayNumber = 5

  switch (dayNumber) {
    case 1:
      console.log("The day is Sunday");
      break;
    case 2:
      console.log("The day is Monday");
      break;
    case 3:
      console.log("The day is Tuesday");
      break;
    case 4:
      console.log("The day is Wednesday");
      break;
    case 5:
      console.log("The day is Thursday");
      break;
    case 6:
      console.log("The day is Friday");
      break;
    case 7:
      console.log("The day is Saturday");
      break;
    default:
      console.log("Invalid number. Please enter a number between 1 and 7");
  }

  console.log(dayNumber)