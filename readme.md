#**Contact: The Game**

Contact is a word trivia game inspired by a game I played in the outdoors with
family and friends growing up.

#**Technologies**

I utilized HTML, CSS, and Javascript to create a desktop-based word trivia game.

This project enabled me to improve my abilities with toggle functions,
setInterval methods, event listeners, control flow, and CSS grid.

Javascript event listeners drive the control flow. Events like "click" or
pressing the enter key on the input form drives the game once play() is invoked.
Example event listener for "keydown" when the user presses enter, and how that
drives my wordGrab(), and in turn, wordCheck() functions.

```
buttonDOM.addEventListener('click', wordGrab)
inputDOM.addEventListener('keydown', wordGrabEnter)
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

```

Toggles were established for the Play and End Game button functionality to
prevent users breaking the game.

```

function reset () {
  if (playAuth === false) {
  stopInterval()
  secondsDOM.innerHTML = seconds
  alert(`Game over! You got to level ${wordLevel}!`)
  togglePlay()
  }
  else {
    alert("You can't end a game you haven't started!")
  }
}

function togglePlay() {
  playAuth = !playAuth
}

function play () {
  secondsDOM.innerHTML = seconds
  if (playAuth === true) {
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

```

The round timer is built upon the setInterval() method - I declared a timer
variable and set it equal to this setInterval which would, while active, invoke
 a function of my choice every X milliseconds.

I declared an interval() function to perform this countdown, every 1000
milliseconds. There is unfortunately nothing preventing multiple declarations
of the timer variable - I discovered a bug where I could press "play"
multiple times in rapid succession, and as a result, the countdown functionality
would double or triple in speed.

To solve this, I had to create a togglePlay() function - basically, before the
game is initiated and play invoked, it checks to ensure that play is authorized.
If playAuth is true, there is no game ongoing, and play() is ready to be invoked
when the user presses the Play button.

If a game is ongoing, playAuth is **false** and no further invoking of the timer
or play initiation is allowed. Likewise, the capability to end the game and
reset to Level 1 is only allowed by the toggle when playAuth is **false** - when
playAuth is **true**, there is no currently active game to end.

```
function play () {
  secondsDOM.innerHTML = seconds
  if (playAuth === true) {
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
```

#**Ongoing Projects**
Expanding game to include dictionary array (2500+ strings)
http://wordlist.aspell.net/12dicts/
Responsive Styling for Mobile*
http://mediag.com/news/popular-screen-resolutions-designing-for-all/

*Note: Game design of word-based trivia favors desktop application.

#**Deliverables**

- A hosted copy of your game, built by you, hosted on Github Pages
**https://isaberg.github.io/contact-game**
- Your HTML/CSS should pass the HTML5 Validator and CSS Validator
**Complete**
- A git repository hosted on Github with frequent commits dating back to the very beginning of the project
**https://github.com/isaberg/contact-game**
- A link to your hosted project in the URL section of your Github repo
**https://isaberg.github.io/contact-game**
