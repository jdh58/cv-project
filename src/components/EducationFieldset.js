import React, { Component } from 'react';
import EducationInput from './EducationInput';

class EducationFieldset extends Component {
  constructor(props) {
    super(props);

    this.renderEducation = this.renderEducation.bind(this);
  }

  renderEducation() {
    let { education } = this.props;
    return education.map((edu) => {
      return (
        <span className="eduInfo">
          <h3 className="eduHead">{edu.degree}</h3>
          <p className="eduExtraInfo">
            {edu.location} | {edu.from} - {edu.to}
          </p>
        </span>
      );
    });
  }

  render() {
    return (
      <fieldset className="eduFieldset">
        <legend>{this.props.title}</legend>
        {this.renderEducation}
        <EducationInput />
      </fieldset>
    );
  }
}

export default EducationFieldset;
