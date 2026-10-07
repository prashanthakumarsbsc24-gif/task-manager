import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Task Manager</h1>

        <p>
          Task Manager is a React.js mini project developed for
          CS3301 - Full Stack Development.
        </p>

        <h2>Project Features</h2>

        <ul>
          <li>Create tasks</li>
          <li>View tasks</li>
          <li>Complete tasks</li>
          <li>Delete tasks</li>
          <li>Set task priority</li>
          <li>Responsive user interface</li>
          <li>React Router navigation</li>
        </ul>

        <h2>Technologies Used</h2>

        <ul>
          <li>React.js</li>
          <li>React Router</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>Express.js</li>
        </ul>
      </div>
    );
  }
}

export default About;