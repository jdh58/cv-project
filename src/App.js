import React, { Component } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import './styles/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fillCV = this.fillCV.bind(this);
  }

  fillCV(details) {
    let cv = document.querySelector('.cv');
    cv.classList.add('alive');

    cv.querySelector('.header > h1').textContent = details.personal.name;

    console.log(details);
  }

  render() {
    return (
      <div className="app">
        <Form fillCV={this.fillCV} />
        <CV />
      </div>
    );
  }
}

export default App;
