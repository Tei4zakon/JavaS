function checkNumber(number) {
    return new Promise ((resolve, reject) => {
    setTimeout (() => {
        if (number %2 === 0) {
            resolve ('This number is even')
        }
    else {
        reject ('This number is odd')
    }}, 2500
 )}
    )}

function handleSuccess (message) {
    console.log(message)
}

function handleError (error) {
    console.log(error)
}

checkNumber(98)
.then(handleSuccess)
.catch(handleError) ;

checkNumber(77)
.then(handleSuccess)
.catch(handleError) ;

checkNumber(3)
.then(handleSuccess)
.catch(handleError) ;

checkNumber(1000)
.then(handleSuccess)
.catch(handleError)