import React from 'react'
import { connect } from 'react-redux'
import { dataActions, updateItem } from './actions'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Loader from 'react-loader-spinner'

import './App.css';
import { Badge } from 'reactstrap';
import PrivateRoute from './PrivateRoute'

import { BrowserRouter as Route } from "react-router-dom";



class UpdateFriend extends React.Component {
    constructor() {
      super();
      this.state = {
          friend: {
          name: '',
          age: null,
          email: '',
        }
      }
    }
    componentDidMount() {
        this.props.dataActions()
      }

    // updateItem = (event, friend) => {
    //     console.log(friend)

    //     event.preventDefault()
    //     this.props.updateItem(friend)
    // }
  
    render() {
    return(
        <div >
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Username</Label>
          <Input type="username" name="name" id="exampleEmail" placeholder="username..." 
                value={this.state.friends.name}
                onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="age" id="" placeholder="password..." 
                value={this.state.friends.age}
                onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="email" id="" placeholder="password..." 
                value={this.state.friends.email}
                onChange={this.handleChange}/>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
        </div>
    )       
    }

}
const mapState = state => {
    return {
        friends: state.friendReducer.friends,
    }
}

export default connect(mapState, {dataActions, updateItem})(UpdateFriend)
