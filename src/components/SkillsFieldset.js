import React, { Component } from 'react';

class SkillsFieldset extends Component {
  constructor(props) {
    super(props);

    this.renderSkills = this.renderSkills.bind(this);
  }

  renderSkills() {
    return this.props.skills.map((skill) => <li>{skill}</li>);
  }

  render() {
    return (
      <fieldset className="skillsFieldset">
        <legend>Skills</legend>
        <ul>
          {this.renderSkills}
          <li>
            <input
              type="text"
              name="newSkill"
              id="newSkill"
              placeholder="Fluent in Spanish"
            />
          </li>
        </ul>
        <button className="addSkill">+ Add New Skill</button>
      </fieldset>
    );
  }
}

export default SkillsFieldset;
