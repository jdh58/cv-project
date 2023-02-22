import React, { Component } from 'react';
import PersonalFieldset from './PersonalFieldset';
import ExperienceFieldset from './ExperienceFieldset';
import EducationFieldset from './EducationFieldset';
import SkillsFieldset from './SkillsFieldset';
import '../styles/form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      education: [],
    };

    this.newExperience = this.newExperience.bind(this);
  }

  newExperience() {
    let form = document.querySelector('form');

    this.setState({
      experiences: [
        ...this.state.experiences,
        {
          title: form.elements.jobTitle.value,
        },
      ],
    });
  }

  render() {
    return (
      <form action="">
        <h1 className="title">CV Generation Form</h1>
        <PersonalFieldset
          title="Personal Info"
          inputInfo={[
            ['name', 'text', '[a-zA-Z0-9]+', 'Charles Johnson'],
            ['number', 'number', '', '(360) 555-1234'],
            ['email', 'email', '', 'abc123@example.com'],
            ['title', 'text', '', 'UI/UX Designer'],
            ['website', 'text', '', 'charlesjohnson.com'],
          ]}
        />
        <ExperienceFieldset
          experiences={this.state.experiences}
          newExperience={this.newExperience}
          title="Work Experience"
        />
        <EducationFieldset education={this.state.education} title="Education" />
        <SkillsFieldset skills={this.state.skills} />
        <span className="buttons">
          <button className="submitForm">Generate CV</button>
          <button className="resetForm">Reset</button>
        </span>
      </form>
    );
  }
}

export default Form;
