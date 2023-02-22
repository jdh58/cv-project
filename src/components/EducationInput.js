import React, { Component } from 'react';
import StateInput from './StateInput';

class EducationInput extends Component {
  constructor(props) {
    super(props);

    this.isRemote = this.isRemote.bind(this);
  }

  isRemote(e) {
    let locationInputs = [
      document.querySelector('.eduFieldset #city'),
      document.querySelector('.eduFieldset #eduState'),
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

  render() {
    return (
      <section>
        <div className="field title">
          <label htmlFor="degreeTitle">Degree Title:</label>
          <input
            type="text"
            name="degreeTitle"
            id="degreeTitle"
            placeholder="B.S. in Civil Engineering"
          />
        </div>
        <div className="field uni">
          <label htmlFor="uniName">University:</label>
          <input
            type="text"
            name="uniName"
            id="uniName"
            placeholder="Michigan State University"
          />
        </div>

        <div className="field dates">
          <span>
            <label htmlFor="eduFrom">From:</label>
            <input type="date" id="eduFrom" />
          </span>
          <span>
            <label htmlFor="eduTo">To:</label>
            <input type="date" id="eduTo" />
          </span>
        </div>

        <div className="field location">
          <span className="field city">
            <label htmlFor="eduCity">City:</label>
            <input type="text" id="eduCity" />
          </span>
          <span className="state">
            <label htmlFor="eduState">State:</label>
            <StateInput id="eduState" />
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

        <div className="buttons">
          <button className="submit">Add Education</button>
          <button className="cancel">Cancel</button>
        </div>
      </section>
    );
  }
}

export default EducationInput;
