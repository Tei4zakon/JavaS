
const checkGrade = (number) => {
    number >= 90 && number <= 100
    ? console.log("Grade A")
    :number >= 80 && number <= 89
    ? console.log("Grade B")
    :number >= 70 && number <= 79
    ? console.log("Grade C")
    :number >= 60 && number <= 69
    ? console.log("Grade D")
    :number >= 0 && number <= 59
    ? console.log("Grade F")
    :console.log("Enter a number between 0 and 100")
}

checkGrade(87)
checkGrade(95)
checkGrade(72)
checkGrade(64)
checkGrade(33)
checkGrade(-4)

