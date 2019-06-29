import React from 'react'
import { connect } from 'react-redux'
import logo from './logo.jpg';

import { dataActions, updateItem, addFriend, friendSubmit } from './actions'
import DeleteFriend from './DeleteFriend'
import UpdateFriend from './UpdateFriend'
import AddFriend from './AddFriend'
import PrivateRoute from './PrivateRoute'
import { Card, CardTitle, CardText } from 'reactstrap';

import Loader from 'react-loader-spinner'
import { Badge, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';


import { BrowserRouter as Route, Link } from "react-router-dom";



class FriendsList extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      this.props.dataActions()
    }
  
    render() {
        if (this.props.isFetchingData) {return(
            <Loader type="ThreeDots" color="red" height={80} width={80} />
            )   
        }
    return(
        <div >
           <div className="protectednav">
        <Nav>

          <NavItem className="navs">
            <Link to="/protected/addfriend">Add</Link>
          </NavItem>
          <NavItem className="navs">
            <Link to="/protected/updatefriend">Update</Link>
          </NavItem>
          <NavItem className="navs">
            <Link to="/protected/deletefriend">Delete</Link>
          </NavItem>

        </Nav>
        </div>
            <h1 className="friends-list">{this.props.friends.map((friend, key) => {
                return (
                  <Card key={key} body inverse color="warning">
                    <img src={logo} />
                  <CardTitle>{`Name: ${friend.name}`}</CardTitle>
                  <CardText>{`Age: ${friend.age}`}</CardText>
                  <CardText>{`Height: ${friend.email}`}</CardText>
                  {/* <Button onClick={(event) => this.changeUpdate(event, friend)} color="secondary" size="sm">Edit Friend</Button>
                  <Button color="danger" onClick={(event) => this.deleteSmurf(event, friend)} size="sm">Delete Friend</Button> */}
              </Card>
                )
            })}</h1>
        </div>
    )       
    }

}
const mapState = state => {
    return {
        friends: state.friendReducer.friends,
        isLoggingIn: state.friendReducer.isLoggingIn,
        isFetchingData: state.friendReducer.isFetchingData,
    }
}

export default connect(mapState, {dataActions, updateItem, addFriend, friendSubmit})(FriendsList)
