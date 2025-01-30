

function promise1 (a , b) {
    return new Promise ((resolve, reject) => {
        const sum = 12;
    if (sum === a + b) {
        resolve ('Correct!')
    } else {
        reject ('Incorrect!')
    }
})
}

//promise1(a=5, b=7)
//promise1(a=4, b=9)
//.then((sum) => console.log(sum))
//.catch((error) => console.log(error))

async function getSum() {
    try {
      const sum = await promise1(a=4, b=9)
      console.log(sum)
    } catch (error) {
      console.log("Something went wrong!", error)
    }
  }

  //getSum()

  ////

  function promise2 () {
    return new Promise ((resolve, reject) => {
        const bodyWeight = number;
        if (bodyWeight <= 100) {
            resolve ('Healthy!')
        } else {
            reject ('Overweight! Start a Diet!')
        }
    })
  }

//promise2(number=105)
//promise2(number=85)

//.then((bodyWeight) => console.log(bodyWeight))
//.catch((error) => console.log(error))

async function fetchWeight() {
    try {
      const bodyWeight = await promise2(number=85)
      console.log(bodyWeight)
    } catch (error) {
      console.log(error)
    }
  }

  //fetchWeight()

  //////

function promise3 (time) {
        return new Promise ((resolve, reject) => {
    setTimeout(() => {
        if(time <= 35){
        resolve('Problem solved after 3 seconds');} else {
        reject ("Problem unsolved!")}
    }, 3000);}
)}

//promise3(15)
//promise3(55)

//.then((promise3) => console.log(promise3))
//.catch((error) => console.log(error))

async function problemSolving() {
    try {
      const problemSolvingTime = await promise3(63)
      console.log(problemSolvingTime)
    } catch (error) {
      console.log(error)
    }
  }

  problemSolving()