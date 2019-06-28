import React from 'react'
import { connect } from 'react-redux'
import './App.css';

import { BrowserRouter as Route } from "react-router-dom";



class UpdateFriend extends React.Component {
    constructor() {
      super();
    }

  
    render() {
    return(
        <div >

        </div>
    )       
    }

}
const mapState = state => {
    return {

    }
}

export default connect(mapState, {})(UpdateFriend)
