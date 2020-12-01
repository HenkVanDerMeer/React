import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { getCurrentDate } from './Utils/dateUtils';
import {getRandomNumber } from './Utils/numberUtils';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    text: 'Test',
    username: 'Boris'
  };

  changeState = () => {
    this.setState({
        text: 'Changed!',
        username: 'Loes'
    });
  }

  render() {
    return (
      <div className="App">
          <h1>Hallo daar!</h1>
          <p>Zomaar een getal tussen 0 en 10: {getRandomNumber()}</p>
          {console.log(getCurrentDate())}
          <Person name="Maarten">Leuk zeg</Person>
          <Person name="Pieter">Ja<b>ja</b></Person>
          <UserInput></UserInput>
          <UserOutput
            click={this.changeState}
            username={this.state.username}>Stukje tekst</UserOutput>
          <button onClick={this.changeState}>Change user</button>
      </div>
    );
// OF:
//    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!'));
  }
}

export default App;
