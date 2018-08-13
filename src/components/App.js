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
      }

  }


  render() {
    console.log(this.state.currentNumber);
    return (
      <div className="App">
        <p>Hot or Cold Game</p>
        <GuessForm  />
        <Feedback feedBack={this.state.currentFeedback} />
        <Guesses guesses={this.state.guesses}/>
        <NewGame />
      </div>
    );
  }
}
