import React, { Component } from 'react';
import StateInput from './StateInput';

class ExperienceInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descrips: [],
    };

    this.isRemote = this.isRemote.bind(this);
    this.writeJob = this.writeJob.bind(this);
    this.addDescrip = this.addDescrip.bind(this);
    this.renderDescrip = this.renderDescrip.bind(this);
  }

  isRemote() {
    let checkbox = document.querySelector('#expRemoteCheck');

    let locationInputs = [
      document.querySelector('#expCity'),
      document.querySelector('#expState'),
    ];

    if (checkbox.checked) {
      locationInputs.forEach((input) => {
        input.disabled = true;
      });
    } else {
      locationInputs.forEach((input) => {
        input.disabled = false;
      });
    }
  }

  writeJob(e) {
    e.preventDefault();

    // This writes our job to the state of the form
    this.props.newExperience();

    // All this below clears the work form for the next entry
    let expFormElements = [
      document.querySelector('#jobTitle'),
      document.querySelector('#expFrom'),
      document.querySelector('#expTo'),
      document.querySelector('#expCity'),
      document.querySelector('#expState'),
      document.querySelector('#jobDescrip'),
    ];

    // Disable the checkmark and trigger the event
    if (document.querySelector('#expRemoteCheck').checked) {
      document.querySelector('#expRemoteCheck').checked = false;
      this.isRemote();
    }

    expFormElements.forEach((elem) => {
      elem.value = '';
    });

    // Now clear the job description list
    document.querySelectorAll('.descripList > li').forEach((elem) => {
      elem.remove();
    });
  }

  addDescrip(e) {
    e.preventDefault();

    let currentNewJob = document.querySelector('#jobDescrip');
    this.setState({
      descrips: [...this.state.descrips, <li>{currentNewJob.value}</li>],
    });
    currentNewJob.value = '';
  }

  renderDescrip() {
    let descripList = [];
    this.state.descrips.forEach((elem) => {
      descripList.push(elem);
    });

    return descripList;
  }

  render() {
    return (
      <section className={'' | this.props.expClass}>
        <div className="field title">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Senior Project Manager"
            defaultValue={'' | this.props.jobTitle}
          />
        </div>

        <div className="field dates">
          <span>
            <label htmlFor="expFrom">From:</label>
            <input
              type="date"
              name="expFrom"
              id="expFrom"
              defaultValue={'' | this.props.from}
            />
          </span>
          <span>
            <label htmlFor="expTo">To:</label>
            <input
              type="date"
              name="expTo"
              id="expTo"
              defaultValue={'' | this.props.to}
            />
          </span>
        </div>

        <div className="field location">
          <span className="field city">
            <label htmlFor="expCity">City:</label>
            <input
              type="text"
              name="expCity"
              id="expCity"
              defaultValue={'' || this.props.location.city}
            />
          </span>
          <span className="state">
            <label htmlFor="expState">State:</label>
            <StateInput
              id="expState"
              defaultValue={'' | this.props.location.state}
            />
          </span>
          <span className="remote">
            <input
              type="checkbox"
              name="expRemoteCheck"
              id="expRemoteCheck"
              onChange={this.isRemote}
            />
            <label htmlFor="remoteCheck">Remote?</label>
          </span>
        </div>

        <div className="field expDescrip">
          <label htmlFor="jobDescrip">Job Description:</label>
          <ul className="descripList">
            {this.renderDescrip()}
            <input
              type="text"
              name="jobDescrip"
              id="jobDescrip"
              placeholder="Managed $3.1M project..."
            />
            <button className="addNewDescrip" onClick={this.addDescrip}>
              + Add
            </button>
          </ul>
        </div>

        <div className="buttons">
          <button className="submit" onClick={this.writeJob}>
            Add Job
          </button>
        </div>
      </section>
    );
  }
}

export default ExperienceInput;
