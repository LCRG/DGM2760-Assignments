//pick a random number between 1 and 15
//let correctNumber = Math.random() * 15

//Remove the remainder
//correctNumber = Math.floor(correctNumber)
const correctNumber = Math.floor(Math.random()*14)

// offset plus 1
//correctNumber = correctNumber + 1
//correctNumber += 1

console.log(`The correctNumber is ${correctNumber}`)
let guessed = false
let totalGuesses = 0
let gamerGuess = 0

function evalGuess() {
  totalGuesses += 1 // totalGuesses = totalGuesses + 1;

  gamerGuess = document.querySelector('#guess').value
  // console.log(typeof(gamerGuess), typeof(correctNumber))  // strict equal example

  const feedback = document.querySelector('#feedback')

  if (gamerGuess == correctNumber) {
    feedback.innerText = 'You win!'
    giveAward()
  } else if (gamerGuess > correctNumber && gamerGuess < 16) {
    feedback.innerText = 'too high, try again'
  } else if (gamerGuess < correctNumber && gamerGuess > 0) {
    feedback.innerText = 'too low, try again'
  } else {
    feedback.innerText = 'Please choose a number between 1 and 15 and try again'
    totalGuesses -= 1
  }
  document.querySelector('#attempts').innerText = totalGuesses
} // end function

function giveAward() {
  console.log('Congratulations!')

  let path = '#'
  switch (totalGuesses) {
    case 1:
    case 2:
    case 3:
      path = 'images/blue.png'
      break
    case 4:
    case 5:
    case 6:
      path = 'images/red.png'
      break
    default:
      path = 'images/yellow.png'
      break
  }
  const awardImage = document.createElement('IMG') // Create an <img> element
  awardImage.setAttribute('src', path) // Set the src attribute of the image to the right path

  const ribbon = document.querySelector('#ribbon')

  if (ribbon.hasChildNodes()) {
    return
  } else ribbon.appendChild(awardImage) // Append Child to id=ribbon
}
