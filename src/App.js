import React from 'react';
import logo from './logo.svg';
import './App.css';

import Output from './Output';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      names: ['matt', 'judah', 'chelsey']

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <ul>
            {
              this.state.names.map(name => <li>{name}</li>)
            }
          </ul> */}
          <input 
            onChange={ this._updateInputText }
          />
          <Output 
            text={this.state.inputText}
          />
          <Output 
            text={this.state.inputText}
            transform="l33t"
          />
        </header>
      </div>
    );
  }

  _updateInputText = (e) => {
    this.setState({
      inputText: e.target.value
    }, () => {console.log(`After setState, State is now ${this.state.inputText}`)})
  }
}

export default App;
