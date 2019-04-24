import React from 'react';
import logo from './logo.svg';
import './App.css';

import Output from './Output';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input 
            onChange={ (e) => {
              console.log(e.target.value)
            } }
          />
          <Output 
            text="does it work?"
          />
        </header>
      </div>
    );
  }
}

export default App;
