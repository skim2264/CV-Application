import './styles/App.css';
import React, { Component } from "react";
import Information from './components/Information';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Activities from './components/Activities';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className = "appDiv">
        <Information></Information>
        <Header></Header>
        <Education></Education>
        <Header></Header>
        <Experience></Experience>
        <Header></Header>
        <Skills></Skills>
        <Header></Header>
        <Activities></Activities>
      </div>
    );
  }
}

export default App;
