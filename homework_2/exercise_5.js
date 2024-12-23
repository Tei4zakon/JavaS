function numbers(number) {
    if (number % 3 === 0 && number % 5 !== 0) {
      console.log("Fizz");
    } else if (number % 5 === 0 && number % 3 !== 0) {
      console.log("Buzz");
    } else if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(number);
    }
  }
  
  numbers(45);
  numbers(39);
  numbers(55)