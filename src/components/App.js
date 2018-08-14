import React from 'react';
import GuessForm from './GuessForm';
import NewGame from './NewGame';
import Feedback from './Feedback'
import Guesses from './Guesses';


export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        currentNumber:  Math.floor((Math.random() * 100) + 1),
        guesses: [],
        currentFeedback: 'Make a guess'
      };
  }

  addGuess(guess) {
    const currentNumber = this.state.currentNumber;
    if (guess === currentNumber) {
      this.newGame();
      this.setState({
        currentFeedback: 'You guessed correctly, well done. Make a new guess'
      });
    } else if (guess > currentNumber) {
      this.setState({
        currentFeedback: 'Too high',
        guesses: [...this.state.guesses, guess]
      });
    } else {
      this.setState({
        currentFeedback: 'Too low',
        guesses: [...this.state.guesses, guess]
      });
    }
  }

  newGame() {
    this.setState({
      currentNumber:  Math.floor((Math.random() * 100) + 1),
      guesses: [],
      currentFeedback: 'Make a guess'
    });
  }

  render() {
    console.log(this.state.currentNumber);
    console.log(this.state.guesses);
    return (
      <div className="App">
        <p>Hot or Cold Game</p>
        <GuessForm  onAdd={guess=> this.addGuess(guess)}/>
        <Feedback feedBack={this.state.currentFeedback} />
        <Guesses guesses={this.state.guesses}/>
        <NewGame newGame={()=>this.newGame()}/>
      </div>
    );
  };
}
