import React, { Component } from 'react';
import StateInput from './StateInput';

class ExperienceInput extends Component {
  constructor(props) {
    super(props);

    this.isRemote = this.isRemote.bind(this);
    this.writeJob = this.writeJob.bind(this);
  }

  isRemote(e) {
    let locationInputs = [
      document.querySelector('#expCity'),
      document.querySelector('#expState'),
    ];

    if (e.target.checked) {
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
  }

  render() {
    return (
      <section>
        <div className="field title">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Senior Project Manager"
          />
        </div>

        <div className="field dates">
          <span>
            <label htmlFor="expFrom">From:</label>
            <input type="date" name="expFrom" id="expFrom" />
          </span>
          <span>
            <label htmlFor="expTo">To:</label>
            <input type="date" name="expTo" id="expTo" />
          </span>
        </div>

        <div className="field location">
          <span className="field city">
            <label htmlFor="expCity">City:</label>
            <input type="text" id="expCity" />
          </span>
          <span className="state">
            <label htmlFor="expState">State:</label>
            <StateInput id="expState" />
          </span>
          <span className="remote">
            <input
              type="checkbox"
              name="remoteCheck"
              id="remoteCheck"
              onChange={this.isRemote}
            />
            <label htmlFor="remoteCheck">Remote?</label>
          </span>
        </div>

        <div className="field expDescrip">
          <label htmlFor="jobDescrip">Job Description:</label>
          <ul className="descripList">
            <input
              type="text"
              name="jobDescrip"
              id="jobDescrip"
              placeholder="Managed $3.1M project..."
            />
            <button className="addNewDescrip">+ Add</button>
          </ul>
        </div>

        <div className="buttons">
          <button className="submit" onClick={this.writeJob}>
            Add Job
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </section>
    );
  }
}

export default ExperienceInput;
