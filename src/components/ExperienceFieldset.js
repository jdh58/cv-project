import React, { Component } from 'react';
import ExperienceInput from './ExperienceInput';

class ExperienceFieldset extends Component {
  constructor(props) {
    super(props);

    this.renderWorkExp = this.renderWorkExp.bind(this);
  }

  renderWorkExp() {
    let { experiences } = this.props;
    if (experiences.length > 0) {
      return experiences.map((exp) => {
        return (
          <span className="expInfo">
            <h3 className="expHead">
              {exp.title} | {exp.location.city}, {exp.location.state}
            </h3>
            <p className="expDateHead">
              {exp.from} - {exp.to}
            </p>
            <hr />
          </span>
        );
      });
    }
  }

  render() {
    return (
      <fieldset className="expFieldset">
        <legend>{this.props.title}</legend>
        <div className="pastWorks">{this.renderWorkExp()}</div>
        <ExperienceInput newExperience={this.props.newExperience} />
      </fieldset>
    );
  }
}

export default ExperienceFieldset;
