import React, { Component } from 'react';
import StateInput from './StateInput';

class EducationInput extends Component {
  constructor(props) {
    super(props);

    this.isRemote = this.isRemote.bind(this);
    this.writeEdu = this.writeEdu.bind(this);
  }

  isRemote(e) {
    let checkbox = document.querySelector('#eduRemoteCheck');

    let locationInputs = [
      document.querySelector('.eduFieldset #eduCity'),
      document.querySelector('.eduFieldset #eduState'),
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

  writeEdu(e) {
    e.preventDefault();

    this.props.newEducation();

    // Now wipe the edoucation field for the next entry
    let eduInputs = [
      document.querySelector('#degreeTitle'),
      document.querySelector('#uniName'),
      document.querySelector('#expFrom'),
      document.querySelector('#expTo'),
      document.querySelector('#expCity'),
      document.querySelector('#expState'),
    ];

    eduInputs.forEach((elem) => {
      elem.value = '';
    });

    // Now set the checkBox to unchecked and run isRemote
    document.querySelector('#eduRemoteCheck').checked = false;
    this.isRemote();
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
              name="eduRemoteCheck"
              id="eduRemoteCheck"
              onChange={this.isRemote}
            />
            <label htmlFor="eduRemoteCheck">Remote?</label>
          </span>
        </div>

        <div className="buttons">
          <button className="submit" onClick={this.writeEdu}>
            Add Education
          </button>
        </div>
      </section>
    );
  }
}

export default EducationInput;
