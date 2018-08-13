import React from 'react';

export default function Guesses(props) {
  return(
    <div>
      <p>{props.guesses}</p>
      <p>You have {10 - props.guesses.length} guesses left.</p>
    </div>);
}
