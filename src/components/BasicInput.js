import React, { Component } from 'react';

class BasicInput extends Component {
  render() {
    let title = `${this.props.id[0].toUpperCase()}${this.props.id.slice(1)}:`;
    return (
      <div className="field">
        <label htmlFor={this.props.id}>{title}</label>
        <input
          type={this.props.type}
          id={this.props.id}
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default BasicInput;
