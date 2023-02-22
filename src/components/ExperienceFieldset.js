import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

class ExperienceFieldset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addNew: false,
    };

    this.renderWorkExp = this.renderWorkExp.bind(this);
  }

  renderWorkExp() {
    let { experiences } = this.props;
    if (experiences.length > 0) {
      return experiences.map((exp) => {
        return (
          <span className="expInfo">
            <h3 className="expHead">
              {exp.title} | {exp.location} | {exp.from} - {exp.to}
            </h3>
            <ul className="expBullets">
              {exp.bullets.map((bullet) => {
                return <li>{bullet}</li>;
              })}
            </ul>
          </span>
        );
      });
    }
  }

  render() {
    return (
      <fieldset className="expFieldset">
        <legend>{this.props.title}</legend>
        {this.renderWorkExp}
        <ExperienceInput newExperience={this.props.newExperience} />
      </fieldset>
    );
  }
}

export default ExperienceFieldset;
