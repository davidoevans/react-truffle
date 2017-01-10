import React, { Component } from 'react';
import Web3 from 'web3'
import logo from './logo.svg';
import './App.css';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-Truffle</h2>
        </div>
        <p className="App-intro">
          <b>Web3 Version: </b>{web3.version.api}
        </p>
      </div>
    );
  }
}

export default App;
