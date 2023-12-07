const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Set the date we're counting down to
const waktu = new Date("Dec 7, 2023 11:05:00").getTime()
// console.log(waktu, "waktu")
var countDownDate = new Date("Dec 10, 2023 14:18:40").getTime();
// console.log(countDownDate)

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  console.log(distance)
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //   document.getElementById("demo").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance <= 1) {
    clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    alert("done!")
  }
}, 1000);
