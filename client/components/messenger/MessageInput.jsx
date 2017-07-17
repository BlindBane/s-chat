import React, { Component } from 'react'

class MessageInput extends Component {
  state = {
    messageText: '',
    channel: 'general'
  }
  componentDidMount = () => {
    this.textInput.focus()
  }
  handleChange = (e) => {
    e.preventDefault()
    const messageText = e.target.value
    const lastCharIndex = messageText.length - 1
    if (messageText[0] === '/' && messageText[lastCharIndex] === ' ') {
      this.setState({
        messageText: '',
        channel: messageText.slice(1, lastCharIndex)
      })
    } else {
      this.setState({
        messageText: e.target.value
      })
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const messageText = this.state.messageText
    const lastCharIndex = messageText.length
    if (messageText[0] === '/') {
      this.setState({
        messageText: '',
        channel: messageText.slice(1, lastCharIndex)
      })
    } else {
      const newMsg = {
        msgId: (Math.floor(Math.random() * (9999999999 - 3)) + 3).toString(),
        username: 'Bill',
        messageText: this.state.messageText,
        channel: this.state.channel
      }
      this.props.handleNewMsg(newMsg)
      this.setState({
        messageText: ''
      })
    }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span>[Tell {this.state.channel}: ] - </span>
          <input
            ref={(input) => { this.textInput = input }}
            type='text'
            value={this.state.messageText}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default MessageInput
