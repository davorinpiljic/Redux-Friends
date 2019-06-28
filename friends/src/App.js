import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Component from './component'
import Login from './Login'
import FriendsList from './FriendsList'
import PrivateRoute from './PrivateRoute'
import DeleteFriend from './DeleteFriend'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class App extends React.Component {
    state = {
      collapsed: true,
    }

  toggleNavbar = event => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
  return (
    <div className="App">
        <Navbar color="danger" light>
          <NavbarBrand href="/" className="mr-auto">REDUX FRIENDS</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav  navbar>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/protected">Friends</NavLink>
                <NavLink to="/login">Login</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/protected/" component={FriendsList} />
      <PrivateRoute exact path="/protected/deletefriend" component={DeleteFriend} />
    </div>
  );
  }
}

