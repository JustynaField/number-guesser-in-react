import React, { Component } from 'react'
import LastGuess from './LastGuess'
import Controls from './Controls'


export default class NumberGuesser extends Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
      computerGuess: Math.floor(Math.random() * 100) + 1,
    };
    console.log(this.state.computerGuess)
  }

  render() {
    return (
      <section>
        <header>
          <h1>Number Guesser</h1>
        </header>
        < LastGuess currentGuess = { this.state.userGuess }
                    computerGuess = { this.state.computerGuess }
        />
        < Controls handleGuess = {(guess) => this.setState({ userGuess: guess})}
        />
      </section>
    )
  }
}
