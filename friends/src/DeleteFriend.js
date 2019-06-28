import React from 'react'
import { connect } from 'react-redux'
import { dataActions, deleteItem } from './actions'

import './App.css';
import { Badge } from 'reactstrap';
import PrivateRoute from './PrivateRoute'

import { BrowserRouter as Route } from "react-router-dom";



class DeleteFriend extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
        this.props.dataActions()
      }

    deleteItem = (event, friend) => {
        console.log(friend)

        event.preventDefault()
        this.props.deleteItem(friend)
    }
  
    render() {
    return(
        <div >
           <h1 className="friends-list">{this.props.friends.map((friend, key) => {
                return (
                    <h4 key={key} >
                        {friend.name}
                        <Badge onClick={(event) => this.deleteItem(event, friend)} color="danger" size="sm">delete</Badge>
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
    }
}

export default connect(mapState, {dataActions, deleteItem})(DeleteFriend)
