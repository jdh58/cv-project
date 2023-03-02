import React, { Component } from 'react';
import '../styles/cv.css';

class CV extends Component {
  constructor(props) {
    super(props);

    this.fillJobs = this.fillJobs.bind(this);
    this.fillEdu = this.fillEdu.bind(this);
    this.fillSkills = this.fillSkills.bind(this);
  }

  fillJobs() {
    return this.props.experiences.map((job) => {
      let descrips = job.jobDescrip.map((descrip) => <li>{descrip}</li>);

      return (
        <div className="job">
          <span className="first">
            <p className="jobDat">
              {job.from} - {job.to}
            </p>
          </span>
          <span className="second">
            <h3 className="jobTit">{job.title}</h3>
          </span>
          <span className="third">
            <p className="location">
              {job.location.city}, {job.location.state}
            </p>
          </span>
          <span className="fourth">
            <ul className="jobDescp">{descrips}</ul>
          </span>
        </div>
      );
    });
  }

  fillEdu() {
    return this.props.education.map((edu) => {
      return (
        <div className="edu">
          <p className="date">
            {edu.from} - {edu.to}
          </p>
          <h3 className="degree">{edu.degree}</h3>
          <span className="second">
            <p className="uni">{edu.uni}</p>|
            <p className="location">{edu.location}</p>
          </span>
        </div>
      );
    });
  }

  fillSkills() {
    return this.props.skills.map((skill) => {
      return <li>{skill}</li>;
    });
  }

  render() {
    return (
      <div className={`cv ${this.props.display}`}>
        <div className="top">
          <span className="header">
            <h1>{this.props.personal.name}</h1>
            <p>{this.props.personal.title}</p>
          </span>
          <div className="personalInfo">
            <span className="infoblock">
              <p className="question">Phone:</p>
              <p className="answer">{this.props.personal.number}</p>
            </span>
            <span className="infoblock">
              <p className="question">Email:</p>
              <p className="answer">{this.props.personal.email}</p>
            </span>
            <span className="infoblock">
              <p className="question">Website:</p>
              <p className="answer">{this.props.personal.website}</p>
            </span>
          </div>
          <div className="image"></div>
        </div>

        <div className="profile">
          <h3>Career Profile:</h3>
          <p>{this.props.personal.profile}</p>
        </div>

        <span className="subheader">
          <img src="" alt="" />
          <h2>Experience</h2>
        </span>
        <div className="experience">{this.fillJobs()}</div>

        <span className="subheader">
          <img src="" alt="" />
          <h2>Education</h2>
        </span>
        <div className="education">{this.fillEdu()}</div>

        <span className="subheader">
          <img src="" alt="" />
          <h2>Skills</h2>
        </span>
        <ul className="skills">{this.fillSkills()}</ul>
      </div>
    );
  }
}

export default CV;
