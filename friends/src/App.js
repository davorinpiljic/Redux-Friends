import React from 'react';
import logo from './logo.jpg';
import './App.css';
import Component from './component'
import Login from './Login'
import FriendsList from './FriendsList'
import PrivateRoute from './PrivateRoute'
import DeleteFriend from './DeleteFriend'
import UpdateFriend from './UpdateFriend'
import AddFriend from './AddFriend'




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
        <Navbar color="warning" light>
          <NavbarBrand href="/" className="mr-auto">REDUX FRIENDS</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav  navbar>
                <Link to="/">Home</Link>
                <Link to="/protected">Friends</Link>
                <Link to="/login">Login</Link>
            </Nav>
          </Collapse>
        </Navbar>
      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/protected/" component={FriendsList} />
      <PrivateRoute exact path="/protected/deletefriend" component={DeleteFriend} />
      <PrivateRoute exact path="/protected/updatefriend" component={UpdateFriend} />
      <PrivateRoute exact path="/protected/addfriend" component={AddFriend} />

    </div>
  );
  }
}

