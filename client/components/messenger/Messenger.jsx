import React, { Component } from 'react'
import MessageBox from './MessageBox'
import messageData from './../../../data'
import MessageSearchBar from './MessageSearchBar'

class Messenger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',
      messages: messageData.messages
    }
    this.handleNewMsg = this.handleNewMsg.bind(this)
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange () {
    this.setState({ searchTerm: event.target.value })
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
        <MessageSearchBar
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <MessageBox messages={this.state.messages} handleNewMsg={this.handleNewMsg} />
      </div>
    )
  }
}

export default Messenger
