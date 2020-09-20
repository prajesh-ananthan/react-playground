import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// The root component
class App extends Component {

  // Javascript Object
  state = {
    persons: [
      { name: 'Prajesh', age: 28 },
      { name: 'Stephen', age: 29 },
      { name: 'Natasha', age: 32 }
    ]
  }

  switchNameHandler() {
    console.log("Name changed");
  }

  // To render HTML code in the screen
  // This is not HTML code, It is JSX which works like HTML
  render() {
    return (
      <div className="App">
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;