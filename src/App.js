import './styles/App.css';
import './styles/components.css';
import './styles/information.css'
import React, { Component } from "react";
import Information from './components/Information';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (
      <div className = "appDiv">
        <Information ></Information>
        <Header name="Education"></Header>
        <Education></Education>
        <Header name="Experience"></Header>
        <Experience></Experience>
        <Header name="Activities"></Header>
        <Experience></Experience>
        <Header name="Skills"></Header>
        <Skills></Skills>
      </div>
    );
  }
}

export default App;
