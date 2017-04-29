import React, { Component } from 'react'

const formatNumber = (inputValue) => {
  return parseInt(inputValue, 10) || '';
};

export default class Controls extends Component {
  constructor() {
    super();
    this.state = {
      userGuess: '',
    }
  }

  handleGuess() {
    this.props.handleGuess(this.state.userGuess)
    this.clearInput();
  }

  clearInput() {
    this.setState({ userGuess: ''});
  }

  resetGame() {
    // this.setState({
    //
    //   // userGuess: '',
    //   computerGuess: Math.floor(Math.random() * 100) + 1,
    // })
    // this.handleGuess()
  }


  render() {
    return (
      <section>
        <input
          id = "input-field"
          type = 'number'
          placeholder = "Type your number here"
          value = { this.state.userGuess }
          onChange = {(event) => this.setState({userGuess: formatNumber(event.target.value)}) }
        />

        <button className="guess-clear"
                // onClick = {() => this.props.handleGuess(this.state.userGuess)}
                onClick = {() => this.handleGuess()}
                disabled = { !this.state.userGuess }
        >
          Guess
        </button>

        <button className="guess-clear"
                onClick = {() => this.clearInput() }
                disabled = { !this.state.userGuess }
        >
          Clear
        </button>

        <button className="reset"
                onClick = {() => this.resetGame() }
        >
        Reset Game
        </button>
      </section>
    )
  }
}
