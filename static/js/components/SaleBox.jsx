import React, { Component } from 'react';

class SaleBox extends Component {

  render() {
    return (
      <div className="card">
        <div className="pdctImg">
          <img className="activator" src="/static/images/contact-bg.jpg" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
          <p><a href="#">This is a link</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
          <p>NOOO INFO</p>
        </div>
      </div>

    )
  }

}

export default SaleBox;