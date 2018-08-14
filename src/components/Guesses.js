import React from 'react';

export default function Guesses(props) {
  const guesses = props.guesses.map((guess, index) => {
    return <span key={index}>{guess}{" "}</span>
  })

  return(
    <div>
      <p>{guesses}</p>
    </div>);
}
