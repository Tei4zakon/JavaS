
function printFunc(seconds) {
if (typeof seconds !== "number") {
    console.log("Please enter number!")
}
else if (seconds > 9 || seconds < 0) {
    console.log("Enter one digit number!")
}
else {
    setTimeout (() => {
        console.log("Coding is not that hard!")
    }, 2000)
}
}

printFunc(45)
printFunc('go')
printFunc(6)