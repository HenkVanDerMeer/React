import React, { Component } from 'react';
import './App.css';
import Login from './Login/Login';
import Main from './Main/Main';

class App extends Component {
  state = {
    isLoggedIn: false
  };

  login = () => {
    const isLoggedIn = this.state.isLoggedIn;
    this.setState( { isLoggedIn : !isLoggedIn } );
  }

  render() {
    return (
      <div className="App">
          <h1>Finan 0.01</h1>
          <Login class="login"
            loggedIn={this.state.isLoggedIn}
            click={this.login}
          />
          <Main class="body"
            loggedIn={this.state.isLoggedIn}
            click={this.login}
          />
      </div>
    );
  }
}

export default App;
