const wordArray = ["a", "an", "axe", "army", "attic", "abacus", "antonym", "anaconda", "amendment", "adventurer", "anachronism", "abbreviation", "advertisement","acknowledgment", "agriculturalist"]
const wordPrompt = ["indefinite article", "the other indefinite article", "attacks odor and trees", "Ain't Really Marines Yet", "haunted part of the house", "calculator before there were numbers", "opposite", "don't want none unless you got buns, hun", "ended Prohibition", "Odysseus was this", "a jetpack in the Dark Ages", "shortened form", "Whassssss upppppp!", "I owe all my skills to General Assembly.", "a farmer"]

const seconds = 10
var temp
var timeRemaining
var wordLevel = 0
var timer
var toggle = true

const levelDOM = document.querySelector('.wordLevel')
const secondsDOM = document.querySelector('.seconds')
const promptDOM = document.querySelector('.promptBox')
const inputDOM = document.querySelector('#userWord')
const buttonDOM = document.querySelector('#submit')
const playDOM = document.querySelector('#play')
const resetDOM = document.querySelector('#reset')

function reset () {
  stopInterval()
  secondsDOM.innerHTML = seconds
  alert(`Game over! You got to level ${wordLevel}!`)
}

function resetTimer () {
  secondsDOM.innerHTML = seconds
}

function togglePlay() {
  toggle = !toggle
}

function play () {
  if (toggle === true) {
  togglePlay()
  timer = window.setInterval(interval, 1000)
  wordLevel = 1
  console.log(`Game play initiated! wordLevel is ${wordLevel}`)
  levelDOM.innerHTML = wordLevel
  promptDOM.innerHTML = wordPrompt[wordLevel-1]
  }
  else {
  alert("You're already playing!")
  }

}

function levelUp () {
  if (wordLevel < 15) {
    resetTimer()
    wordLevel = wordLevel + 1
    inputDOM.value = ""
    levelDOM.innerHTML = wordLevel
    console.log(`${levelDOM.innerHTML} is the level of play.`)
    promptDOM.innerHTML = wordPrompt[wordLevel-1]
  }
  else {
    reset()
  }
}

function wordGrab(e) {
    e.preventDefault()
    word = inputDOM.value
    console.log(`wordGrab'd ${inputDOM.value}`)
    wordCheck(word)
}

function wordGrabEnter(e) {
  if (e.keycode === 13) {
    e.preventDefault()
    word = inputDOM.value
    console.log(`wordGrab'd ${inputDOM.value}`)
    wordCheck(word)
  }
}

function wordCheck (word) {
  if (word === wordArray[wordLevel-1]) {
    console.log('Level up activated!')
    levelUp()
  }
  else {
    alert("Incorrect!")
  }
}


function interval () {
  timeRemaining = parseInt(secondsDOM.innerHTML, 10)
  if(timeRemaining === 0) {
    reset()
    secondsDOM.innerHTML = seconds
  }
  else {
      timeRemaining = timeRemaining - 1
      secondsDOM.innerHTML = timeRemaining
  }
}

function stopInterval () {
    clearTimeout(timer)
  }

buttonDOM.addEventListener('click', wordGrab)
inputDOM.addEventListener('keydown', wordGrabEnter)
playDOM.addEventListener('click', play)
resetDOM.addEventListener('click', reset)



/*

function countdown () {
  let tempSeconds = parseInt(secondsDOM.innerHTML, 10)

  if (tempSeconds == 0) {
    temp = document.querySelector('.seconds')
    temp.innerHTML = "TIME IS UP"
    reset()
  }
  else {
    tempSeconds = tempSeconds - 1
    temp = document.querySelector('.seconds')
    temp.innerHTML = tempSeconds
    let timer = setTimeout(countdown, 1000)
  }
}



/////////functional countdown timer

function countdown () {
  seconds = parseInt(secondsDOM.innerHTML,10)

  if (seconds == 1) {
    temp = document.querySelector('.seconds')
    temp.innerHTML = "TIME IS UP"
    reset()
    stopCountdown()
    seconds = seconds + 10
  }
  else {
    seconds = seconds - 1
    temp = document.querySelector('.seconds')
    temp.innerHTML = seconds
    setTimeout(countdown, 1000)
  }
}


// alternate failing myCountdown
function countdown () {
  seconds = 10
  myCountdown = setTimeout(
    //why do I need this for countdown to work?
    seconds = parseInt(secondsDOM.innerHTML,10)

    if (seconds == 0) {
      temp = document.querySelector('.seconds')
      temp.innerHTML = "TIME IS UP"
      stopCountdown()
      reset()
      seconds = seconds + 10
    }
    else {
      seconds = seconds - 1
      temp = document.querySelector('.seconds')
      temp.innerHTML = seconds
    }), 1000)
}
//experimental countdown - why fail after Round 1?

function countdown () {
  var tempSeconds = seconds
  var myCountdown = setTimeout(function() {
    if (tempSeconds == 0) {
      temp = document.querySelector('.seconds')
      temp.innerHTML = 'TIME IS UP'
      reset()
      stopCountdown()
    }
    else {
      tempSeconds = tempSeconds - 1
      temp = document.querySelector('.seconds')
      temp.innerHTML = tempSeconds
    }
  }, 1000)
}

// fancy display hiding based on conditions (not working yet)

function gameDisplay() {
  if (wordLevel = 0) {
    gameMain = document.querySelector('main')
    gameMain.style.display = "none"
  }
}

*/
