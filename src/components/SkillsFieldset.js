import React, { Component } from 'react';

class SkillsFieldset extends Component {
  constructor(props) {
    super(props);

    this.renderSkills = this.renderSkills.bind(this);
    this.writeSkill = this.writeSkill.bind(this);
  }

  renderSkills() {
    return this.props.skills.map((skill) => <li>{skill}</li>);
  }

  writeSkill(e) {
    e.preventDefault();

    this.props.newSkill();
  }

  render() {
    return (
      <fieldset className="skillsFieldset">
        <legend>Skills</legend>
        {this.renderSkills()}
        <input
          type="text"
          name="newSkill"
          id="newSkill"
          placeholder="Fluent in Spanish"
        />
        <button className="addSkill" onClick={this.writeSkill}>
          + Add New Skill
        </button>
      </fieldset>
    );
  }
}

export default SkillsFieldset;
