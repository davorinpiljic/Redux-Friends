import React from "react";
import { connect } from "react-redux";




class Component extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props.friends)
    // call our action
  }

  render() {

    return (
      <div>
        {this.props.friends}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapState = (state) => {
  return {
    friends: state.friendReducer.friends
  }
}
export default connect( mapState, {  })(Component);
