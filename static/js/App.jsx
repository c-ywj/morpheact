"use strict";


import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';

class App extends Component {

  constructor() {
    super()
      this.state = {
        color : "blackkkkk",
        name : "cy",
        position: "777"
    }
    this.positionUpdater = this.positionUpdater.bind(this);
    this.newPosition     = this.newPosition.bind(this);
  }

  componentWillMount() {
    console.log('component will mount..');
  }

  positionUpdater(ev) {
    ev.preventDefault();
    let value = ev.target.value;
    console.log(`this is the ev value ${value}`);
    this.setState({
      position: value
    })
  }

  newPosition() {
    let newValue = this.state.position;
    console.log(newValue);
    return (
      <span>{newValue}</span>
    );
  }


  render() {
    console.log('rendered');
    console.log(this.state);
    return (
      <div>
        <Header />
        <MainContent
          currentValue = {this.state.position}
          updatePosition = {this.positionUpdater}
          newPosition = {this.newPosition}/>
        <Footer />
      </div>
    )
  }

}

export default App;