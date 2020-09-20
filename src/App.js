import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

// The root component
class App extends Component {

  // Javascript Object
  state = {
    persons: [
      { name: 'David', age: 28 },
      { name: 'Stephen', age: 29 },
      { name: 'Natasha', age: 32 }
    ],
    otherState: 'some other value'
  }

  // It does not override the old state. 
  // Instead it will merge the old state with a new one
  switchNameHandler = () => {
    console.log("Name changed");
    this.setState({
      persons: [
        { name: 'Prajesh', age: 33 },
        { name: 'Stephen', age: 29 },
        { name: 'Stephanie', age: 22 }
      ]
    });
  }

  // To render HTML code in the screen
  // This is not HTML code, It is JSX which works like HTML
  render() {
    return (
      <div className="App">
        <p>This is really working</p>

        <button onClick={this.switchNameHandler}>Switch name</button>

        {this.state.persons.map((value, index) => {
          return <Person name={this.state.persons[index].name} age={this.state.persons[index].age} />
        })}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;