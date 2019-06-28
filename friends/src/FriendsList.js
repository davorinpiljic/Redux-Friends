import React from 'react'
import { connect } from 'react-redux'
import { dataActions } from './actions'

import { BrowserRouter as Route } from "react-router-dom";



class FriendsList extends React.Component {
    constructor() {
      super();
    }
  
    componentDidMount() {
      this.props.dataActions()
    }
  
    render() {
    return(
        <div>
            <h1>{this.props.friends}</h1>
        </div>
    )       
    }

}

const mapState = state => {
    return {
        friends: state.friendReducer.friends,
        isLoggingIn: state.friendReducer.isLoggingIn
    }
}

export default connect(mapState, {dataActions})(FriendsList)
