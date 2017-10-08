"use strict";


import React, { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MainContent from './components/MainContent.jsx';

class App extends Component {

  constructor(props) {
    super(props)
      this.state = {
        color :
          "blackkkkk"
      }
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }

}

export default App;