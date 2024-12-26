//*a

for (let i = 0; i < 11; i++) {
    console.log(i);
    
    }

//*b

let start = 3
let end = 10
let evenNum = 0;

for (let i = start; i <= end; i++) {
    console.log(i)

  if (i % 2 === 0) {
    evenNum += i;
  }
}
console.log(evenNum);


//*c

let person = {
    name: 'Tea', 
    age: 34,
    city: 'Skopje'
}

for (let key in person) {
    console.log(key + ':' + person[key]);
    }

//*d

let colors = ['red', 'green', 'blue']

for (let color of colors) {
    console.log(color.length, color);
    }