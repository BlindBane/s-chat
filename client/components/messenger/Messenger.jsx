import React, { Component } from 'react'
import MessageBox from './MessageBox'
import MessageSearchBar from './MessageSearchBar'

class Messenger extends Component {
  state = {
    searchTerm: '',
    messages: this.props.messages
  }
  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  handleNewMsg = (newMsg) => {
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
        <MessageBox
          messages={this.state.messages}
          handleNewMsg={this.handleNewMsg}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default Messenger
