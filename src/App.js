import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// The root component
class App extends Component {
  // To render HTML code in the screen
  // This is not HTML code, It is JSX which works like HTML
  render() {
    return (
      <div className="App">
        <h1>This is a new application</h1>
        <p>This is really working</p>
        <Person/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;