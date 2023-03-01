import React, { Component } from 'react';
import BasicInput from './BasicInput';

class PersonalFieldset extends Component {
  constructor(props) {
    super(props);

    this.generateInputs = this.generateInputs.bind(this);
  }

  generateInputs() {
    if (this.props.inputInfo !== undefined) {
      return this.props.inputInfo.map((input) => {
        return (
          <BasicInput id={input[0]} type={input[1]} placeholder={input[2]} />
        );
      });
    }
  }

  render() {
    return (
      <fieldset className="personalFieldset">
        <legend>{this.props.title}</legend>
        <div className="fields">{this.generateInputs()}</div>
        <label htmlFor="profile">Career Profile:</label>
        <textarea
          name="profile"
          id="profile"
          cols="30"
          rows="5"
          placeholder="A detailed summary of your history and skills here..."
        ></textarea>
      </fieldset>
    );
  }
}

export default PersonalFieldset;
