import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Messenger from './components/messenger/Messenger'
import Landing from './components/Landing'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import MessageDetails from './components/messenger/MessageDetails'

class App extends Component {
  state = {
    messages: this.props.messages
  }
  handleNewMsg = (newMsg) => {
    const newMsgs = [...this.state.messages.slice(0), newMsg]
    this.setState({
      messages: newMsgs
    })
  }
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/messenger' component={() => <Messenger messages={this.state.messages} handleNewMsg={this.handleNewMsg} />} />
            <Route
              path='/message/:id'
              component={(props) => <MessageDetails
                message={this.state.messages.find((msg) => props.match.params.id === msg.msgId)} {...props}
              />}
            />
            <Route path='/user/signin' component={SignIn} />
            <Route path='/user/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
