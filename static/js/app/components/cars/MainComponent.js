import React, { Component } from 'react';

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return
      <div>
        <h1>test out</h1>
        {this.props.children}
      </div>

  }
};

export default MainComponent;