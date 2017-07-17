import React, { Component } from 'react'
import MessageBox from './MessageBox'
import messageData from './../../../data'

class Messenger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messages: messageData.messages
    }
    this.handleNewMsg = this.handleNewMsg.bind(this)
  }
  handleNewMsg (newMsg) {
    const newMsgs = [...this.state.messages.slice(0), newMsg]
    this.setState({
      messages: newMsgs
    })
  }
  render () {
    return (
      <div>
        <MessageBox messages={this.state.messages} handleNewMsg={this.handleNewMsg} />
      </div>
    )
  }
}

export default Messenger
