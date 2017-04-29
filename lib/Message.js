const Message = (currentGuess, computerGuess) => {

  if (currentGuess < computerGuess) {
    return "This number is too low. Try again."
  }
  else if (currentGuess > computerGuess) {
    return "This number is too high. Try again."
  }
  else if (currentGuess === computerGuess) {
    return "Congratulations! You guessed!"
  }
  else {
    return "Something went wrong."
  }
}

export default Message
