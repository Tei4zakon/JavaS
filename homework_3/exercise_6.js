let cityArray = ['Skopje', 'Madrid', 'Amsterdam', 'Paris', 'Dublin', 'Rome', 'Berlin', 'Oslo', 'Belgrade', 'Zagreb'];

//*a

for (let key in cityArray) {
    console.log(key + ': ' + cityArray[key]);
    }

//*b
for (let city of cityArray) {
console.log(city);
}    