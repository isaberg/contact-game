const wordArray = ["a", "an", "axe", "army", "attic", "abacus", "antonym", "anaconda", "amendment", "adventurer", "anachronism", "abbreviation", "advertisement","acknowledgment", "agriculturalist"]
const wordPrompt = ["indefinite article", "the other indefinite article", "attacks odor and trees", "Ain't Really Marines Yet", "haunted part of the house", "calculator before there were numbers", "opposite", "don't want none unless you got buns, hun", "ended Prohibition", "Odysseus was this", "a jetpack in the Dark Ages", "shortened form", "Whassssss upppppp!", "I owe all my skills to General Assembly.", "a farmer"]
const htmlBody = document.querySelector('body')

const seconds = 10
var temp
var timeRemaining
var wordLevel = 0
var timer
var playAuth = true

const levelDOM = document.querySelector('.wordLevel')
const secondsDOM = document.querySelector('.seconds')
const promptDOM = document.querySelector('.promptBox')
const inputDOM = document.querySelector('#userWord')
const buttonDOM = document.querySelector('#submit')
const playDOM = document.querySelector('#play')
const resetDOM = document.querySelector('#reset')


buttonDOM.addEventListener('click', wordGrab)
inputDOM.addEventListener('keydown', wordGrabEnter)
playDOM.addEventListener('click', play)
resetDOM.addEventListener('click', reset)


function reset () {
  if (playAuth === false) {
  stopInterval()
  resetTimer()
  alert(`Game over! You got to level ${wordLevel}!`)
  togglePlay()
  }
  else {
    alert("You can't end a game you haven't started!")
  }
}

function resetTimer () {
  secondsDOM.innerHTML = seconds
}

function togglePlay() {
  if (wordLevel >= 1) {
  playAuth = !playAuth
  wordLevel = 0
  }
  else {
  playAuth = !playAuth
  }
}

function play () {
  if (playAuth === true) {
  resetTimer()
  togglePlay()
  timer = window.setInterval(interval, 1000)
  wordLevel = 1
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
    promptDOM.innerHTML = wordPrompt[wordLevel-1]
  }
  else {
    reset()
  }
}

function wordGrab(e) {
    e.preventDefault()
    word = inputDOM.value
    wordCheck(word)
}

function wordGrabEnter(e) {
  if (e.keycode === 13) {
    e.preventDefault()
    word = inputDOM.value
    wordCheck(word)
  }
}

function wordCheck (word) {
  if (word === wordArray[wordLevel-1]) {
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
