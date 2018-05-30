const wordArray = ["a", "an", "axe", "army", "attic", "autumn", "antonym", "anaconda", "amendment", "adventurer", "anachronism", "abbreviation", "advertisement","acknowledgment", "agriculturalist"]

const wordPrompt = ["indefinite article", "the other indefinite article", "attacks odor and trees", "Ain't Really Marines Yet", "haunted part of the house", "calculator before there were numbers", "opposite", "don't want none unless you got buns, hun", "ended Prohibition", "Odysseus was this", "a jetpack in the Dark Ages", "shortened form", "Whassssss upppppp!", "I owe all my skills to General Assembly.", "a farmer"]

var wordLevel = 15

var levelDOM = document.querySelector('.wordLevel')
var secondsDOM = document.querySelector('.seconds')

var seconds
var temp

function countdown() {
    seconds = parseInt(secondsDOM.innerHTML,10)

    if (seconds == 1) {
      temp = document.querySelector('.seconds')
      temp.innerHTML = "TIME IS UP"
      return
    }

    seconds = seconds - 1
    secondsDOM.innerHTML = seconds
    timeout = setTimeout(countdown, 1000);
  }

countdown();
// how to use this date function...all dates built off of a date 48 years ago...
// establish reference date
// establish date + factor (how many milliseconds based upon wordLevel?)
/*
// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //+ minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
      //  document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

/*
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
*/


//levelUp(): reset timer, add +1 to wordLevel, pull new level wordPrompt

//wordCheck() = on click or Enter or wordTimer =0, check answer against wordArray, if correct, run levelUp(), if wrong reset()

//reset() = wordLevel = 0,

//timer will utilize: window.setTimeout(function, milliseconds)
