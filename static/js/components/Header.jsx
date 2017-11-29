import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header id="home">
        <div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active" style={{backgroundImage: 'url(/static/images/gt3rs.jpg)'}}>
              <div className="caption">
                <h1 className="animated fadeInLeftBig">Welcome to <span>Oxygen</span></h1>
                <p className="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
                <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
              </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(/static/images/2.jpg)'}}>
              <div className="caption">
                <h1 className="animated fadeInLeftBig">Say Hello to <span>Oxygen</span></h1>
                <p className="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
                <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
              </div>
            </div>
            <div className="item" style={{backgroundImage: 'url(/static/images/3.jpg)'}}>
              <div className="caption">
                <h1 className="animated fadeInLeftBig">We are <span>Creative</span></h1>
                <p className="animated fadeInRightBig">Bootstrap - Responsive Design - Retina Ready - Parallax</p>
                <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">Start now</a>
              </div>
            </div>
          </div>
          <a className="left-control" href="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
          <a className="right-control" href="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></a>

          <a id="tohash" href="#services"><i className="fa fa-angle-down"></i></a>
        </div>
      </header>
    )
  }

}

export default Header;