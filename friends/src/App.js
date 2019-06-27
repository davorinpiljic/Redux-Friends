import React from 'react';
// import logo from './logo.jpg';
import './App.css';
import Component from './component'
import Login from './Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          REDUX APPLICATION
        </a>
        <Component />
        <Login />
      </header>
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
