const { number } = require("yargs");

let students = {
    student1: {
    name: 'Beth',
    surname: 'Ceasar',
    age: 25,
    city: 'Skopje',
    street: { 
        name: 'Stevan Cvetkovski',
        number: 9,
        zipCode: 1000
    }
},

    student2: {
    name: 'Oven',
    surname: 'Perry',
    age: 27,
    city: 'Veles',
    street: { 
        name: 'Vojdan Cernodrisnki',
        number: 5,
        zipCode: 1400
    }
},
}

console.log(students.student1.city) 
console.log(students.student2['street'])