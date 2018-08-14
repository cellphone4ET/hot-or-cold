import React from 'react';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        text: '',
      }
  }

  onSubmit(e) {
    e.preventDefault();
    const text = parseInt(this.state.text.trim(), 10);
    this.props.onAdd(text);
    this.setState({
      text: ''
    });

  }

  setText(text) {
    this.setState({
      text
    });
  }

  render() {

    return (
      <div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <fieldset>
            <legend></legend>
            <input type="number" value={this.state.text} onChange={e => this.setText(e.target.value)}></input>
            <input type="submit" value="Submit"></input>
          </fieldset>
        </form>
      </div>)
    }
}
