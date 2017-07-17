import React, { Component } from 'react'
import MessageBox from './MessageBox'
import MessageSearchBar from './MessageSearchBar'
import Header from './../Header'

class Messenger extends Component {
  state = {
    searchTerm: ''
  }
  handleSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }
  render (props) {
    return (
      <div>
        <Header />
        <MessageSearchBar
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
        />
        <MessageBox
          messages={this.props.messages}
          handleNewMsg={this.props.handleNewMsg}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default Messenger
