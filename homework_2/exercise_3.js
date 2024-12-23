function sumNumber(num1, num2, num3) {
let sum = num1 + num2 + num3
return sum
}

console.log(sumNumber(15, 25, 35))

function stringName (string) {
    let stringName = string
    return string 
}

console.log(stringName("This is homework!"))

const compare = (num1, num2) => {
    if (num1 === num2) {
      console.log(`These numbers (${num1} and ${num2}) are equal`);
    } else {
      console.log(`These numbers (${num1} and ${num2}) are not equal`);
    }
  };
  
  compare(2, 4);
  compare(6, 6);