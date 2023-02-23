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
          <h3 className="eduUni">{edu.uni}</h3>
          <p className="eduExtraInfo">
            {edu.location} | {edu.from} - {edu.to}
          </p>
          <hr />
        </span>
      );
    });
  }

  render() {
    return (
      <fieldset className="eduFieldset">
        <legend>{this.props.title}</legend>
        <div> {this.renderEducation()}</div>
        <EducationInput newEducation={this.props.newEducation} />
      </fieldset>
    );
  }
}

export default EducationFieldset;
