const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
    ]


    //*a


let countryEndInLand = countries
.filter((country) => country.slice(-4) === "land")
.map((country) => country.toUpperCase())

console.log(countryEndInLand)


//*b

let countryEndInIA = countries
.filter((country) => country.slice(-2) === "ia" && country.length > 7)

console.log(countryEndInIA)