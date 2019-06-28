import React from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Loader from 'react-loader-spinner'

import { login } from './actions'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

handleChange = event => {
    this.setState({
        credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
        }
    })
    console.log(this.state.credentials)
}

handleSubmit = event => {

    this.props.login(this.state.credentials).then(() => this.props.history.push('/friendslist'))

    console.log(this.state.credentials)
    console.log(this.state.credentials.username)

    console.log(this.state.credentials.password)

    console.log(localStorage.getItem('token'))
}

render() {
    
        if (this.props.isLoggingIn) {return(
            <Loader type="Oval" color="orange" height={80} width={80} />
            )   
        }
    return (<div> 
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Username</Label>
          <Input type="username" name="username" id="exampleEmail" placeholder="username..." 
                value={this.state.credentials.username}
                onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="" placeholder="password..." 
                value={this.state.credentials.password}
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
        isLoggingIn: state.friendReducer.isLoggingIn
    }
}

export default connect(mapState, {login})(Login)
