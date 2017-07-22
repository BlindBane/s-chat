import React, { Component } from 'react'
import Header from './Header'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: ''
  }
  handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <div>
        <Header backToLanding />
        <form>
          <label>
            Username:
            <input
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              name='password'
              type='text'
              value={this.state.password}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              name='confirmPassword'
              type='text'
              value={this.state.confirmPassword}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default SignUp
