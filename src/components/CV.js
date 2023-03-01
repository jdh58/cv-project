import React, { Component } from 'react';
import '../styles/cv.css';

class CV extends Component {
  render() {
    return (
      <div className="cv">
        <div className="top">
          <span className="header">
            <h1>Charles Johnson</h1>
            <p>UI/UX Designer</p>
          </span>
          <div className="personalInfo">
            <span className="infoblock">
              <p className="question">Phone:</p>
              <p className="answer">(360)-555-2123</p>
            </span>
            <span className="infoblock">
              <p className="question">Email:</p>
              <p className="answer">abc123@example.com</p>
            </span>
            <span className="infoblock">
              <p className="question">Website:</p>
              <p className="answer">charlesjohnson.com</p>
            </span>
          </div>
          <div className="image"></div>
        </div>

        <div className="profile">
          <h3>Career Profile:</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta
            id quidem quae delectus, ea deserunt rem consequuntur nesciunt,
            doloribus veritatis autem debitis ex, possimus impedit facere atque
            qui minus.
          </p>
        </div>

        <span className="subheader">
          <img src="" alt="" />
          <h2>Experience</h2>
        </span>
        <div className="experience">
          <div className="job">
            <span className="first">
              <p className="jobDat">2013 - 2020</p>
            </span>
            <span className="second">
              <h3 className="jobTit">Senior PR Specialist</h3>
            </span>
            <span className="third">
              <p className="location">London, England</p>
            </span>
            <span className="fourth">
              <ul className="jobDescp">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li>
                  Temporibus esse odit commodi dolores enim natus voluptate.
                </li>
                <li>
                  Repellat voluptate non alias officiis veritatis animi dolor.
                </li>
                <li>Nobis totam repellendus itaque quas.</li>
              </ul>
            </span>
          </div>

          <div className="job">
            <span className="first">
              <p className="jobDat">2013 - 2020</p>
            </span>
            <span className="second">
              <h3 className="jobTit">Senior PR Specialist</h3>
            </span>
            <span className="third">
              <p className="location">London, England</p>
            </span>
            <span className="fourth">
              <ul className="jobDescp">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li>
                  Temporibus esse odit commodi dolores enim natus voluptate.
                </li>
                <li>
                  Repellat voluptate non alias officiis veritatis animi dolor.
                </li>
                <li>Nobis totam repellendus itaque quas.</li>
              </ul>
            </span>
          </div>
        </div>

        <span className="subheader">
          <img src="" alt="" />
          <h2>Education</h2>
        </span>
        <div className="education">
          <div className="edu">
            <p className="date">2020 - 2024</p>
            <h3 className="degree">Bachelor of Science in Biology</h3>
            <span className="second">
              <p className="uni">Michigan State University</p>
              <p className="location">Guangdong, China</p>
            </span>
          </div>
          <div className="edu">
            <p className="date">2018 - 2020</p>
            <h3 className="degree">Associate of Science in Poopy</h3>
            <span className="second">
              <p className="uni">Michigan State University</p>
              <p className="location">Guangdong, China</p>
            </span>
          </div>
        </div>

        <span className="subheader">
          <img src="" alt="" />
          <h2>Skills</h2>
        </span>
        <ul className="skills">
          <li>Can eat poo</li>
          <li>Large fan of chocolate ponies</li>
          <li>Candy man came to town yesterday</li>
          <li>Large lover of burgers</li>
        </ul>
      </div>
    );
  }
}

export default CV;
