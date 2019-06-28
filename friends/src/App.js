import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Component from './component'
import Login from './Login'
import FriendsList from './FriendsList'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/friendslist">Friends list</Link>
        <Link to="/login">Login</Link>
      </header>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/friendslist" component={FriendsList} />

    </div>
  );
}

export default App;
