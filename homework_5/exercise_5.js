let seconds = 10;
let countdown = setInterval(() => {
  console.log(seconds);
  seconds--
  if (seconds === 0) {
    console.log("Countdown Complete!");
    clearInterval(countdown)
  }
}, 1000);

