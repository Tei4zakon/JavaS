
let hasCoffee = true
let hasTea = false
let hasMilk = true

let result_1 = hasTea || hasMilk
console.log(result_1)

let result_2 = hasCoffee && hasTea
console.log(result_2)

let result_3 = ! hasTea
console.log(result_3)

let result_4 = (hasCoffee || hasMilk) && !( hasCoffee && hasMilk)
console.log(result_4)

let result_5 = (hasTea && hasMilk) || (hasCoffee && hasTea)
console.log(result_5)

let result_6 = (!hasCoffee) && (!hasTea)
console.log(result_6)