
let age = 34

if (age >= 18 && age < 21) {
    console.log("You can vote");
  } else if (age >= 21) {
    console.log("You can buy alcohol and you can vote")
  } else (age > 1 && age < 18); {
    console.log("You can't vote or buy alcohol")
  }

  console.log(age)



  const months = (month) => {
    switch (month) {
      case "January":
        console.log(`${month} has 31 days`);
        break;
      case "February":
        console.log(`${month} has 28 days`);
        break;
  
      case "March":
        console.log(`${month} has 31 days`);
        break;
  
      case "April":
        console.log(`${month} has 30 days`);
        break;
  
      case "May":
        console.log(`${month} has 31 days`);
        break;
  
      case "June":
        console.log(`${month} has 30 days`);
        break;
  
      case "July":
        console.log(`${month} has 31 days`);
        break;
  
      case "August":
        console.log(`${month} has 31 days`);
        break;
  
      case "September":
        console.log(`${month} has 30 days`);
        break;
  
      case "October":
        console.log(`${month} has 31 days`);
        break;
  
      case "November":
        console.log(`${month} has 30 days`);
        break;
  
      case "December":
        console.log(`${month} has 31 days`);
        break;
  
      default: {
        console.log("Invalid input");
      }
    }
  };

  months("October")

  let temperatureInC = 8

if (temperatureInC > 31) {
    console.log("Hot Weather");
  } else if (temperatureInC >= 21 && temperatureInC <= 30) {
    console.log("Warm Weather");
  } else if (temperatureInC >= 16 && temperatureInC <= 20) {
    console.log("Moderate Weather");
  } else  (temperatureInC < 15) ;{
    console.log("Cold Weather");
  } 
  
  console.log(temperatureInC)