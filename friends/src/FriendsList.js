import React from 'react'
import { connect } from 'react-redux'
import { dataActions } from './actions'
import DeleteFriend from './DeleteFriend'
import UpdateFriend from './UpdateFriend'
import AddFriend from './AddFriend'
import PrivateRoute from './PrivateRoute'

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
        <Nav>
          <NavItem>
            <Link to="/protected/addfriend">Add New Friend</Link>
          </NavItem>
          <NavItem>
            <Link to="/protected/updatefriend">Update Existing Friend</Link>
          </NavItem>
          <NavItem>
            <Link to="/protected/deletefriend">Delete Friend</Link>
          </NavItem>

        </Nav>
            <h1 className="friends-list">{this.props.friends.map((friend, key) => {
                return (
                    <h4 key={key}>{friend.name}</h4>
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

export default connect(mapState, {dataActions})(FriendsList)
