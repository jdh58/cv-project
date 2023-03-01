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
      personal: {},
      experiences: [],
      education: [],
      skills: [],
    };

    this.newExperience = this.newExperience.bind(this);
    this.newEducation = this.newEducation.bind(this);
    this.newSkill = this.newSkill.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();

    // First, hide the form
    let form = document.querySelector('form');
    form.classList.add('dead');

    // Now, update the state to represent the submitted values
    this.setState({
      personal: {
        name: form.elements.name.value,
        title: form.elements.title.value,
        number: form.elements.number.value,
        email: form.elements.email.value,
        website: form.elements.website.value,
      },
    });

    // Fill the CV
    this.props.fillCV(this.state);
  }

  newExperience() {
    let form = document.querySelector('form');

    this.setState({
      experiences: [
        ...this.state.experiences,
        {
          title: form.elements.jobTitle.value,
          from: form.elements.expFrom.value,
          to: form.elements.expTo.value,
          location: (() => {
            if (form.elements.expRemoteCheck.checked) {
              return 'Remote';
            } else {
              return {
                city: form.elements.expCity.value,
                state: form.elements.expState.value,
              };
            }
          })(),
          jobDescrip: (() => {
            let descrips = [];
            let descripElements = document.querySelectorAll(
              '.expFieldset .descripList > li'
            );
            console.log(descripElements);
            descripElements.forEach((elem) => {
              descrips.push(elem.textContent);
            });
            return descrips;
          })(),
        },
      ],
    });
  }

  newEducation() {
    let form = document.querySelector('form');

    this.setState({
      education: [
        ...this.state.education,
        {
          degree: form.elements.degreeTitle.value,
          uni: form.elements.uniName.value,
          from: form.elements.eduFrom.value,
          to: form.elements.eduTo.value,
          location: (() => {
            if (form.elements.eduRemoteCheck.checked) {
              return 'Remote';
            } else {
              return `${form.elements.eduCity.value}, ${form.elements.eduState.value}`;
            }
          })(),
        },
      ],
    });
  }

  newSkill() {
    let skillInput = document.querySelector('#newSkill');

    this.setState({
      skills: [...this.state.skills, skillInput.value],
    });

    // Now wipe the skills thing for the future
    skillInput.value = '';
  }

  render() {
    return (
      <form action="">
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
          experiences={this.state.experiences}
          newExperience={this.newExperience}
          title="Work Experience"
        />
        <EducationFieldset
          education={this.state.education}
          newEducation={this.newEducation}
          title="Education"
        />
        <SkillsFieldset skills={this.state.skills} newSkill={this.newSkill} />
        <span className="buttons">
          <button className="submitForm" onClick={this.submitForm}>
            Generate CV
          </button>
          <button className="resetForm">Reset</button>
        </span>
      </form>
    );
  }
}

export default Form;
