import React, { Component } from 'react';
import SaleBox from './Salebox.jsx';

class MainContent extends Component {

  render() {
    return (
      <div>
        <div className="parallax-container">
          <div className="parallax"><img src='/static/images/parallax1.jpg'/></div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Parallax</h2>
            <SaleBox />
            <input onChange={this.props.userInput} />
            <p>{this.props.currentName}</p>
            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img src="/static/images/parallax2.jpg"/></div>
        </div>
      </div>
    )
  }

}

export default MainContent;