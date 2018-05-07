import React, { Component } from 'react';
import SaleBox from './Salebox.jsx';

class MainContent extends Component {

  render() {
    return (
      <div id='MainContent'>

        <div className='sectionOne parallax'>
        <h1>section one</h1>
        </div>

        <div className='block red' id='red'>
          <nav className='pushpin-nav red' data-target='red'>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">project 1</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
              <br/>
              <p>
                position: {this.props.newPosition()}
              </p>
              <form>
                <input type='text'
                       placeholder='new position'
                       onChange={this.props.updatePosition}/>
                <button type='submit'>update position</button>
              </form>
            </div>
          </nav>
        </div>

        <div className='block green' id='green'>
          <nav className='pushpin-nav green' data-target='green'>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">project 2</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className='block blue' id='blue'>
          <nav className='pushpin-nav blue' data-target='blue'>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">project 3</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className='sectionTwo'>
          <h1>section two</h1>
        </div>
                <div className='sectionTwo'>
          <h1>section two</h1>
        </div>

      </div>
    )
  }

}

export default MainContent;