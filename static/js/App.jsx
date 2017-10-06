import React, { Component } from 'react';
import CompTwo from './components/CompTwo.jsx';

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
        <CompTwo name={this.state.color}/>
      </div>
    )
  }

}

export default App;