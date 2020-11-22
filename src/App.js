import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { getCurrentDate } from './Utils/getCurrentDate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
      <p>Getal: {Math.floor(Math.random() * 10)}</p>
      {console.log(getCurrentDate())}
      <Person name="Henk" children="Maarten">Leuk zeg</Person>
      <Person name="Pieter"><div>Ja<b>ja</b></div></Person>
      </div>
    );
// OF:
//    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!'));
  }
}

export default App;
