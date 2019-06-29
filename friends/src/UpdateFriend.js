import React from 'react'
import { connect } from 'react-redux'
import { dataActions, updateItem, friendSubmit } from './actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


import './App.css';
import { Badge } from 'reactstrap';
import PrivateRoute from './PrivateRoute'

import { BrowserRouter as Route } from "react-router-dom";



class UpdateFriend extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          friend: {
              id: null,
              name: '',
              age: null,
              email: '',
          }
      }
    }
    componentDidMount() {
        this.props.dataActions()
      }

    handleChange = event => {
        this.setState({
            friend: {
                ...this.state.friend,
                [event.target.name]: event.target.value,
                id: this.props.activeFriend.id,
            }
        })
        console.log(this.state.friend)
    }

    handleUpdateSubmit = (event, friend) => {
        this.props.friendSubmit(this.state.friend)


    }
    
    updateItem = (event, friend) => {
        console.log(friend)

        event.preventDefault()
        this.props.updateItem(friend)

    }
    
    render() {
        if(this.props.updatingFriend) {
            return(
                <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="exampleEmail" className="mr-sm-2">Username</Label>
                  <Input type="name" name="name" id="exampleEmail" placeholder={this.props.activeFriend.name} 
                        onChange={this.handleChange}
                        value={this.state.friend.name}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">Password</Label>
                  <Input type="name" name="age" id="" placeholder={this.props.activeFriend.age} 
                        onChange={this.handleChange}
                        value={this.state.friend.age}/>
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Label for="examplePassword" className="mr-sm-2">Password</Label>
                  <Input type="name" name="email" id="" placeholder={this.props.activeFriend.email} 
                        onChange={this.handleChange}
                        value={this.state.friend.email}/>
                </FormGroup>
                <Button onClick={this.handleUpdateSubmit}>Submit</Button>
              </Form>
            )
        }
    return(
        <div >
           <h1 className="friends-list">{this.props.friends.map((friend, key) => {
                return (
                    <h4 key={key} >
                        {friend.name}
                        <Badge onClick={(event) => this.updateItem(event, friend)} color="secondary" size="sm">update</Badge>
                    </h4>
                )
            })}</h1>
        </div>
    )       
    }

}
const mapState = state => {
    return {
        deletingFriend: state.friendReducer.deletingFriend,
        friends: state.friendReducer.friends,
        updatingFriend: state.friendReducer.updatingFriend,
        activeFriend: state.friendReducer.activeFriend,
    }
}

export default connect(mapState, {dataActions, updateItem, friendSubmit})(UpdateFriend)
