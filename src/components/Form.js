import React, { Component } from 'react';
import PersonalFieldset from './PersonalFieldset';
import ExperienceFieldset from './ExperienceFieldset';
import EducationFieldset from './EducationFieldset';
import SkillsFieldset from './SkillsFieldset';
import '../styles/form.css';

class Form extends Component {
  render() {
    return (
      <form action="" className={this.props.display}>
        <h1 className="title">CV Generation Form</h1>
        <PersonalFieldset
          title="Personal Info"
          inputInfo={[
            ['name', 'text', 'Charles Johnson'],
            ['title', 'text', 'UI/UX Designer'],
            ['number', 'number', '(360) 555-1234'],
            ['email', 'email', 'abc123@example.com'],
            ['website', 'text', 'charlesjohnson.com'],
          ]}
        />
        <ExperienceFieldset
          experiences={this.props.experiences}
          newExperience={this.props.newExperience}
          title="Work Experience"
        />
        <EducationFieldset
          education={this.props.education}
          newEducation={this.props.newEducation}
          title="Education"
        />
        <SkillsFieldset
          skills={this.props.skills}
          newSkill={this.props.newSkill}
        />
        <span className="buttons">
          <button className="submitForm" onClick={this.props.submitForm}>
            Generate CV
          </button>
          <button className="resetForm">Reset</button>
        </span>
      </form>
    );
  }
}

export default Form;
