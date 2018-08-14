import React from 'react';

export default function NewGame(props) {
    return (
      <button onClick={()=>props.newGame()}>New Game</button>);
}
