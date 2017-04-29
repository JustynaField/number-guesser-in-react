import React from 'react'
import Message from '../Message'

const LastGuess = ({ currentGuess, computerGuess }) => {

if(!currentGuess) {
  return <h2>Choose a number between 1 and 100</h2>
}

  return (
    <section>
      <p>Your last guess was:</p>
      <p className="number">{ currentGuess || '?' }</p>
      <p className="message">{Message(currentGuess, computerGuess)}</p>
    </section>
  )
}

export default LastGuess
