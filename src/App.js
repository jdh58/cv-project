import React, { Component } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import BackArrow from './assets/arrow_back_FILL0_wght400_GRAD0_opsz48.svg';
import './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formDisplay: '',
      cvDisplay: 'dead',
      personal: {},
      experiences: [],
      education: [],
      skills: [],
    };

    this.newExperience = this.newExperience.bind(this);
    this.newEducation = this.newEducation.bind(this);
    this.newSkill = this.newSkill.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.setState({
      formDisplay: '',
      cvDisplay: 'dead',
    });
  }

  submitForm(e) {
    e.preventDefault();

    let form = document.querySelector('form');

    /* Update the state to represent the submitted values,
    while setting the form to dead in the process, and showing
    the CV */
    this.setState({
      formDisplay: 'dead',
      cvDisplay: '',
      personal: {
        name: form.elements.name.value,
        title: form.elements.title.value,
        number: form.elements.number.value,
        email: form.elements.email.value,
        website: form.elements.website.value,
        profile: form.elements.profile.value,
      },
    });
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
      <div className="app">
        <Form
          display={this.state.formDisplay}
          skills={this.state.skills}
          experiences={this.state.experiences}
          education={this.state.education}
          newSkill={this.newSkill}
          newEducation={this.newEducation}
          newExperience={this.newExperience}
          submitForm={this.submitForm}
        />
        <div className={`back ${this.state.cvDisplay}`} onClick={this.goBack}>
          <img src={BackArrow} alt="" />
        </div>
        <CV
          display={this.state.cvDisplay}
          personal={this.state.personal}
          experiences={this.state.experiences}
          education={this.state.education}
          skills={this.state.skills}
        />
      </div>
    );
  }
}

export default App;
