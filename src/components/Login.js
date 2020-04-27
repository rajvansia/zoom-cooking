import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Routes from '../routes';
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'


function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BrowserRouter>
  <Link to="/login">test</Link>
        </BrowserRouter>
      
      </header>
    </div>
  );
}

export default Login;
