"use strict";


import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';

class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        color : "blackkkkk",
        name : "cy",
        pics: {
        }
    }
  }

  userInput(ev) {
    this.setState({
      name: ev.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <MainContent userInput={this.userInput.bind(this)}
                     currentName={this.state.name}
         />
        <Footer />
      </div>
    )
  }

}

export default App;